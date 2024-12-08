'use client'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog"
import { Button } from "@/app/_components/ui/button";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { signOut } from "next-auth/react"
import Image from "next/image";
import useAppUtils from "@/app/context/utils";

interface NameProps {
    name: string
    avatar: string
}

const ButtonUser = ({ name, avatar }: NameProps) => {

    const { dialogSignOut, setDialogSignOut } = useAppUtils()
    const [loading, setLoading] = useState(false)

    const handleSignOut = async () => {
        try {
            setLoading(true)
            await signOut()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            setDialogSignOut(false)
        }
    }

    return (
        <>
            <Button onClick={() => setDialogSignOut(true)} variant='outline' >
                <div className='' >
                    <Image
                        src={avatar}
                        width={25}
                        height={27}
                        alt='avatar'
                        className='rounded-full border-[1px] border-white border-opacity-[10%]'
                    />
                </div>
                {name}
            </Button>
            <>
                <AlertDialog open={dialogSignOut} onOpenChange={setDialogSignOut} >
                    <AlertDialogContent className='max-w-[90%] rounded-lg' >
                        <AlertDialogHeader>
                            <AlertDialogTitle className='text-left' >Sair</AlertDialogTitle>
                            <AlertDialogDescription className='text-left'>
                                Deseja sair da plataforma?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className='grid lg:grid-cols-2 grid-cols-1 gap-2' >
                            <AlertDialogCancel disabled={loading} >Voltar</AlertDialogCancel>
                            <Button onClick={handleSignOut} disabled={loading} >
                                {
                                    loading
                                        ?
                                        <>
                                            <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                            Saindo
                                        </>
                                        :
                                        'Sair'
                                }
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </>
        </>
    );
}

export default ButtonUser;