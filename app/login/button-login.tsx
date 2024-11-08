'use client'

import { FcGoogle } from "react-icons/fc";
import { Button } from "../_components/ui/button";
import { signIn } from "next-auth/react";

const ButtonSignIn = () => {
    return (
        <>
            <Button onClick={() => signIn("google")} variant='outline' className='w-full text-sm font-semibold' ><FcGoogle className='' /> Entrar com o Google</Button>
        </>
    );
}

export default ButtonSignIn;