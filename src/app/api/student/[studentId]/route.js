import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


export async function GET(req, {params}, res) {
    
    const {studentId} = params

    try {
        const prisma = new PrismaClient();
    
        let result = await prisma.user.findMany({
            where: {id: parseInt(studentId)}
        })
        return NextResponse.json({message:"Student fetched!", data: result})

    } catch(error) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}