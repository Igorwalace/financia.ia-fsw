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

interface NameProps {
    name: string
    avatar: string
}

const ButtonUser = ({ name, avatar }: NameProps) => {

    const [dialogSignOut, setDialogSignOut] = useState(false)
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
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Sair</AlertDialogTitle>
                            <AlertDialogDescription>
                                Deseja sair da plataforma?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className='grid grid-cols-2' >
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