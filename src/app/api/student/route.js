import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'

export async function GET(req,res) {
    
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')

    try {
        const prisma = new PrismaClient();
    
        let result = await prisma.user.findMany()
        return NextResponse.json({message:"All Students fetched!", data: result})

    } catch(error) {
        console.log(error)
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}

export async function PUT(req,res) {
    const reqBody=await req.json();
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')

    try {
        const prisma = new PrismaClient();
    
        let result = await prisma.user.update({
            where: {id: parseInt(id)},
            data: reqBody
        })
        return NextResponse.json({message:"item updated!", data: result})            

    } catch(error) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}

export async function DELETE(req,res) {
    const reqBody=await req.json();
    try {
        const prisma = new PrismaClient();
    
        let result = await prisma.user.delete({
            where: reqBody
        })
        return NextResponse.json({message:"item deleted!", data: result})            

    } catch(error) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})       
    }
}