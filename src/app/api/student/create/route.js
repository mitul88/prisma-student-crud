import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'

export async function POST(req,res) {
    const reqBody=await req.json();

    const isArray = Array.isArray(reqBody)

    try {
        const prisma = new PrismaClient();
        
        if(isArray) {
            let result = await prisma.user.createMany({
                data: reqBody
            })
            return NextResponse.json({message:`Success! total ${result['count']} entry created!`, data: result}, {status: 201})            
        }
        
        if(!isArray) {
            let result = await prisma.user.create({
                data: reqBody
            })
            return NextResponse.json({message:"success! Student created!!", data: result}, {status: 201})
        }

    } catch(error) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}