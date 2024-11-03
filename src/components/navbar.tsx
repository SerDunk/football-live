import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Navigation() {
  const { userId } = await auth();
  console.log(userId);

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center p-4 bg-gray-200">
        <div>
          <Link href="/" className="text-l font-bold">
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
        <div className="mx-2">
          {userId ? (
            <UserButton />
          ) : (
            <Link href="/join" className="border rounded p-2 border-black">
              Join
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
