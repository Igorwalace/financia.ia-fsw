import LastTransactions from "./last-transactions";
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";

const DivPreTransactions = async () => {

    const session = await GETSession()
    const userId = session?.user?.id

    const transactions = await prisma.transaction.findMany({
        where: {
            userId
        },
        orderBy: {
            date: 'desc',
        },
        take: 5,
    })

    return (
        <div className='space-y-6' >
            {transactions
                .map((transaction) => (
                    <LastTransactions key={transaction.id} transaction={transaction} />
                ))}
        </div>
    );
}

export default DivPreTransactions;