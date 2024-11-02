import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center p-4 bg-gray-200">
        <div>
          <Link href="/" className="text-l font-bold ">
            FootyKnow
          </Link>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link href="/trending">Trending</Link>
            <Link href="/league">League</Link>
            <Link href="/about">About</Link>
          </ul>
        </div>
        <Link href="/join" className="border rounded p-2 mx-2 border-black">
          <button>Join</button>
        </Link>
      </nav>
    </div>
  );
}
