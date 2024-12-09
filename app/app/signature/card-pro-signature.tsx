import { Separator } from "@/app/_components/ui/separator";
import { CheckIcon } from "lucide-react";
import ButtonAdquirirPlano from "./button-adquirir-plano";
import GETSession from "@/app/db/session";
import { prisma } from "@/app/services/prisma";
import ButtonGerenciarPlan from "./button-gerencia-plan";

const CardProSignature = async () => {

    const session = await GETSession()

    const db = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        }
    })
    const premiumOrNopremium = db?.subscriptionPlan

    return (
        <>
            <div className={`flex flex-col rounded-xl border-[1px] ${premiumOrNopremium === 'Premium' ? 'border-primary' : 'border-white'} border-opacity-[8%]`} >
                <div className='flex justify-center items-center flex-col gap-1 p-6' >
                    <h1 className='lg:text-xl text-base font-bold' >Plano Pro</h1>
                    <span className='lg:text-2xl text-lg' >R$ <span className='lg:text-5xl text-3xl relative top-2' >19</span> <span className='text-white lg:text-xl text-base text-opacity-[8%]' >/mês</span> </span>
                </div>
                <Separator />
                <div className='flex justify-center items-start flex-col gap-1 p-6 font-extralight' >
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='lg:text-sm text-xs' >Transações ilimitados</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='lg:text-sm text-xs' >Relatórios de IA ilimitados</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='lg:text-sm text-xs' >...</h1>
                    </div>
                    {
                        premiumOrNopremium === 'Premium'
                            ?
                            <ButtonGerenciarPlan />
                            :
                            <ButtonAdquirirPlano />
                    }
                </div>
            </div>
        </>
    );
}

export default CardProSignature;