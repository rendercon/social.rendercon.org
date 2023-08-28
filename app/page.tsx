import HoverCard from "@/components/HoverCard";
import { SignInButton, currentUser } from "@clerk/nextjs";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export const runtime = "edge";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex justify-center items-center">
      <section className=" min-h-screen max-w-6xl flex md:flex-row flex-col items-center    ">
        <div className="flex gap-2 flex-col md:flex-row px-4 sm:px-0 ">
          <div className="flex  flex-col justify-center gap-6 px-4">
            <h1 className="font-krona bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-4xl leading-[60px]  text-transparent bg-clip-text ">
              Generate your
              <br />
              Custom
              <br />
              <span className="text-4xl sm:text-5xl  bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800 font-bold leading-loose">
                RenderCon
              </span>
              <br />
              Ticket
            </h1>

            {!user && (
              <SignInButton afterSignInUrl={"/"} mode="redirect">
                <button className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center sm:w-44 gap-2 outline-none font-semibold font-krona   ">
                  get yours <SiGithub />
                </button>
              </SignInButton>
            )}

            {user && (
              <Link
                href={`/ticket/${user?.username}`}
                className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona  "
              >
                Customize your ticket <BsArrowRight />
              </Link>
            )}
          </div>
          <div className="w-full">
            <HoverCard
              email=""
              imageurl="k"
              name="yourname"
              username="yourusername"
              number={123}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
