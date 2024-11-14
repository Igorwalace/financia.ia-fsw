'use server'

import GETSession from "@/app/db/session";
import Stripe from 'stripe'

const CreateCheckoutStripe = async () => {

    const sessionUser = await GETSession()
    if (!sessionUser?.user) {
        throw new Error('Usuário não logado!')
    }

    const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string, {
        apiVersion: '2024-10-28.acacia',
    })

    const userId = sessionUser.user.id

    const sessionStripe = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        success_url: 'https://localhost:3000/app/signature',
        cancel_url: 'https://localhost:3000',
        line_items: [
            {
                price: process.env.STRIPE_PREMIUM_PRICE_ID,
                quantity: 1,
            }
        ],
        subscription_data: {
            metadata: {
                userId: userId || ''
            }
        },
    });
    return { sessionId: sessionStripe.id }
}

export default CreateCheckoutStripe;