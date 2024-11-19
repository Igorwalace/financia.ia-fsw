'use client'

import { FcGoogle } from "react-icons/fc";
import { Button } from "../_components/ui/button";
import { signIn } from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

const ButtonSignIn = () => {

    const [loadingSignIn, setLoadingSignIn] = useState(false)

    const handleSignIn = async () => {
        try {
            setLoadingSignIn(true)
            await signIn("google")
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSignIn(false)
        }
    }

    return (
        <>
            <Button onClick={handleSignIn} variant='outline' disabled={loadingSignIn} className='w-full text-sm font-semibold' >
                {
                    !loadingSignIn
                        ?
                        <>
                            <FcGoogle className='' />
                            Entrar com o Google
                        </>
                        :
                        <>
                            <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                            Redirecionando
                        </>
                }
            </Button>
        </>
    );
}

export default ButtonSignIn;