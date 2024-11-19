'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogHeader,
    DialogTitle,
    // DialogTrigger,
} from "@/app/_components/ui/dialog"
import useAppUtils from "@/app/context/utils";

const FormAddTransactions = () => {

    const { openDialogFormAddTransactions, setOpenDialogFormAddTransactions } = useAppUtils()

    return (
        <>
            <Dialog onOpenChange={setOpenDialogFormAddTransactions} open={openDialogFormAddTransactions} >
                <DialogContent>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default FormAddTransactions;