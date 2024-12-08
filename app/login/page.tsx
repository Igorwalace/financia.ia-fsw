import Image from "next/image";
import ButtonSignIn from "./button-login";
import GETSession from "../db/session";
import { redirect } from "next/navigation";

const SignIn = async () => {

    const session = await GETSession()
    if (session) {
        return redirect('/app/dashboard')
    }

    return (
        <>
            <div className='lg:grid grid-cols-2 h-full flex justify-center items-center' >
                {/* Direita */}
                <div className='lg:max-w-[488px] w-[90%] mx-auto flex flex-col items-start justify-center gap-7' >
                    <div className='relative w-[173px] lg:h-[39px] h-[39px] -mb-2'>
                        <Image
                            src="/logo.svg"
                            fill
                            alt="Finance AI"
                            className="object-cover"
                        />
                    </div>
                    <div className='space-y-3' >
                        <h1 className='font-bold lg:text-4xl text-2xl' >Bem-vindo</h1>
                        <p className='lg:text-base text-sm opacity-60' >A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
                        {/* TODO: Implement the sign in button */}
                    </div>
                    <ButtonSignIn />
                </div>
                {/* Image */}
                <div className='relative w-full h-full lg:block hidden' >
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