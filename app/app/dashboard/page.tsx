import { Button } from "@/app/_components/ui/button";
import Header from "../header";
import SelectMonth from "./select";
import Image from "next/image";

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="py-4 px-6" >
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
            </div>
        </>
    );
}

export default Dashboard;