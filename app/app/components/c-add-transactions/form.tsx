'use client'
import { DatePicker } from '@/app/_components/ui/date-picker'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/_components/ui/select"
import { TRANSACTION_CATEGORY_OPTIONS, TRANSACTION_PAYMENT_METHOD_OPTIONS, TRANSACTION_TYPE_OPTIONS } from '../../constant/transactions-constant'
import { Button } from '@/app/_components/ui/button'
import CreateTransctions from '../../_actions/create-transctions'
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import useAppUtils from '@/app/context/utils'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


const Form = () => {
    const { setOpenDialogFormAddTransactions } = useAppUtils()

    const [date, setDate] = useState<Date>(new Date())
    const [paymentMethod, setPaymentMethod] = useState<TransactionPaymentMethod>()
    const [type, setType] = useState<TransactionType>()
    const [category, setCategory] = useState<TransactionCategory>()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (d) => {
        const { name, amount } = d;
        setLoading(true)
        try {
            if (!/^[0-9]+$/.test(amount)) return
            if (paymentMethod === undefined || type === undefined || category === undefined) return
            await CreateTransctions({ name, amount, date, paymentMethod, type, category })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        setOpenDialogFormAddTransactions(false)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBackForm = (e: any) => {
        e.preventDefault()
        setOpenDialogFormAddTransactions(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-start flex-col gap-6' >
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Nome</h1>
                        <input
                            type='text'
                            className='w-full bg-transparent rounded-lg p-2 text-sm border-white border-[1px] border-opacity-[8%]'
                            {...register("name", { required: true })} />
                    </label>
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Valor</h1>
                        <input
                            type='text'
                            className='w-full bg-transparent rounded-lg p-2 text-sm border-white border-[1px] border-opacity-[8%]'
                            {...register("amount")}
                        />
                    </label>
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Tipo</h1>
                        <Select
                            value={type}
                            onValueChange={(type: TransactionType) => setType(type)}
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                {TRANSACTION_TYPE_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </label>
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Categoria</h1>
                        <Select
                            required
                            value={category}
                            onValueChange={(category: TransactionCategory) => {
                                setCategory(category);
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                {TRANSACTION_CATEGORY_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </label>
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Método de pagamento</h1>
                        <Select
                            required
                            value={paymentMethod}
                            onValueChange={(payment: TransactionPaymentMethod) => {
                                setPaymentMethod(payment);
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um método de pagamento" />
                            </SelectTrigger>
                            <SelectContent>
                                {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </label>
                    <label className='w-full space-y-2' >
                        <h1 className='text-sm' >Data</h1>
                        <DatePicker
                            value={date}
                            onChange={(date) => {
                                if (date !== undefined) {
                                    setDate(date);
                                }
                            }}
                        />
                    </label>
                </div>
                <div className="pt-6 grid grid-cols-2 gap-4">
                    <Button disabled={loading} onClick={handleBackForm} variant='outline' >Voltar</Button>
                    <Button disabled={loading} variant='default' type='submit' >
                        {
                            loading
                                ?
                                <>
                                    <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                    Carregando
                                </>
                                :
                                <>
                                    Adicionar Transação
                                </>
                        }
                    </Button>
                </div>
            </form >
        </>
    );
}
export default Form;