import { Separator } from "@/app/_components/ui/separator";
import { CheckIcon, X } from "lucide-react";
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";

const CardBasicSignature = async () => {

    const session = await GETSession()

    const db_user = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        }
    })
    const premiumOrNopremium = db_user?.subscriptionPlan

    const db_transactions = await prisma.transaction.findMany({
        where: {
            userId: session?.user?.id
        }
    })
    const quantyTransactionsCurrent = db_transactions.length

    return (
        <>
            <div className={`flex flex-col rounded-xl border-[1px] ${premiumOrNopremium != 'Premium' ? 'border-primary' : 'border-white'} border-opacity-[8%]`} >
                <div className='flex justify-center items-center flex-col gap-1 p-6' >
                    <h1 className='text-xl font-bold' >Plano Básico</h1>
                    <span className='text-2xl' >R$ <span className='text-5xl relative top-2' >0</span> <span className='text-white text-xl text-opacity-[8%]' >/mês</span> </span>
                </div>
                <Separator />
                <div className='flex justify-center items-start flex-col gap-1 p-6 font-extralight' >
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='text-sm' >Apenas 10 transações por dia {quantyTransactionsCurrent}/10</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <X size={17} className='text-white' /><h1 className='text-sm' >Relatórios de IA ilimitados</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <X size={17} className='text-white' /><h1 className='text-sm' >...</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardBasicSignature;