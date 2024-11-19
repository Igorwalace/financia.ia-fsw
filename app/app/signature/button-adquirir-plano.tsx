'use client'
import { Button } from "@/app/_components/ui/button";
import CreateCheckoutStripe from "../_actions/create-checkout-stripe";
import { loadStripe } from '@stripe/stripe-js'

const ButtonAdquirirPlano = () => {

    const handleCheckoutStripe = async () => {
        const { sessionId } = await CreateCheckoutStripe()

        if (!sessionId) {
            console.log('SessionId')
            return
        }

        if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
            throw new Error('Stripe public key not found')
        }

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

        if (!stripe) {
            throw new Error('Stripe not found')
        }
        await stripe.redirectToCheckout({ sessionId })
    }

    return (
        <>
            <Button
                id='buttonTransition'
                variant='outline'
                className='hover:bg-primary hover:scale-105 bg-primary text-white font-bold text-sm w-full rounded-[100px] mt-6'
                onClick={handleCheckoutStripe}
            >
                Adquirir Plano
            </Button>
        </>
    );
}

export default ButtonAdquirirPlano;