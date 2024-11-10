import Image from "next/image";
import ButtonSignIn from "./button-login";
import GETSession from "../db/session";
import { redirect } from "next/navigation";

const SignIn = async () => {

    const session = await GETSession()
    if(session){
        return redirect('/app/dashboard')
    }

    return (
        <>
            <div className='grid grid-cols-2 h-full' >
                {/* Direita */}
                <div className='max-w-[488px] mx-auto flex flex-col items-start justify-center gap-7' >
                    <Image
                        src="/logo.svg"
                        width={173}
                        height={39}
                        alt="Finance AI"
                        className=""
                    />
                    <div className='space-y-3' >
                        <h1 className='font-bold text-4xl' >Bem-vindo</h1>
                        <p className='text-base opacity-60' >A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
                    {/* TODO: Implement the sign in button */}
                    </div>
                    <ButtonSignIn />
                </div>
                {/* Image */}
                <div className='relative w-full h-full' >
                    <Image
                        src="/image-login.png"
                        alt="Decorative Image"
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
        </>
    );
}

export default SignIn;