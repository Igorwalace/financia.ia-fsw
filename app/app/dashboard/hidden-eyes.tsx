'use client'
import { Button } from "@/app/_components/ui/button";
import useAppUtils from "@/app/context/utils";
import { Eye, EyeOff } from "lucide-react";

const HiddenEyes = () => {

    const { eyeOrEyeOff, setEyeOrEyeOff } = useAppUtils()

    return (
        <>
        <h1 className='text-sm font-semibold text-[#71717A]' >Saldo</h1>
        <Button onClick={() => { setEyeOrEyeOff(!eyeOrEyeOff) }} className='p-0 m-0 hover:bg-transparent cursor-pointer' variant='ghost' asChild >
            {
                eyeOrEyeOff
                    ?
                    <Eye width={25} height={25} />
                    :
                    <EyeOff width={25} height={25} />
            }
        </Button>
        </>
    );
}

export default HiddenEyes;