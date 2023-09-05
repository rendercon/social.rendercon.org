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
    <div className="px-4 py-4 sm:px-0 sm:py-0  ">
      <h1 className="flex justify-center items-center   text-xl lg:text-4xl font-bold font-krona gap-1">
        <span className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text  ">
          {user.username}
        </span>{" "}
        <span className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800 font-bold ">
          RenderCon
        </span>
        Social Card
      </h1>
      <HoverCard
        email={user.email}
        imageurl={user.imageurl || ""}
        name={user.name!}
        number={user.number}
        username={user.username}
        gradient={userBackgroundGradient}
        selectedIcon={user.icon!}
      />
      <div className="flex items-center justify-center py-20">
        <SignInButton afterSignInUrl={"/"} mode="redirect">
          <button className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center sm:w-44 gap-2 outline-none font-semibold font-krona   ">
            get yours <SiGithub />
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
