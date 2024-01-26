'use client'
import Image from "next/image";
import { useSession, signOut, auth } from "next-auth/react"

export default function Teste() {
    const session = useSession();

    console.log(session.data?.user);

    return (
        <div>
            <p>Pagina de teste</p>
            <button onClick={() => signOut()}>Logout</button>
            <p>{session.data?.user.name}</p>
            <p>{session.data?.user.email}</p>
            {session.data?.user.image && (
                <Image priority width={100} height={100} src={session.data.user.image} alt="teste" />
            )}

        </div>
    )
}