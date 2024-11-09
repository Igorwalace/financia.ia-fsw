import Image from "next/image";

//pages-components
import ButtonUser from "./components/com-header/button-user";
import LinksHeader from "./components/com-header/links-header";

//shadcn
import { Separator } from "@/app/_components/ui/separator";

const Header = () => {
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
                    <ButtonUser />
                </div>
            </div>
            <Separator />
        </>
    );
}

export default Header;