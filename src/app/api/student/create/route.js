import { NextResponse } from 'next/server'

export async function POST(req,res) {
    const JSONBody=await req.json();
    const rawResponse = await fetch(process.env.API_URL+"/api/CreateContact",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(JSONBody),
    });
    if(!rawResponse.ok) {
        return NextResponse.json({message:"Something is not right!!"}, {status:500})
    } else {
        return NextResponse.json({message:"success! We will contact you shortly!!"})
    }
}