import { NextResponse } from "next/server";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export async function POST(req){

    const data = await req.json();

    const foundEmail = await db.pot.findUnique({
        where: {
            email: data.email,
        }
    })
    if(foundEmail){
        return NextResponse.json({
            messaje: "el email ya existe, ingresa otro",
        }, {
            status: 400
        })
    }
    const foundUser = await db.pot.findUnique({
        where: {
            username: data.username,
        }
    })
    if(foundUser){
        return NextResponse.json({
            messaje: "el usuario ya existe",
        }, {
            status: 400
        })
    }

    const hashPassword = await bcrypt.hash(data.password, 10);
    const newPot = await db.pot.create({
        data: {
            name: data.name,
            username: data.username,
            email: data.email,
            password: hashPassword
        }
    })
    return NextResponse.json(newPot);
}