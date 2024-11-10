import { Button } from "@/app/_components/ui/button";
import Header from "../header";
import SelectMonth from "./select";
import Image from "next/image";
import Saldo from "./saldo";
import ButtonAddTransctions from "./button-add-transctions";

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="py-4 px-6" >
                {/* header page dashboard */}
                <div className='flex justify-between items-center' >
                    <h1 className='text-2xl font-bold' >Dashboard</h1>
                    <div className="flex gap-3 justify-between items-center" >
                        <Button variant='ghost' className="text-white font-semibold" >
                            Relatório IA
                            <Image
                                src="/report.svg"
                                width={15}
                                height={17}
                                alt="Finance AI"
                                className=""
                            />
                        </Button>
                        <SelectMonth />
                    </div>
                </div>
                {/* info dashboard */}
                <div className='grid grid-cols-[62%_35%] justify-between w-full mt-4' >
                    <div className="grid gap-6">
                        {/* Card Saldo */}
                        <div className='bg-[#161716] border-2 border-white border-opacity-[8%] rounded-2xl px-6 py-8 flex justify-between items-end' >
                            {/* valor do saldo */}
                            <div className="flex flex-col justify-between items-start gap-3" >
                                <div className='flex gap-2 items-center justify-start' >
                                    <div className='bg-[#0F0E11] rounded-lg w-8 h-8 flex items-center justify-center' >
                                        <Image
                                            src="/Icon-saldo.png"
                                            width={36}
                                            height={36}
                                            quality={100}
                                            alt="Icon Saldo"
                                            className=""
                                        />
                                    </div>
                                    <h1 className='text-sm font-semibold text-[#71717A]' >Saldo</h1>
                                </div>
                                <Saldo />
                            </div>
                            {/* button add transctions */}
                            <ButtonAddTransctions />
                        </div>
                        {/* Investimento */}
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
                                <h1 className='font-bold text-2xl' >R$ 3.500</h1>
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
                                <h1 className='font-bold text-2xl' >R$ 8.150</h1>
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
                                <h1 className='font-bold text-2xl' >R$ 2.950</h1>
                            </div>
                        </div>
                        {/* Gráfico */}
                        <div></div>
                    </div>
                    <div className="bg-green-500 h-full">Coluna 2 (30%)</div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;