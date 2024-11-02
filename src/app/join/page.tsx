import Link from "next/link";

export default function JoinPage() {
  return (
    <div>
      <div className="text-xl">Join Us</div>
      <div className="flex gap-4">
        <Link className="border" href="/join/sign-up">
          Sign Up
        </Link>
        <Link className="border" href="/join/sign-in">
          Sign In
        </Link>
      </div>
    </div>
  );
}
