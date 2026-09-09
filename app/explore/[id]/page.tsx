"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Trail = {
    id: number;
    name: string;
    location: string;
    state?: string;
    difficulty: string;
    distance: string;
    duration: string;
    rating?: string;
    reviews?: number;
    image_url?: string;
    description: string;
    best_time?: string;
};

export default function TrailDetailsPage() {
    const params = useParams();

    const id = params.id as string;

    const [trail, setTrail] = useState<Trail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchTrail() {
            try {
                const response = await fetch(`/api/trails/${id}`);

                if (!response.ok) {
                    throw new Error("Trail not found");
                }

                const data = await response.json();

                setTrail(data);

            } catch (err) {
                console.error(err);
                setError("Trail not found");
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchTrail();
        }
    }, [id]);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#07100d] text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-4">🏔️</div>

                    <p className="text-zinc-400">
                        Loading trail...
                    </p>
                </div>
            </main>
        );
    }

    if (error || !trail) {
        return (
            <main className="min-h-screen bg-[#07100d] text-white flex items-center justify-center px-6">
                <div className="text-center">

                    <div className="text-6xl mb-5">
                        🏔️
                    </div>

                    <h1 className="text-4xl font-bold">
                        Trail not found
                    </h1>

                    <Link
                        href="/explore"
                        className="inline-block mt-6 bg-lime-400 text-black px-6 py-3 rounded-full font-bold"
                    >
                        ← Back to Explore
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#07100d] text-white">

            {/* NAVBAR */}

            <nav className="border-b border-white/10">

                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    <Link
                        href="/"
                        className="text-2xl font-black"
                    >
                        Trail<span className="text-lime-400">
                            Xplore
                        </span>
                    </Link>

                    <Link
                        href="/explore"
                        className="text-sm text-zinc-300 hover:text-lime-400"
                    >
                        ← Back to Explore
                    </Link>

                </div>

            </nav>


            {/* HERO */}

            <section className="max-w-7xl mx-auto px-6 pt-8">

                <div className="relative h-[420px] md:h-[550px] overflow-hidden rounded-[2rem]">

                    <img
                        src={trail.image_url}
                        alt={trail.name}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-10 left-6 md:left-10">

                        <p className="text-lime-400 font-semibold mb-3">
                            📍 {trail.location}
                            {trail.state ? `, ${trail.state}` : ""}
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black">
                            {trail.name}
                        </h1>

                        <div className="flex flex-wrap gap-3 mt-5">

                            {trail.rating && (
                                <span className="rounded-full bg-white/10 backdrop-blur px-5 py-2">
                                    ⭐ {trail.rating}
                                </span>
                            )}

                            <span className="rounded-full bg-white/10 backdrop-blur px-5 py-2">
                                {trail.difficulty}
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* DETAILS */}

            <section className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* DESCRIPTION */}

                    <div className="lg:col-span-2">

                        <p className="text-lime-400 font-semibold uppercase tracking-widest text-sm">
                            About the trail
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            Your next adventure starts here.
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mt-6">
                            {trail.description}
                        </p>

                    </div>


                    {/* QUICK INFO */}

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                        <h3 className="text-xl font-bold mb-5">
                            Trail information
                        </h3>

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <span className="text-zinc-500">
                                    Distance
                                </span>

                                <span className="font-semibold">
                                    {trail.distance}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-zinc-500">
                                    Duration
                                </span>

                                <span className="font-semibold">
                                    {trail.duration}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-zinc-500">
                                    Difficulty
                                </span>

                                <span className="font-semibold text-lime-400">
                                    {trail.difficulty}
                                </span>
                            </div>

                            {trail.best_time && (
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">
                                        Best time
                                    </span>

                                    <span className="font-semibold">
                                        {trail.best_time}
                                    </span>
                                </div>
                            )}

                            {trail.reviews !== undefined && (
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">
                                        Reviews
                                    </span>

                                    <span className="font-semibold">
                                        {trail.reviews}
                                    </span>
                                </div>
                            )}

                        </div>

                        <button className="w-full mt-7 rounded-2xl bg-lime-400 text-black py-4 font-bold hover:bg-lime-300 transition">
                            Add to favourites ♡
                        </button>

                    </div>

                </div>


                {/* ITINERARY */}

                <div className="mt-16">

                    <p className="text-lime-400 font-semibold uppercase tracking-widest text-sm">
                        Sample itinerary
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        The journey
                    </h2>

                    <div className="mt-8 space-y-4">

                        {[
                            ["Day 1", "Start the trek and explore the surrounding valleys."],
                            ["Day 2", "Continue through forests and mountain trails."],
                            ["Day 3", "Reach higher altitude and experience panoramic views."],
                            ["Day 4", "Cross the main trail section and explore the landscape."],
                            ["Day 5", "Complete the trek and return to the base village."],
                        ].map(([day, text]) => (

                            <div
                                key={day}
                                className="flex gap-5 items-start rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                            >

                                <div className="rounded-xl bg-lime-400 text-black px-4 py-2 font-bold">
                                    {day}
                                </div>

                                <p className="text-zinc-300 pt-2">
                                    {text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>


                {/* COMING NEXT */}

                <div className="mt-20 grid md:grid-cols-3 gap-6">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                        <div className="text-4xl mb-4">🌿</div>

                        <h3 className="text-2xl font-bold">
                            Flora
                        </h3>

                        <p className="text-zinc-400 mt-3">
                            Discover the plants and vegetation
                            that shape this ecosystem.
                        </p>
                    </div>


                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                        <div className="text-4xl mb-4">🐾</div>

                        <h3 className="text-2xl font-bold">
                            Fauna
                        </h3>

                        <p className="text-zinc-400 mt-3">
                            Learn about wildlife and species
                            found around the trail.
                        </p>
                    </div>


                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                        <div className="text-4xl mb-4">🧑‍🤝‍🧑</div>

                        <h3 className="text-2xl font-bold">
                            Local Communities
                        </h3>

                        <p className="text-zinc-400 mt-3">
                            Understand the people, traditions
                            and knowledge connected to this landscape.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}