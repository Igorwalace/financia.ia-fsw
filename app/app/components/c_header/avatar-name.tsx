import { Avatar, AvatarImage } from "../../../_components/ui/avatar";
import GETSession from "@/app/db/session";

const AvatarName = async () => {

    const session = await GETSession()
    if (!session) return

    return (
        <>
            <div className='flex gap-3 mb-3' >
                <Avatar className='border-2 border-primary' >
                    <AvatarImage src={session?.user?.image ?? ''} />
                </Avatar>
                <div className="text-left text-white" >
                    <h1 className='text-base font-bold' >{session?.user?.name}</h1>
                    <h1 className='text-xs font-normal' >{session?.user?.email}</h1>
                </div>
            </div>
        </>
    );
}

export default AvatarName;