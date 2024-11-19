// import { PlanUser } from "@/app/app/_actions/plan-user";
import { prisma } from "@/app/services/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_SECRETE_KEY || !process.env.STRIPE_WEBHOOKS_SECRET) {
    return NextResponse.error();
  }
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.error();
  }
  const text = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string, {
    apiVersion: "2024-10-28.acacia",
  });
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOKS_SECRET as string,
  );

  switch (event.type) {
    case "invoice.paid": {
      // Atualizar o usuário com o seu novo plano
      const { subscription_details } = event.data.object;
      const authUserId = subscription_details?.metadata?.authUserId;
      if (!authUserId) {
        return NextResponse.error();
      }

      await prisma.user.update({
        where: {
          id: authUserId,
        },
        data: {
          subscriptionPlan: "Premium",
        },
      });
      break;
    }

    case "customer.subscription.deleted": {
      // Remover plano premium do usuário
      const subscription = await stripe.subscriptions.retrieve(
        event.data.object.id,
      );
      const authUserId = subscription?.metadata?.authUserId;
      if (!authUserId) {
        return NextResponse.error();
      }

      await prisma.user.update({
        where: {
          id: authUserId,
        },
        data: {
          subscriptionPlan: 'NOPremium',
        },
      });
      break;
    }
  }
  return NextResponse.json({ received: true });
};
