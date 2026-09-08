"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const trails = [
    {
        id: "hampta-pass",
        name: "Hampta Pass",
        location: "Himachal Pradesh",
        difficulty: "Moderate",
        distance: "35 km",
        duration: "5 Days",
        rating: "4.9",
        reviews: 128,
        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85",
        description:
            "A dramatic Himalayan trek that takes you from lush green valleys to high-altitude landscapes.",
    },
    {
        id: "tadiandamol",
        name: "Tadiandamol",
        location: "Karnataka",
        difficulty: "Moderate",
        distance: "15 km",
        duration: "2 Days",
        rating: "4.8",
        reviews: 96,
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
        description:
            "A beautiful Western Ghats trek surrounded by dense forests, rolling hills and misty landscapes.",
    },
    {
        id: "kheerganga",
        name: "Kheerganga",
        location: "Himachal Pradesh",
        difficulty: "Easy",
        distance: "14 km",
        duration: "1 Day",
        rating: "4.7",
        reviews: 214,
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        description:
            "A beginner-friendly Himalayan trail famous for its hot springs and spectacular mountain views.",
    },
    {
        id: "kudremukh",
        name: "Kudremukh",
        location: "Karnataka",
        difficulty: "Hard",
        distance: "22 km",
        duration: "2 Days",
        rating: "4.9",
        reviews: 87,
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        description:
            "A challenging trek through the Western Ghats with rolling grasslands and breathtaking viewpoints.",
    },
];

export default function ExplorePage() {
    const [search, setSearch] = useState("");
    const [difficulty, setDifficulty] = useState("All");

    const filteredTrails = useMemo(() => {
        return trails.filter((trail) => {
            const matchesDifficulty =
                difficulty === "All" || trail.difficulty === difficulty;

            const searchText = search.toLowerCase();

            const matchesSearch =
                trail.name.toLowerCase().includes(searchText) ||
                trail.location.toLowerCase().includes(searchText);

            return matchesDifficulty && matchesSearch;
        });
    }, [search, difficulty]);

    return (
        <main className="min-h-screen bg-[#07100d] text-white">

            {/* NAVBAR */}
            <nav className="border-b border-white/10 bg-[#07100d]/90 backdrop-blur">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                    <Link href="/" className="text-2xl font-black tracking-tight">
                        Trail<span className="text-lime-400">Xplore</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
                        <Link
                            href="/"
                            className="hover:text-lime-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/explore"
                            className="text-lime-400"
                        >
                            Explore
                        </Link>

                        <a
                            href="#about"
                            className="hover:text-lime-400 transition"
                        >
                            About
                        </a>
                    </div>

                    <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm hover:bg-white/10 transition">
                        Sign in
                    </button>

                </div>
            </nav>


            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">

                <p className="text-lime-400 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
                    TrailXplore
                </p>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                    Find your next
                    <br />
                    <span className="text-lime-400">adventure.</span>
                </h1>

                <p className="text-zinc-400 text-lg mt-6 max-w-xl">
                    Explore breathtaking trails, hidden paths and unforgettable
                    adventures across India.
                </p>

            </section>


            {/* SEARCH */}
            <section className="max-w-7xl mx-auto px-6">

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 flex flex-col md:flex-row gap-3">

                    <div className="flex-1 flex items-center">

                        <span className="text-xl ml-4 mr-3">
                            🔍
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search trails or locations..."
                            className="w-full bg-transparent outline-none py-4 text-white placeholder:text-zinc-500"
                        />

                    </div>

                    <button
                        onClick={() => setSearch(search)}
                        className="rounded-2xl bg-lime-400 text-black px-8 py-4 font-bold hover:bg-lime-300 transition"
                    >
                        Search →
                    </button>

                </div>

            </section>


            {/* FILTERS */}
            <section className="max-w-7xl mx-auto px-6 mt-8">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div className="flex gap-3 flex-wrap">

                        {["All", "Easy", "Moderate", "Hard"].map((level) => (
                            <button
                                key={level}
                                onClick={() => setDifficulty(level)}
                                className={`px-6 py-3 rounded-full font-semibold transition ${difficulty === level
                                        ? "bg-lime-400 text-black"
                                        : "bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10"
                                    }`}
                            >
                                {level}
                            </button>
                        ))}

                    </div>

                    <p className="text-sm text-zinc-500">
                        {filteredTrails.length} trails found
                    </p>

                </div>

            </section>


            {/* TRAIL CARDS */}
            <section className="max-w-7xl mx-auto px-6 py-12">

                {filteredTrails.length === 0 ? (

                    <div className="text-center py-24">

                        <div className="text-6xl mb-5">
                            🏔️
                        </div>

                        <h2 className="text-2xl font-bold">
                            No trails found
                        </h2>

                        <p className="text-zinc-500 mt-2">
                            Try another trail name, location or difficulty.
                        </p>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 gap-7">

                        {filteredTrails.map((trail) => (

                            <article
                                key={trail.id}
                                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] hover:border-lime-400/50 transition duration-300"
                            >

                                {/* IMAGE */}
                                <div className="relative h-64 overflow-hidden">

                                    <img
                                        src={trail.image}
                                        alt={trail.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                    {/* DIFFICULTY */}
                                    <span className="absolute top-5 right-5 rounded-full bg-black/60 backdrop-blur px-4 py-2 text-sm font-semibold">
                                        {trail.difficulty}
                                    </span>

                                    {/* LOCATION */}
                                    <div className="absolute bottom-5 left-5 text-sm font-medium">
                                        📍 {trail.location}
                                    </div>

                                </div>


                                {/* CONTENT */}
                                <div className="p-6">

                                    <div className="flex items-start justify-between gap-4">

                                        <div>

                                            <h2 className="text-3xl font-bold group-hover:text-lime-400 transition">
                                                {trail.name}
                                            </h2>

                                            <div className="mt-2 text-sm text-zinc-400">
                                                ⭐ {trail.rating}
                                                <span className="ml-2">
                                                    ({trail.reviews} reviews)
                                                </span>
                                            </div>

                                        </div>

                                        <button
                                            className="h-10 w-10 rounded-full border border-white/10 hover:border-lime-400 hover:text-lime-400 transition"
                                            title="Add to favourites"
                                        >
                                            ♡
                                        </button>

                                    </div>


                                    <p className="text-zinc-400 mt-4 leading-relaxed">
                                        {trail.description}
                                    </p>


                                    {/* INFO */}
                                    <div className="grid grid-cols-2 gap-3 mt-6">

                                        <div className="rounded-2xl bg-black/20 border border-white/5 p-4">
                                            <p className="text-xs text-zinc-500 uppercase">
                                                Distance
                                            </p>

                                            <p className="font-semibold mt-1">
                                                🥾 {trail.distance}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-black/20 border border-white/5 p-4">
                                            <p className="text-xs text-zinc-500 uppercase">
                                                Duration
                                            </p>

                                            <p className="font-semibold mt-1">
                                                🕒 {trail.duration}
                                            </p>
                                        </div>

                                    </div>


                                    {/* VIEW TRAIL */}
                                    <Link
                                        href={`/explore/${trail.id}`}
                                        className="mt-6 flex items-center justify-center rounded-2xl bg-lime-400 text-black py-4 font-bold hover:bg-lime-300 transition"
                                    >
                                        View trail →
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </section>


            {/* FOOTER */}
            <footer className="border-t border-white/10 mt-10">

                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">

                    <p>
                        © 2026 TrailXplore
                    </p>

                    <p>
                        Explore. Discover. Adventure.
                    </p>

                </div>

            </footer>

        </main>
    );
}