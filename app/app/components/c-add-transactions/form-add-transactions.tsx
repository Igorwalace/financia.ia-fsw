'use client'

import {
    Dialog,
    DialogContent
} from "@/app/_components/ui/dialog"
import useAppUtils from "@/app/context/utils";
import Form from "./form";

const FormAddTransactions = () => {

    const { openDialogFormAddTransactions, setOpenDialogFormAddTransactions } = useAppUtils()

    return (
        <>
            <Dialog onOpenChange={setOpenDialogFormAddTransactions} open={openDialogFormAddTransactions} >
                <DialogContent className='overflow-y-auto max-h-[95%] scrollbar-none' >
                    <div className='' >
                        <h1 className='text-xl font-bold' >Criar transação</h1>
                        <h1 className='text-sm font-normal text-white text-opacity-[6%]' >Insira as informações abaixo</h1>
                    </div>
                    <Form />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default FormAddTransactions;