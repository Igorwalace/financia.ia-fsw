'use client'
import { Button } from "@/app/_components/ui/button";
import { Eye } from "lucide-react";

const Saldo = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-3 font-bold' >
                <h1 className='text-4xl font-bold' >R$ 2.311,443</h1>
                <Button onClick={() => { alert('Em breve!') }} className='p-0 m-0 hover:bg-transparent cursor-pointer' variant='ghost' asChild ><Eye width={25} height={25} /></Button>
            </div>
        </>
    );
}

export default Saldo;