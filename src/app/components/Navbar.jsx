import Link from "next/link"
import {getServerSession} from 'next-auth/next';
import { authAption } from "../api/auth/[...nextauth]/route";

async function Navbar(){
    const sesion = await getServerSession(authAption);
    console.log(sesion)

    return(
        <nav className="flex justify-between bg-blue-500 items-center">
            <h1 className="text-xl font-bold p-6">Hugo Arcos</h1>

            <ul className="flex gap-x-2 mr-12 text-white">
                {
                    !sesion?.pot ? (
                        <>
                            <li>
                                <Link href="/auth/register">
                                    register
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/login">
                                    login
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    home
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/dashboard">
                                    dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/api/auth/signout">
                                    cerrar sesión
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;