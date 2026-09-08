import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">

            {/* NAVBAR */}
            <nav className="border-b border-zinc-900 px-6 py-7">

                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <Link href="/" className="text-2xl font-black">
                        Trail<span className="text-lime-400">Xplore</span>
                    </Link>

                    <div className="hidden md:flex gap-10 text-sm">

                        <Link
                            href="/explore"
                            className="text-zinc-400 hover:text-lime-400"
                        >
                            Explore
                        </Link>

                        <Link
                            href="/discover"
                            className="text-zinc-400 hover:text-lime-400"
                        >
                            Discover
                        </Link>

                        <Link
                            href="/about"
                            className="text-lime-400"
                        >
                            About
                        </Link>

                    </div>

                    <Link
                        href="/explore"
                        className="bg-lime-400 text-black rounded-full px-5 py-2.5 text-sm font-bold"
                    >
                        Explore
                    </Link>

                </div>

            </nav>


            {/* HERO */}
            <section className="px-6 py-28 md:py-36">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <p className="text-lime-400 font-bold tracking-[0.3em] text-sm">
                            ABOUT TRAILXPLORE
                        </p>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mt-6">
                            MORE THAN
                            <br />
                            <span className="text-lime-400">
                                JUST A TRAIL.
                            </span>
                        </h1>

                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
                            TrailXplore is built for people who want to step away from
                            crowded tourist spots and discover the real outdoors of India.
                        </p>

                        <Link
                            href="/explore"
                            className="inline-block mt-9 bg-lime-400 text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition"
                        >
                            Explore Trails →
                        </Link>

                    </div>


                    <div className="relative">

                        <div className="aspect-square rounded-[3rem] overflow-hidden border border-zinc-800">

                            <img
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                                alt="Mountain adventure"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">

                                <p className="text-xs text-zinc-400 uppercase tracking-widest">
                                    Our philosophy
                                </p>

                                <p className="text-2xl font-bold mt-2">
                                    Leave the map.
                                    <span className="text-lime-400">
                                        {" "}Find the trail.
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* MISSION */}
            <section className="border-t border-zinc-900 px-6 py-28">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

                    <div>

                        <p className="text-lime-400 text-sm font-bold tracking-[0.25em]">
                            OUR MISSION
                        </p>

                        <h2 className="text-5xl font-black mt-5">
                            Adventure should be
                            <span className="text-zinc-600">
                                {" "}accessible.
                            </span>
                        </h2>

                    </div>

                    <div className="lg:col-span-2">

                        <p className="text-zinc-400 text-xl leading-relaxed">
                            Finding a great trek shouldn't require hours of searching
                            through scattered websites and social media posts.
                            TrailXplore brings trails, difficulty levels, distances
                            and essential information together in one simple place.
                        </p>

                        <p className="text-zinc-600 text-lg leading-relaxed mt-7">
                            Whether you're taking your first hike or looking for your
                            next challenging summit, we're here to help you find an
                            adventure that fits you.
                        </p>

                    </div>

                </div>

            </section>


            {/* VALUES */}
            <section className="bg-zinc-900/40 px-6 py-28">

                <div className="max-w-7xl mx-auto">

                    <p className="text-lime-400 text-sm font-bold tracking-[0.25em]">
                        THE TRAILXPLORE WAY
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black mt-4">
                        Built for the
                        <span className="text-zinc-600">
                            {" "}curious.
                        </span>
                    </h2>


                    <div className="grid md:grid-cols-3 gap-6 mt-14">

                        {[
                            {
                                icon: "🧭",
                                title: "Discover",
                                text: "Find trails across different regions, landscapes and difficulty levels.",
                            },
                            {
                                icon: "🎒",
                                title: "Prepare",
                                text: "Understand distance, duration and difficulty before taking the first step.",
                            },
                            {
                                icon: "🌄",
                                title: "Experience",
                                text: "Turn a weekend away into a story you'll remember for years.",
                            },
                        ].map((item) => (

                            <div
                                key={item.title}
                                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400/60 transition"
                            >

                                <div className="text-4xl">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mt-10">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-500 leading-relaxed mt-4">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* NUMBERS */}
            <section className="px-6 py-28">

                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <div>
                        <p className="text-5xl md:text-6xl font-black text-lime-400">
                            50+
                        </p>
                        <p className="text-zinc-500 mt-3">
                            Trails
                        </p>
                    </div>

                    <div>
                        <p className="text-5xl md:text-6xl font-black">
                            12
                        </p>
                        <p className="text-zinc-500 mt-3">
                            States
                        </p>
                    </div>

                    <div>
                        <p className="text-5xl md:text-6xl font-black">
                            3
                        </p>
                        <p className="text-zinc-500 mt-3">
                            Difficulty levels
                        </p>
                    </div>

                    <div>
                        <p className="text-5xl md:text-6xl font-black text-lime-400">
                            ∞
                        </p>
                        <p className="text-zinc-500 mt-3">
                            Adventures
                        </p>
                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 pb-28">

                <div className="max-w-7xl mx-auto rounded-[3rem] bg-lime-400 text-black text-center p-12 md:p-20">

                    <p className="text-sm font-bold tracking-[0.25em]">
                        YOUR NEXT CHAPTER
                    </p>

                    <h2 className="text-6xl md:text-8xl font-black mt-5 leading-none">
                        GO FIND
                        <br />
                        SOMETHING.
                    </h2>

                    <Link
                        href="/explore"
                        className="inline-block mt-9 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
                    >
                        Start Exploring →
                    </Link>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="border-t border-zinc-900 px-6 py-10">

                <div className="max-w-7xl mx-auto flex justify-between">

                    <p className="font-black">
                        Trail<span className="text-lime-400">Xplore</span>
                    </p>

                    <p className="text-zinc-600 text-sm">
                        Explore India differently.
                    </p>

                </div>

            </footer>

        </main>
    );
}