import { FcGoogle } from "react-icons/fc";
import { Button } from "../_components/ui/button";

const ButtonSignIn = () => {
    return (
        <>
            <Button variant='outline' className='w-full text-sm font-semibold' ><FcGoogle className='' /> Entrar com o Google</Button>
        </>
    );
}

export default ButtonSignIn;