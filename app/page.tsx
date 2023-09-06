import HoverCard from "@/components/HoverCard";
import { SignInButton, currentUser } from "@clerk/nextjs";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="  sm:mx-auto max-w-6xl px-4  mx-0 pt-10 pb-20 container min-h-max   ">
      <div className="flex flex-col items-center sm:flex-row ">
        <section className="w-full py-4">
          <h1 className="font-krona bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-3xl  text-transparent bg-clip-text ">
            Generate your
            <br />
            Custom
            <br />
            {/*  bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800  */}
            <span className="text-3xl sm:text-5xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800  font-bold leading-[60px] ">
              RenderCon
            </span>
            <br />
            Social Card
          </h1>
          <div className="py-4">
            {!user && (
              <SignInButton afterSignInUrl={"/"} mode="redirect">
                <button className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center sm:w-44 gap-2 outline-none font-semibold font-krona  w-44  ">
                  get yours <SiGithub />
                </button>
              </SignInButton>
            )}

            {user && (
              <Link
                href={`/ticket/${user?.username}`}
                className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona  "
              >
                Customize your ticket <BsArrowRight />
              </Link>
            )}
          </div>
        </section>

        <section className="w-full">
          <HoverCard
            email=""
            imageurl="k"
            name="yourname"
            username="yourusername"
            number={123}
          />
        </section>
      </div>
    </main>
  );
}
