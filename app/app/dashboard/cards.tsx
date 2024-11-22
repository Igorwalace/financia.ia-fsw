import Image from "next/image";
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";

const Cards = async () => {

    const session = await GETSession()
    const userId = session?.user?.id

    const transactions = await prisma.transaction.findMany({
        where: {
            userId
        }
    })

    const amount_investment = transactions.reduce((acc, amount) => {
        return amount.type === 'INVESTMENT' ? Number(amount.amount) + Number(acc) : acc;
    }, 0);
    const amount_deposits = transactions.reduce((acc, amount) => {
        return amount.type === 'DEPOSIT' ? Number(amount.amount) + Number(acc) : acc;
    }, 0);
    const amount_expense = transactions.reduce((acc, amount) => {
        return amount.type === 'EXPENSE' ? Number(amount.amount) + Number(acc) : acc;
    }, 0);

    return (
        <>
            <div className='grid grid-cols-3 gap-6' >
                {/* card 1 */}
                <div className='bg-[#161518] rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-piggy.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Piggy"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Investido
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(amount_investment))
                        }
                    </h1>
                </div>
                {/* card 2 */}
                <div className='rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-arrow-ganhos.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Arrow Ganhos"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Receita
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(amount_deposits))
                        }
                    </h1>
                </div>
                {/* card 3 */}
                <div className='rounded-2xl p-6 border-2 grid gap-3 border-white border-opacity-[8%]' >
                    <div className='flex justify-start items-center gap-1' >
                        <Image
                            src="/Icon-arrow-despesas.png"
                            width={36}
                            height={36}
                            quality={100}
                            alt="Icon Arrow Despesas"
                            className=""
                        />
                        <h1 className='text-sm font-semibold text-[#71717A]' >
                            Despesas
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl' >
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(amount_expense))
                        }
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Cards;