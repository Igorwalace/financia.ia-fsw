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
    const [selectMonth, setSelectMonth] = useState<string>('Dezembro')
    const [eyeOrEyeOff, setEyeOrEyeOff] = useState(true)

    return (
        <AppContext.Provider value={{
            openDialogFormAddTransactions, setOpenDialogFormAddTransactions, sheetSeeMore, setSheetSeeMore,
            selectMonth, setSelectMonth, eyeOrEyeOff, setEyeOrEyeOff
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default function useAppUtils() {
    return useContext(AppContext)
}