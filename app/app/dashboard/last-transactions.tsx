import Image from "next/image";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "../constant/transactions-constant";
import { Transaction } from "@prisma/client";

export interface LastTransactions {
    transaction: Transaction
}

const LastTransactions = ({ transaction }: LastTransactions) => {

    return (

        <div
            key={transaction.id}
            className="flex items-center justify-between"
        >
            <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white bg-opacity-[3%] p-3 text-white">
                    <Image
                        src={`/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                        height={20}
                        width={20}
                        alt="PIX"
                    />
                </div>
                <div>
                    <p className="text-sm font-bold">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                    </p>
                </div>
            </div>
            <p className={`text-sm font-bold ${transaction.type === 'DEPOSIT' ? 'text-primary' : transaction.type === 'EXPENSE' ? 'text-danger' : transaction.type === 'INVESTMENT' && 'text-white'}`}>
                {transaction.type === 'DEPOSIT' ? '+ ' : transaction.type === 'EXPENSE' ? '- ' : transaction.type === 'INVESTMENT' && '+ '}
                {
                    new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(Number(transaction.amount))
                }
            </p>
        </div>

    );
}

export default LastTransactions;