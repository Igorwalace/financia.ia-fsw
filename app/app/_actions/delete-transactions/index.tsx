'use server'
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";
import { revalidatePath } from "next/cache";

interface DeleteTransactionsProps {
    id: string
}

const DeleteTransactions = async ({ id }: DeleteTransactionsProps) => {

    const session = await GETSession()
    const userId = session?.user?.id
    if (!userId) {
        return {
            error: {
                message: "Erro",
            },
        };
    }

    await prisma.transaction.delete({
        where: {
            userId,
            id
        }
    })

    revalidatePath("/app/transactions")
    revalidatePath("/app/dashboard")
}

export default DeleteTransactions