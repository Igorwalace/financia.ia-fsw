import { Button } from "@/app/_components/ui/button";

const ButtonGerenciarPlan = () => {
    return (
        <>
            <Button id='buttonTransition' variant='outline' className='hover:bg-transparent hover:text-primary hover:scale-105 border-transparent font-bold lg:text-sm text-xs text-primary w-full rounded-[100px] mt-6' >Gerenciar Plano</Button>
        </>
    );
}

export default ButtonGerenciarPlan;