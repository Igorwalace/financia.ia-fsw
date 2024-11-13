import { Button } from "@/app/_components/ui/button";

const ButtonUpgrade = () => {
    return (
        <>
            <Button id='buttonTransition' variant='outline' className='hover:bg-transparent hover:text-primary hover:scale-95 border-primary font-bold text-sm text-primary w-full rounded-[100px] mt-6' >Fazer Upgrade</Button>
        </>
    );
}

export default ButtonUpgrade;