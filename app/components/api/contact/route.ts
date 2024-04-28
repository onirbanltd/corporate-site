import { NextResponse } from "next/server";
const fs = require('fs');
const path = require('path')

export async function POST(request: any) {
    const data = await request.json();
    const filepPath = path.resolve(process.cwd(), "app/data/submission.json");

    let submission: any = [];

    try {
        const data = fs.readFileSync(filepPath, 'utf8');
        submission = JSON.parse(data);

    } catch (error) {
        console.error(error)

    }

    submission.push(data);


    try {
        const newData = JSON.stringify(submission, null, 2);
        fs.writeFileSync(filepPath, newData, "utf8");
    } catch (error) {
        console.error(error);

    }

    return NextResponse.json({
        data: DataTransfer,
        message: "This message has been successfully sent."
    })
}