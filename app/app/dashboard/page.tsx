import { Button } from "@/app/_components/ui/button";
import Header from "../header";
import SelectMonth from "./select";
import Image from "next/image";
import Saldo from "./saldo";
import ButtonAddTransctions from "./button-add-transctions";
import GETSession from "@/app/db/session";
import { redirect } from "next/navigation";
import Cards from "./cards";
import ColsTransactions from "./cols-transactions";
import Chart from "./chart";
import FormAddTransactions from "../components/c-add-transactions/form-add-transactions";

const Dashboard = async () => {

    const session = await GETSession()
    if (!session) {
        return redirect('/')
    }

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
                <div className='grid grid-cols-[62%_35%] justify-between w-full h-full mt-4' >
                    <div className="grid gap-6 h-full">
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
                            {/* button add transctions  */}
                            <ButtonAddTransctions />
                        </div>
                        {/* Investimento */}
                        <Cards />
                        <div className='grid grid-cols-[31%_66%] justify-between gap-6' >
                            {/* Gráfico */}
                            <Chart />
                            {/* categoria */}
                            <div className='border-2 border-white border-opacity-[8%] rounded-2xl px-6 py-8 ' >

                            </div>
                        </div>
                    </div>
                    <ColsTransactions />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <FormAddTransactions />
            </div>
        </>
    );
}

export default Dashboard;