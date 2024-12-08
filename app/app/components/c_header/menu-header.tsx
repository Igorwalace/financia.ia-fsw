// import { Button } from "@/app/_components/ui/button";
import { CiMenuKebab } from "react-icons/ci";

//shadcn
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_components/ui/sheet"
import { Separator } from "@/app/_components/ui/separator";
import AvatarName from "./avatar-name";
import SignOutSheet from "./signOut-sheet";

const MenuHeader = () => {
    
    return (
        <div className='lg:hidden block px-2 py-1 m-0' >
            {/* <Buttonvariant='outline' >
            </Button> */}
            <Sheet>
                <SheetTrigger>
                    <CiMenuKebab size={22} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>

                        <AvatarName />

                        <Separator className='my-3' />
                        <SheetClose className='w-full' >
                            <SignOutSheet />
                        </SheetClose>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}

export default MenuHeader;