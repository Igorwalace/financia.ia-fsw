'use client'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/app/_components/ui/select";

const SelectMonth = () => {

    return (
        <>
            <Select>
                <SelectTrigger className="w-[125px] rounded-full">
                    <SelectValue placeholder='Mês' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Janeiro">Janeiro</SelectItem>
                    <SelectItem value="Fevereiro">Fevereiro</SelectItem>
                    <SelectItem value="Março">Março</SelectItem>
                    <SelectItem value="Abril">Abril</SelectItem>
                    <SelectItem value="Maio">Maio</SelectItem>
                    <SelectItem value="Junho">Junho</SelectItem>
                    <SelectItem value="Julho">Julho</SelectItem>
                    <SelectItem value="Agosto">Agosto</SelectItem>
                    <SelectItem value="Setembro">Setembro</SelectItem>
                    <SelectItem value="Outubro">Agosto</SelectItem>
                    <SelectItem value="Novembro">Novembro</SelectItem>
                    <SelectItem value="Dezembro">Dezembro</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
}

export default SelectMonth;