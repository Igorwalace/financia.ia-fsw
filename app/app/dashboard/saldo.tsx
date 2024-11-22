import AmountSaldo from "./amount-saldo";
import HiddenEyes from "./hidden-eyes";

const Saldo = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-3 font-bold' >
                <AmountSaldo />
                <HiddenEyes />
            </div>
        </>
    );
}

export default Saldo;