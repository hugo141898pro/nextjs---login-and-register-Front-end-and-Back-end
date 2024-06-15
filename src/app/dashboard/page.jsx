'use client'
import { signOut } from "next-auth/react";


export default function dashboard(){
    return(
        <section className="">

        <div className="h-[calc(100vh-1rem)] flex flex-col justify-center items-center">
            <h1 className="p-12 text-3xl bold">dashboard</h1>
            <button className="p-3 text-white bg-blue-500 hover:bg-blue-400"
            onClick={()=> signOut()}
            >
                cerrar sesion
            </button>
        </div>
        </section>

    )
}