import Header from "../header";
import CardBasicSignature from "./card-basic-signature";
import CardProSignature from "./card-pro-signature";

const Signature = () => {
    return (
        <>
            <Header />
            <div className='p-6 space-y-6' >
                <h1 className='text-2xl font-bold' >Assinatura</h1>
                <div className='grid grid-cols-3 gap-6' >
                    <CardBasicSignature />
                    <CardProSignature />
                </div>
            </div>
        </>
    );
}

export default Signature;