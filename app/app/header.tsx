import Image from "next/image";

//pages-components
import ButtonUser from "./components/c_header/button-user";
import LinksHeader from "./components/c_header/links-header";
import MenuHeader from "./components/c_header/menu-header";

//shadcn
import { Separator } from "@/app/_components/ui/separator";
import GETSession from "@/app/db/session";

const Header = async () => {

    const session = await GETSession()
    if (!session?.user?.name) return
    if (!session?.user?.image) return
    const name = session?.user?.name
    const avatar = session?.user?.image

    return (
        <>
            <div className='py-4 px-6 flex justify-between items-center' >
                {/* logo e links */}
                <div className='flex justify-between items-center gap-12' >
                    <div className='relative w-[130px] lg:h-[39px] h-[29px]'>
                        <Image
                            src="/logo.svg"
                            fill
                            alt="Finance AI"
                            className="object-cover"
                        />
                    </div>
                    <div className='lg:flex hidden justify-between items-center gap-12' >
                        <LinksHeader />
                    </div>
                </div>
                {/* user (sempre logado na dashboard) */}
                <div className='lg:block hidden' >
                    <ButtonUser name={name} avatar={avatar} />
                </div>
                <MenuHeader />
            </div>
            <Separator />
        </>
    );
}

export default Header;