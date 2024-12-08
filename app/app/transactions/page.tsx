import FormAddTransactions from "../components/c-add-transactions/form-add-transactions";
import ButtonAddTransctions from "../dashboard/button-add-transctions";
import Header from "../header";
import TableTransctions from "./table-transactions";

const Transactions = () => {

    return (
        <>
            <Header />
            <div className='flex justify-between p-6'>
                <h1 className='text-2xl font-bold' >Transações</h1>
                <ButtonAddTransctions />
            </div>
            <TableTransctions />
            <div className="flex justify-center items-center">
                <FormAddTransactions />
            </div>
        </>
    );
}

export default Transactions;