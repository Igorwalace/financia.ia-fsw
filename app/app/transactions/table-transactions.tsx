import { prisma } from "@/app/services/prisma";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/_components/ui/table"
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import GETSession from "@/app/db/session";
import { redirect } from "next/navigation";
import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";
import { TransactionType } from "@prisma/client";
import { TRANSACTION_CATEGORY_LABELS, TRANSACTION_PAYMENT_METHOD_LABELS } from "./transactions-constant";

const TableTransctions = async () => {

    const session = await GETSession()
    if (!session) return redirect('/')
    const transactions = await prisma.transaction.findMany({
        where: {
            userId: session?.user?.id
        }
    });

    return (
        <>
            {
                transactions.length === 0
                    ?
                    <h1>Sem transações</h1>
                    :
                    <>
                        <div className='m-6 border-[1px] rounded-xl' >
                            <Table className='' >
                                <TableHeader className='bg-[#191817]'>
                                    <TableRow>
                                        <TableHead className='text-white' >Name</TableHead>
                                        <TableHead className='text-white' >Tipo</TableHead>
                                        <TableHead className='text-white' >Categoria</TableHead>
                                        <TableHead className='text-white' >Método</TableHead>
                                        <TableHead className='text-white' >Valor</TableHead>
                                        <TableHead className='text-white' >Data</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {

                                        transactions.map((transaction) => (
                                            <TableRow key={transaction.id} >
                                                <TableCell className="capitalize">{transaction.name}</TableCell>
                                                <TableCell>
                                                    {
                                                        transaction.type === TransactionType.DEPOSIT
                                                        &&
                                                        <Badge className="bg-muted font-bold text-primary hover:bg-muted">
                                                            <CircleIcon className="mr-2 fill-primary" size={10} />
                                                            Depósito
                                                        </Badge>
                                                    }
                                                    {
                                                        transaction.type === TransactionType.EXPENSE
                                                        &&
                                                        <Badge className="font bold bg-danger bg-opacity-10 text-danger ">
                                                            <CircleIcon className="mr-2 fill-danger" size={10} />
                                                            Despesa
                                                        </Badge>
                                                    }
                                                    {
                                                        transaction.type === TransactionType.INVESTMENT
                                                        &&
                                                        <Badge className="font bold bg-white bg-opacity-10 text-white">
                                                            <CircleIcon className="mr-2 fill-white" size={10} />
                                                            Investimento
                                                        </Badge>
                                                    }
                                                </TableCell>
                                                <TableCell>{TRANSACTION_CATEGORY_LABELS[transaction.category]}</TableCell>
                                                <TableCell>
                                                    {TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod]}
                                                </TableCell>
                                                <TableCell className='text-opacity-60 text-white' >
                                                    {format(transaction.date, "d 'de' LLLL yyyy", {
                                                        locale: ptBR
                                                    })}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        new Intl.NumberFormat("pt-BR", {
                                                            style: "currency",
                                                            currency: "BRL",
                                                        }).format(Number(transaction.amount))
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                        <h1 className='text-center text-white text-opacity-60' >O histórico completo de suas operações financeiras.</h1>
                    </>
            }
        </>
    );
}

export default TableTransctions;