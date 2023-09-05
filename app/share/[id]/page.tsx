import React from "react";
import HoverCard from "@/components/HoverCard";
import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { SiGithub } from "react-icons/si";
import { Metadata } from "next";

export const runtime = "edge";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      username: params.id,
    },
  });
  return {
    title: ` ${user?.name} Social Card for RenderCon Nairobi`,
  };
}

export default async function page({ params }: Params) {
  const user = await prisma.user.findUnique({
    where: {
      username: params.id,
    },
  });
  if (!user) redirect("/404");
  const userBackgroundGradient = user.backgroundGradient || "";

  return (
    <main className=" min-h-screen sm:mx-auto max-w-5xl mx-auto px-4  ">
      <section className="flex  flex-col-reverse sm:flex-row ">
        <div className="w-full   ">
          <HoverCard
            email={user.email}
            imageurl={user.imageurl || ""}
            name={user.name!}
            number={user.number}
            username={user.username}
            gradient={userBackgroundGradient}
            selectedIcon={user.icon!}
          />
        </div>
        <div className="flex items-center justify-center  ">
          <p className=" py-4  sm:hidden font-krona text-md whitespace-pre ">
            <span className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-200   text-transparent bg-clip-text">
              {user.username}
            </span>{" "}
            <span className=" bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800  font-bold  ">
              RenderCon
            </span>{" "}
            <span className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-400 bg-clip-text text-transparent   font-bold  ">
              Social Card
            </span>
          </p>
          <p className="p-6  hidden sm:block font-krona text-2xl ">
            <span className="font-krona bg-gradient-to-r from-red-200 via-red-300 to-yellow-200   text-transparent bg-clip-text">
              {user.username}
            </span>
            <br className="" />
            <span className="text-3xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800   ">
              RenderCon
            </span>
            <br />
            <span className=" bg-gradient-to-r from-red-200 via-red-300 to-yellow-400 bg-clip-text text-transparent     ">
              Social Card
            </span>
          </p>
        </div>
      </section>

      <div className="flex items-center justify-center py-8">
        <SignInButton afterSignInUrl={"/"} mode="redirect">
          <button className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center sm:w-44 gap-2 outline-none font-semibold font-krona   ">
            get yours <SiGithub />
          </button>
        </SignInButton>
      </div>
    </main>
  );
}
