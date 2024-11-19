'use client'

import { Button } from "@/app/_components/ui/button";
import useAppUtils from "@/app/context/utils";
import { ArrowDownUp } from "lucide-react";

const ButtonAddTransctions = () => {

    const { setOpenDialogFormAddTransactions } = useAppUtils()
    
    return (
        <>
            <Button variant='default' className='font-bold rounded-[100px]' onClick={() => setOpenDialogFormAddTransactions(true)} >
                Adicionar Transação
                <ArrowDownUp />
            </Button>
        </>
    );
}

export default ButtonAddTransctions;