'use client'

import { Button } from "@/app/_components/ui/button";
import { ArrowDownUp } from "lucide-react";

const ButtonAddTransctions = () => {
    return (
        <>
            <Button variant='default' className='font-bold rounded-[100px]' onClick={()=>{alert('Em breve!')}} >
                Adicionar Transação
                <ArrowDownUp />
            </Button>
        </>
    );
}

export default ButtonAddTransctions;