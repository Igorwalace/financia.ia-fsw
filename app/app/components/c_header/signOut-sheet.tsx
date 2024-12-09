'use client'
import { Button } from '@/app/_components/ui/button'
import { IoExitOutline } from "react-icons/io5";
import React from 'react'
import useAppUtils from '@/app/context/utils';

function SignOutSheet() {
    const { setDialogSignOut } = useAppUtils()
    return (
        <Button variant='ghost' onClick={() => setDialogSignOut(true)} className='w-full justify-start flex gap-2 items-center text-white' >
            <IoExitOutline size={25} />
            <span className='text-sm' >Sair da conta</span>
        </Button>
    )
}

export default SignOutSheet