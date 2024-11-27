'use client'
import { Button } from "@/app/_components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import DialogDeleteTransactions from "./dialog-delete-transactions";

interface ButtonDeleteTransactionsProps {
    id: string
}

const ButtonDeleteTransactions = ({ id }: ButtonDeleteTransactionsProps) => {

    const [openDialogDeleteTransactions, setOpenDialogTransactions] = useState(false)

    const handleDeleteTransactions = () => {
        setOpenDialogTransactions(true)
    }

    return (
        <>
            <Button onClick={handleDeleteTransactions} variant='ghost' ><Trash2 size={20} /></Button>
            <DialogDeleteTransactions
                openDialogDeleteTransactions={openDialogDeleteTransactions}
                setOpenDialogTransactions={setOpenDialogTransactions}
                id={id}
            />
        </>
    );
}

export default ButtonDeleteTransactions;