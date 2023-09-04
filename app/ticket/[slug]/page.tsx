import React from "react";
import { auth, clerkClient, currentUser } from "@clerk/nextjs";
import HoverCard from "@/components/HoverCard";
import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  const getCurrentUser = await currentUser();
  const username = getCurrentUser?.username;

  if (username) {
    return {
      title: ` ${username} Social Card for RenderCon Nairobi`,
    };
  } else
    return {
      title: "BooBer Posts",
    };
}

type Params = {
  params: {
    slug: string;
  };
};
export default async function page({ params }: Params) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }
  const userCount = await prisma.user.count();

  const user = await clerkClient.users.getUser(userId!);
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });
  const currentUserEmail = user.emailAddresses[0].emailAddress;
  if (existingUser) {
    const userBackgroundGradient = existingUser?.backgroundGradient || "";
    return (
      <div className="sm:px-4 pt-4 px-1 sm:py-0 flex-col sm:flex-row  container">
        <div className="">
          <h1 className="font-krona flex items-center justify-center text-2xl font-bold sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800">
            Customize your Ticket
          </h1>
          <HoverCard
            email={existingUser.email}
            imageurl={existingUser.imageurl!}
            name={existingUser.name!}
            number={existingUser.number}
            username={existingUser.username!}
            gradient={userBackgroundGradient!}
            currentUserEmail={currentUserEmail}
            selectedIcon={existingUser.icon!}
          />
        </div>
      </div>
    );
  }
  const newUser = await prisma.user.create({
    data: {
      email: user.emailAddresses[0].emailAddress,
      name: user.firstName,
      username: user.username!,
      imageurl: user.imageUrl,
      number: userCount + 1, // Assign the sequence number
    },
  });

  return (
    <>
      <div className="px-1 py-4 sm:px-0 sm:py-0 flex flex-col container">
        <h1 className="font-krona flex items-center justify-center text-2xl font-bold sm:text-3xl md:text-4xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800">
          Customize Your Card
        </h1>

        <HoverCard
          email={newUser.email}
          imageurl={newUser.imageurl!}
          name={newUser.name!}
          number={newUser.number}
          username={newUser.username!}
          gradient={newUser.backgroundGradient!}
          currentUserEmail={currentUserEmail}
          selectedIcon={newUser.icon!}
        />
      </div>
    </>
  );
}
