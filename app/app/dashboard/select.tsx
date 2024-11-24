'use client'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/app/_components/ui/select";

const SelectMonth = () => {

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return (
        <>
            <Select>
                <SelectTrigger className="w-[125px] rounded-full">
                    <SelectValue placeholder='Mês' />
                </SelectTrigger>
                <SelectContent>
                    {
                        months
                            .map((month) => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))
                    }
                </SelectContent>
            </Select>
        </>
    );
}

export default SelectMonth;