import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

type RouteContext = {
    params: Promise<{ id: string }>;
};

// =========================
// GET /api/trails/:id
// =========================
export async function GET(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { id } = await params;

        const { data, error } = await supabase
            .from("trails")
            .select("*")
            .eq("id", id)
            .maybeSingle();

        if (error) {
            console.error("Supabase GET error:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        // Trail does not exist
        if (!data) {
            return NextResponse.json(
                { error: "Trail not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error("Server GET error:", error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}


// =========================
// PUT /api/trails/:id
// =========================
export async function PUT(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { id } = await params;

        const body = await request.json();

        const { data, error } = await supabase
            .from("trails")
            .update(body)
            .eq("id", id)
            .select()
            .maybeSingle();

        if (error) {
            console.error("Supabase PUT error:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        // Trail does not exist
        if (!data) {
            return NextResponse.json(
                { error: "Trail not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error("Server PUT error:", error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}


// =========================
// DELETE /api/trails/:id
// =========================
export async function DELETE(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { id } = await params;

        const { data, error } = await supabase
            .from("trails")
            .delete()
            .eq("id", id)
            .select();

        if (error) {
            console.error("Supabase DELETE error:", error);

            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        // No trail was deleted
        if (!data || data.length === 0) {
            return NextResponse.json(
                { error: "Trail not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Trail deleted successfully",
                trail: data[0],
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Server DELETE error:", error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}