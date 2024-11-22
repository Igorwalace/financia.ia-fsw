import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";

const AmountSaldo = async () => {

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
            <h1 className={`text-4xl font-bold ${amount_total < 0 && 'text-danger line-through'}`} >
                {
                    new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(Number(amount_total))
                }
            </h1>
        </>
    );
}

export default AmountSaldo;