import Link from "next/link";

const featuredTrails = [
  {
    name: "Hampta Pass",
    location: "Himachal Pradesh",
    difficulty: "Hard",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kheerganga",
    location: "Himachal Pradesh",
    difficulty: "Easy",
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kudremukh",
    location: "Karnataka",
    difficulty: "Hard",
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80",
  },
];

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Trail<span className="text-lime-400">Xplore</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link
            href="/explore"
            className="text-zinc-300 hover:text-lime-400 transition"
          >
            Explore
          </Link>

          <Link
            href="/discover"
            className="text-zinc-300 hover:text-lime-400 transition"
          >
            Discover
          </Link>

          <Link
            href="/about"
            className="text-zinc-300 hover:text-lime-400 transition"
          >
            About
          </Link>
        </div>

        <Link
          href="/explore"
          className="border border-white/20 rounded-full px-5 py-2.5 text-sm hover:border-lime-400 hover:text-lime-400 transition"
        >
          Start exploring
        </Link>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center">

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
          alt="Indian mountain landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Explore India differently
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              GET LOST.
              <br />
              <span className="text-lime-400">FIND</span>
              <br />
              YOURSELF.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed">
              Discover hidden trails, breathtaking landscapes and
              unforgettable adventures across India.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/explore"
                className="bg-lime-400 text-black px-7 py-4 rounded-full font-bold hover:bg-lime-300 hover:scale-105 transition"
              >
                Explore trails →
              </Link>

              <Link
                href="/discover"
                className="border border-white/25 bg-white/5 backdrop-blur-md px-7 py-4 rounded-full font-semibold hover:border-lime-400 hover:text-lime-400 transition"
              >
                Discover more
              </Link>

            </div>

          </div>

          {/* Trek of week */}
          <div className="absolute right-6 bottom-10 hidden lg:block">
            <div className="w-72 rounded-3xl border border-white/20 bg-black/50 backdrop-blur-xl p-6">

              <p className="text-xs text-zinc-400 uppercase tracking-widest">
                Trek of the week
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Hampta Pass
              </h3>

              <p className="text-zinc-400 mt-2">
                Himachal Pradesh
              </p>

              <div className="flex gap-3 mt-5 text-sm">
                <span className="bg-white/10 rounded-full px-3 py-1">
                  5 Days
                </span>

                <span className="bg-lime-400/20 text-lime-300 rounded-full px-3 py-1">
                  Hard
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="px-6 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-end">

            <div>
              <p className="text-lime-400 text-sm font-bold tracking-[0.25em]">
                THE TRAILXPLORE WAY
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-none mt-5">
                Adventure is
                <br />
                <span className="text-zinc-500">
                  closer than you think.
                </span>
              </h2>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              From Himalayan giants to hidden Western Ghats trails,
              TrailXplore helps you discover where to go, how to get there,
              and what to expect.
            </p>

          </div>

        </div>
      </section>


      {/* FEATURED */}
      <section className="px-6 pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-10">

            <div>
              <p className="text-lime-400 text-sm font-bold tracking-[0.25em]">
                FEATURED TRAILS
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Where will you go?
              </h2>
            </div>

            <Link
              href="/explore"
              className="hidden md:block text-zinc-400 hover:text-lime-400 transition"
            >
              View all trails →
            </Link>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {featuredTrails.map((trail) => (
              <div
                key={trail.name}
                className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 transition"
              >

                <div className="h-72 relative overflow-hidden">

                  <img
                    src={trail.image}
                    alt={trail.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <span className="absolute top-5 left-5 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 text-sm">
                    {trail.difficulty}
                  </span>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-sm text-zinc-300">
                      📍 {trail.location}
                    </p>

                    <h3 className="text-2xl font-bold mt-1">
                      {trail.name}
                    </h3>
                  </div>

                </div>

                <div className="p-5 flex justify-between items-center">

                  <span className="text-zinc-500 text-sm">
                    ⏱ {trail.duration}
                  </span>

                  <Link
                    href="/explore"
                    className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-lime-300 transition"
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

        <div className="max-w-7xl mx-auto rounded-[3rem] bg-lime-400 text-black p-12 md:p-20 text-center">

          <p className="text-sm font-bold tracking-[0.25em]">
            YOUR NEXT ADVENTURE
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-5 leading-none">
            THE WILD
            <br />
            IS WAITING.
          </h2>

          <Link
            href="/explore"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Start exploring →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">

          <div>
            <p className="text-xl font-black">
              Trail<span className="text-lime-400">Xplore</span>
            </p>

            <p className="text-zinc-600 text-sm mt-2">
              Explore India differently.
            </p>
          </div>

          <p className="text-zinc-600 text-sm">
            © 2026 TrailXplore
          </p>

        </div>

      </footer>

    </main>
  );
}