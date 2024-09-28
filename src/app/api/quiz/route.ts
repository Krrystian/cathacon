import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const formData = await request.formData();
      const answers = formData.get('answers');
      if (answers === null) {
        throw new Error('Brak danych');
      }
      console.log(answers)
      return NextResponse.json("OK", { status: 200 });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }
  }