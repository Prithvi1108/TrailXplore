import Link from "next/link";

const trails = [
    {
        name: "Kheerganga",
        location: "Himachal Pradesh",
        difficulty: "Easy",
        duration: "4–5 hrs",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
    },
    {
        name: "Valley of Flowers",
        location: "Uttarakhand",
        difficulty: "Easy",
        duration: "4–5 hrs",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    },
    {
        name: "Kudremukh",
        location: "Karnataka",
        difficulty: "Moderate",
        duration: "6–7 hrs",
        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
    },
];

export default function DiscoverPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">

            {/* NAVBAR */}
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-7">

                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <Link href="/" className="text-2xl font-black">
                        Trail<span className="text-lime-400">Xplore</span>
                    </Link>

                    <div className="hidden md:flex gap-10 text-sm">

                        <Link
                            href="/explore"
                            className="text-zinc-300 hover:text-lime-400"
                        >
                            Explore
                        </Link>

                        <Link
                            href="/discover"
                            className="text-lime-400"
                        >
                            Discover
                        </Link>

                        <Link
                            href="/about"
                            className="text-zinc-300 hover:text-lime-400"
                        >
                            About
                        </Link>

                    </div>

                    <Link
                        href="/explore"
                        className="border border-white/20 rounded-full px-5 py-2.5 text-sm hover:border-lime-400 transition"
                    >
                        Explore
                    </Link>

                </div>

            </nav>


            {/* HERO */}
            <section className="relative min-h-[75vh] flex items-center overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
                    alt="Mountain landscape"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">

                    <div className="max-w-4xl">

                        <p className="text-lime-400 font-bold tracking-[0.3em] text-sm">
                            THE TRAILXPLORE WAY
                        </p>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mt-6">
                            ADVENTURE
                            <br />
                            IS CLOSER
                            <br />
                            <span className="text-lime-400">
                                THAN YOU THINK.
                            </span>
                        </h1>

                        <p className="text-zinc-300 text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
                            From Himalayan giants to hidden Western Ghats trails,
                            discover where to go, how to get there, and what to expect.
                        </p>

                    </div>

                </div>

            </section>


            {/* HOW IT WORKS */}
            <section className="px-6 py-28">

                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                number: "01",
                                icon: "◉",
                                title: "Discover",
                                text: "Find trails based on difficulty, location, distance and experience.",
                            },
                            {
                                number: "02",
                                icon: "◇",
                                title: "Plan",
                                text: "Get the information you need before stepping onto the trail.",
                            },
                            {
                                number: "03",
                                icon: "↗",
                                title: "Explore",
                                text: "Turn your next weekend into a story worth remembering.",
                            },
                        ].map((item) => (

                            <div
                                key={item.number}
                                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-lime-400/60 transition"
                            >

                                <div className="flex justify-between">

                                    <span className="text-3xl text-lime-400">
                                        {item.icon}
                                    </span>

                                    <span className="text-zinc-700 font-bold">
                                        {item.number}
                                    </span>

                                </div>

                                <h2 className="text-3xl font-bold mt-12">
                                    {item.title}
                                </h2>

                                <p className="text-zinc-500 leading-relaxed mt-4">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* FEATURED */}
            <section className="px-6 pb-28">

                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-10">

                        <div>

                            <p className="text-lime-400 text-sm font-bold tracking-[0.25em]">
                                HANDPICKED
                            </p>

                            <h2 className="text-5xl md:text-6xl font-black mt-3">
                                Trails worth taking.
                            </h2>

                        </div>

                        <Link
                            href="/explore"
                            className="text-zinc-500 hover:text-lime-400 transition hidden md:block"
                        >
                            View all trails →
                        </Link>

                    </div>


                    <div className="grid md:grid-cols-3 gap-6">

                        {trails.map((trail) => (

                            <div
                                key={trail.name}
                                className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group"
                            >

                                <div className="h-80 relative overflow-hidden">

                                    <img
                                        src={trail.image}
                                        alt={trail.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    <span className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                                        {trail.difficulty}
                                    </span>

                                    <div className="absolute bottom-6 left-6">

                                        <p className="text-sm text-zinc-300">
                                            {trail.location}
                                        </p>

                                        <h3 className="text-2xl font-bold mt-1">
                                            {trail.name}
                                        </h3>

                                    </div>

                                </div>


                                <div className="p-5 flex justify-between items-center">

                                    <span className="text-zinc-500 text-sm">
                                        ◷ {trail.duration}
                                    </span>

                                    <Link
                                        href="/explore"
                                        className="bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-bold"
                                    >
                                        View trail →
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 pb-28">

                <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem]">

                    <img
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
                        alt="Mountains"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative text-center py-28 px-6">

                        <p className="text-lime-400 font-bold tracking-[0.3em] text-sm">
                            YOUR NEXT CHAPTER
                        </p>

                        <h2 className="text-6xl md:text-8xl font-black mt-5">
                            THE WILD
                            <br />
                            <span className="text-lime-400">
                                IS WAITING.
                            </span>
                        </h2>

                        <p className="text-zinc-300 max-w-xl mx-auto mt-7">
                            Stop scrolling. Start exploring. Your next adventure
                            could be one trail away.
                        </p>

                        <Link
                            href="/explore"
                            className="inline-block mt-8 bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
                        >
                            Start Exploring →
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}