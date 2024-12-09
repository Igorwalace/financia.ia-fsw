import { redirect } from "next/navigation";
import Header from "../header";
import CardBasicSignature from "./card-basic-signature";
import CardProSignature from "./card-pro-signature";
import GETSession from "@/app/db/session";

const Signature = async () => {

    const session = await GETSession()
    if (!session) {
        return redirect('/')
    }

    return (
        <>
            <Header />
            <div className='p-6 space-y-6' >
                <h1 className='lg:text-2xl text-lg font-bold' >Assinatura</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6' >
                    <CardBasicSignature />
                    <CardProSignature />
                </div>
            </div>
        </>
    );
}

export default Signature;