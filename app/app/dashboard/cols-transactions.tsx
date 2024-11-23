import { Separator } from "@/app/_components/ui/separator";
import ButtonSeeMore from "./button-see-more";
import DivPreTransactions from "./div-pre-transactions";

const ColsTransactions = () => {

    return (
        <>
            <div className="border-2 border-white border-opacity-[8%] rounded-2xl p-6 ">
                <div className='flex items-center justify-between' >
                    <h1 className='font-bold' >Transações</h1>
                    <ButtonSeeMore />
                </div>
                <Separator className='my-6' />
                <DivPreTransactions />
            </div>
        </>
    );
}

export default ColsTransactions;