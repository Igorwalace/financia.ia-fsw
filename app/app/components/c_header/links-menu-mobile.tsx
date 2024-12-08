'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinksMenuMobile = () => {
    const pathname = usePathname()
    return (
        <>
            <Link href='/app/dashboard' className={`${pathname.includes('/dashboard') ? 'text-ring border-ring' : 'hover:opacity-60 border-white'} duration-200 font-bold text-xs text-left lg:text-sm border-[1px] border-opacity-[8%] p-3 rounded-xl`} >Dashboard</Link>
            <Link href='/app/transactions' className={`${pathname.includes('/transactions') ? 'text-ring border-ring' : 'hover:opacity-60 border-white'} duration-200 font-bold text-xs text-left lg:text-sm border-[1px] border-opacity-[8%] p-3 rounded-xl`} >Transações</Link>
            <Link href='/app/signature' className={`${pathname.includes('/signature') ? 'text-ring border-ring' : 'hover:opacity-60 border-white'} duration-200 font-bold text-xs text-left lg:text-sm border-[1px] border-opacity-[8%] p-3 rounded-xl`} >Assinatura</Link>
        </>
    );
}

export default LinksMenuMobile;