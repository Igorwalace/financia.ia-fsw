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
                    <div className="">
                        {/* Saldo */}
                        <div className='bg-[#161716] border-2 border-white border-opacity-[8%] rounded-2xl px-6 py-8 flex justify-between items-end' >
                            {/* valor do saldo */}
                            <div className="flex flex-col justify-between items-start gap-3" >
                                <div className='flex gap-2 items-center justify-start' >
                                    <div className='bg-[#0F0E11] rounded-lg w-8 h-8 flex items-center justify-center' >
                                        <Image
                                            src="/saldo.svg"
                                            width={16}
                                            height={16}
                                            quality={100}
                                            alt="Icon Saldo"
                                            className=""
                                        />
                                    </div>
                                    <h1 className='text-sm font-semibold' >Saldo</h1>
                                </div>
                                <Saldo />
                            </div>
                            {/* button add transctions */}
                            <div>
                                <ButtonAddTransctions />
                            </div>
                        </div>
                        {/* Investimento */}
                        <div className='grid grid-cols-3' ></div>
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