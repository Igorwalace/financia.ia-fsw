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
import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@/app/_components/ui/button";
import DeleteTransactions from "../_actions/delete-transactions";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface DialogDeleteTransactionsProps {
    openDialogDeleteTransactions: boolean
    setOpenDialogTransactions: Dispatch<SetStateAction<boolean>>
    id: string
}

const DialogDeleteTransactions = ({ openDialogDeleteTransactions, setOpenDialogTransactions, id }: DialogDeleteTransactionsProps) => {

    const [loading, setLoading] = useState(false)

    const handleDeleteTransactions = async () => {
        try {
            setLoading(true)
            await DeleteTransactions({ id })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            setOpenDialogTransactions(false)
        }
    }

    return (
        <>
            <AlertDialog open={openDialogDeleteTransactions} onOpenChange={setOpenDialogTransactions} >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Deseja mesma excluir permanentemente essa transação? Você ainda poderá adicionar outras.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={loading} >Voltar</AlertDialogCancel>
                        <Button onClick={handleDeleteTransactions} disabled={loading} >
                            {
                                loading
                                    ?
                                    <>
                                        <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                        Carregando
                                    </>
                                    :
                                    'Excluir'
                            }
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    );
}

export default DialogDeleteTransactions;