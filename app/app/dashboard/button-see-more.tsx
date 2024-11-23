'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/app/_components/ui/sheet"

import { Button } from "@/app/_components/ui/button";
import useAppUtils from "@/app/context/utils";
import { Transaction } from "@prisma/client";
import LastTransactions from "./last-transactions";

interface transactionsProps {
    transactions: Transaction[]
}

const ButtonSeeMore = ({ transactions }: transactionsProps) => {

    const { setSheetSeeMore } = useAppUtils()

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Button onClick={() => setSheetSeeMore(true)} variant='outline' className='rounded-[100px] text-sm' >Ver mais</Button>
                </SheetTrigger>
                <SheetContent className=' overflow-y-auto scrollbar-none' >
                    <div className='flex items-center justify-between mb-5' >
                        <h1 className='font-bold' >Transações</h1>
                    </div>
                    <div className='space-y-6' >
                        {transactions
                            .map((transaction) => (
                                <LastTransactions key={transaction.id} transaction={transaction} />
                            ))}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default ButtonSeeMore;