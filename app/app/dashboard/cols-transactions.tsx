import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";

const ColsTransactions = () => {
    return (
        <>
            <div className="border-2 border-white border-opacity-[8%] rounded-2xl p-6 ">
                <div className='flex items-center justify-between' >
                    <h1 className='font-bold' >Transações</h1>
                    <Button variant='outline' className='rounded-[100px] text-sm' >Ver mais</Button>
                </div>
                <Separator className='my-6' />
            </div>
        </>
    );
}

export default ColsTransactions;