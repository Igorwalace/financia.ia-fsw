'use server'

import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface CreateTransctionsProps {
    name: string;
    amount: number;
    date: Date;
    paymentMethod: TransactionPaymentMethod;
    type: TransactionType;
    category: TransactionCategory;
}

const CreateTransctions = async ({ name, amount, date, paymentMethod, type, category }: CreateTransctionsProps) => {

    const session = await GETSession()
    const userId = session?.user?.id
    if (!userId) {
        return {
            error: {
                message: "Erro",
            },
        };
    }

    await prisma.transaction.create({
        data: {
            amount,
            category,
            name,
            paymentMethod,
            date,
            type,
            userId,
        }
    })
    revalidatePath("/app/transactions")
    revalidatePath("/app/dashboard")
}

export default CreateTransctions;