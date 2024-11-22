'use client'
import { Button } from "@/app/_components/ui/button";
import { Eye } from "lucide-react";

const HiddenEyes = () => {
    return (
        <Button onClick={() => { alert('Em breve!') }} className='p-0 m-0 hover:bg-transparent cursor-pointer' variant='ghost' asChild >
            <Eye width={25} height={25} />
        </Button>
    );
}

export default HiddenEyes;