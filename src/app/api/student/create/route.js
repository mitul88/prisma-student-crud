import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'

export async function POST(req,res) {
    const reqBody=await req.json();

    try {
        const prisma = new PrismaClient();
        let result = await prisma.user.create({
            data: reqBody
        })
        return NextResponse.json({message:"success! Student created!!", data: result}, {status: 201})
    } catch(error) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}