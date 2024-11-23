/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_components/ui/sheet"

import { Button } from "@/app/_components/ui/button";
import useAppUtils from "@/app/context/utils";

const ButtonSeeMore = () => {

    const { sheetSeeMore, setSheetSeeMore } = useAppUtils()

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Button onClick={() => setSheetSeeMore(true)} variant='outline' className='rounded-[100px] text-sm' >Ver mais</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default ButtonSeeMore;