'use client'
import useAppUtils from "@/app/context/utils";
import { Ellipsis } from "lucide-react";

interface AmountProps {
    amount_total: number
}

const AmountSaldo = ({ amount_total }: AmountProps) => {

    const { eyeOrEyeOff } = useAppUtils()

    return (
        <>
            {
                eyeOrEyeOff
                    ?
                    <>
                        <h1 className={`text-4xl font-bold flex gap-3 items-center`} >
                            R$
                            <div className='flex items-center justify-center' >
                                <Ellipsis className='text-4xl' />
                                <Ellipsis className='text-4xl' />
                            </div>
                        </h1>
                    </>
                    :
                    <h1 className={`text-4xl font-bold ${amount_total < 0 && 'text-danger'}`} >
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(amount_total))
                        }
                    </h1>
            }
        </>
    );
}

export default AmountSaldo;