'use server'
import { auth } from "@/auth";

const GETSession = async () => {
    return await auth()
}

export default GETSession;