'use client'

//prisma

//next-react
import { createContext, useContext, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<any>(undefined);

export function AppUtils({ children }: {
    children: React.ReactNode;
}) {
    const [openDialogFormAddTransactions, setOpenDialogFormAddTransactions] = useState(false)
    const [sheetSeeMore, setSheetSeeMore] = useState(false)

    return (
        <AppContext.Provider value={{
            openDialogFormAddTransactions, setOpenDialogFormAddTransactions, sheetSeeMore, setSheetSeeMore
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default function useAppUtils() {
    return useContext(AppContext)
}