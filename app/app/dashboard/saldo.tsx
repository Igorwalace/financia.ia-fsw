import GETSession from "@/app/db/session";
import AmountSaldo from "./amount-saldo";
import { prisma } from "@/app/services/prisma";

const Saldo = async () => {
    
    const session = await GETSession()
    const userId = session?.user?.id

    const transactions = await prisma.transaction.findMany({
        where: {
            userId
        }
    })

    const amount_expenses = transactions.reduce((acc, amount) => {
        return amount.type === 'EXPENSE' ? Number(amount.amount) + Number(acc) : acc;
    }, 0);
    const amount_deposits = transactions.reduce((acc, amount) => {
        return amount.type != 'EXPENSE' ? Number(amount.amount) + Number(acc) : acc;
    }, 0);

    const amount_total = Number(amount_deposits) - Number(amount_expenses)

    return (
        <>
            <div className='flex items-center justify-center gap-3 font-bold' >
                <AmountSaldo amount_total={amount_total} />
            </div>
        </>
    );
}

export default Saldo;