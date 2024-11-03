import Link from "next/link";

export default function TrendPage() {
  return (
    <div>
      <Link href="/trending/opinion/new">
        <button className="p-2 border">Create</button>
      </Link>
    </div>
  );
}
