import { Separator } from "@/app/_components/ui/separator";
import { CheckIcon } from "lucide-react";
import ButtonAdquirirPlano from "./button-adquirir-plano";

const CardProSignature = () => {
    return (
        <>
            <div className='flex flex-col rounded-xl border-[1px] border-white border-opacity-[8%]' >
                <div className='flex justify-center items-center flex-col gap-1 p-6' >
                    <h1 className='text-xl font-bold' >Plano Pro</h1>
                    <span className='text-2xl' >R$ <span className='text-5xl relative top-2' >19</span> <span className='text-white text-xl text-opacity-[8%]' >/mês</span> </span>
                </div>
                <Separator />
                <div className='flex justify-center items-start flex-col gap-1 p-6 font-extralight' >
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='text-sm' >Transações ilimitados</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='text-sm' >Relatórios de IA ilimitados</h1>
                    </div>
                    <div className="flex justify-center items-center gap-1" >
                        <CheckIcon size={17} className='text-primary' /><h1 className='text-sm' >...</h1>
                    </div>
                    <ButtonAdquirirPlano />
                </div>
            </div>
        </>
    );
}

export default CardProSignature;