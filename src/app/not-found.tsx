import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
      <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
        404 - Page Not Found
      </p>
      <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-4">
        You Missed the Gym
      </h1>
      <p className="text-sm text-gray-400 max-w-md mb-8">
        The page you tried to reach does not exist, but FITNESS PARK GYM in
        Tongi, Gazipur is still open daily from 7:00 AM to 11:00 PM. Train hard
        with us.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded shadow transition-colors"
      >
        Back to Home
      </Link>
      <a
        href="tel:+8801922749473"
        className="mt-4 text-xs font-bold text-amber-400 hover:underline"
      >
        Call +880 1922-749473
      </a>
    </main>
  );
}