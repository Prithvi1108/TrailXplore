import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("trails")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            console.error("Supabase error:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error("Server error:", error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { data, error } = await supabase
            .from("trails")
            .insert([body])
            .select()
            .single();

        if (error) {
            console.error("Supabase error:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(data, { status: 201 });

    } catch (error) {
        console.error("Server error:", error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}