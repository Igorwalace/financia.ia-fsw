'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinksHeader = () => {

    const pathname = usePathname()

    return (
        <>
            <Link href='/app/dashboard' className={`${pathname.includes('/dashboard') ? 'text-ring' : 'hover:opacity-60'} duration-200 font-bold text-sm`} >Dashboard</Link>
            <Link href='/app/transactions' className={`${pathname.includes('/transactions') ? 'text-ring' : 'hover:opacity-60'} duration-200 font-bold text-sm`} >Transações</Link>
            <Link href='/app/signature' className={`${pathname.includes('/signature') ? 'text-ring' : 'hover:opacity-60'} duration-200 font-bold text-sm`} >Assinatura</Link>
        </>
    );
}

export default LinksHeader;