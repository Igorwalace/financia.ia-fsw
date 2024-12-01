import Image from "next/image";

//pages-components
import ButtonUser from "./components/c_header/button-user";
import LinksHeader from "./components/c_header/links-header";

//shadcn
import { Separator } from "@/app/_components/ui/separator";
import GETSession from "@/app/db/session";

const Header = async () => {
    
    const session = await GETSession()
    if(!session?.user?.name) return
    const name = session?.user?.name

    return (
        <>
            <div className='py-4 px-6 flex justify-between items-center' >
                {/* logo e links */} 
                <div className='flex justify-between items-center gap-12' >
                    <Image
                        src="/logo.svg"
                        width={173}
                        height={39}
                        alt="Finance AI"
                        className=""
                    />
                    <LinksHeader />
                </div>
                {/* user (sempre logado na dashboard) */}
                <div>
                    <ButtonUser name={name} />
                </div>
            </div>
            <Separator />
        </>
    );
}

export default Header;