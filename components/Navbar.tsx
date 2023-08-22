import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import SignOutButtonClerk from "./SignOutButton";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <nav className="flex justify-between items-center h-20 px-4 py-2">
      <Link
        href="/"
        className="text-3xl   bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800 font-bold font-krona"
      >
        RenderCon
      </Link>
      {/* @ts-ignore */}
      {user && <div>{<SignOutButtonClerk />}</div>}
    </nav>
  );
}
