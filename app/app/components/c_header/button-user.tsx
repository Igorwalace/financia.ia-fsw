import { Button } from "@/app/_components/ui/button";
import GETSession from "@/app/db/session";

const ButtonUser = async () => {

    const session = await GETSession()
    const name = session?.user?.name

    return (
        <>
            <Button variant='outline' >{name}</Button>
        </>
    );
}

export default ButtonUser;