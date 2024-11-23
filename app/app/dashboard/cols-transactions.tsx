import { Separator } from "@/app/_components/ui/separator";
import ButtonSeeMore from "./button-see-more";
import DivPreTransactions from "./div-pre-transactions";
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";

const ColsTransactions = async () => {

    const session = await GETSession()
    const userId = session?.user?.id

    const transactions = await prisma.transaction.findMany({
        where: {
            userId
        },
        orderBy: {
            date: 'desc',
        }
    })

    return (
        <>
            <div className="border-2 border-white border-opacity-[8%] rounded-2xl p-6 ">
                <div className='flex items-center justify-between' >
                    <h1 className='font-bold' >Transações</h1>
                    <ButtonSeeMore transactions={transactions} />
                </div>
                <Separator className='my-6' />
                <DivPreTransactions />
            </div>
        </>
    );
}

export default ColsTransactions;