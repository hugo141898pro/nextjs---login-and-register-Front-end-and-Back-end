import CredentialProviders from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import db from '@/libs/db';
import bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';

export const authAption = {
    providers: [
        CredentialProviders({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email", placeholder: "example@gmail.com"},
                password: {label: "password", type: "password", placeholder: "*****"}
            },
            async authorize(credentials, req){
                console.log(credentials);

                const foundPerson = await db.pot.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!foundPerson) throw new Error('el email es incorrecto');

                console.log(foundPerson);

                const veryPassword = await bcrypt.compare(credentials.password, foundPerson.password);
                if(!veryPassword) throw new Error('la contraseña es incorrecto');

                return {
                    name: foundPerson.name,
                    username: foundPerson.username,
                    email: foundPerson.email
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}

const authvery = NextAuth(authAption);
export {authvery as GET, authvery as POST};