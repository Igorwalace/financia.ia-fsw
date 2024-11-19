"use server";

import GETSession from "@/app/db/session";
import Stripe from "stripe";

const CreateCheckoutStripe = async () => {
  const sessionUser = await GETSession();
  const userId = sessionUser?.user?.id;
  if (!userId) {
    return {
      error: {
        message: "Erro",
      },
    };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string, {
    apiVersion: "2024-10-28.acacia",
  });

  const sessionStripe = await stripe.checkout.sessions.create({
    subscription_data: {
      metadata: {
        authUserId: userId,
      },
    },
    payment_method_types: ["card"],
    mode: "subscription",
    success_url: "http://localhost:3000/app/signature",
    cancel_url: "http://localhost:3000/app/signature",
    line_items: [
      {
        price: process.env.STRIPE_PREMIUM_PRICE_ID,
        quantity: 1,
      },
    ],
  });
  return { sessionId: sessionStripe.id };
};

export default CreateCheckoutStripe;
