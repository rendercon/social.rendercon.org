import React from "react";
import { SignOutButton, auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import HoverCard from "@/components/HoverCard";
import { prisma } from "@/prisma/prisma";

export default async function page() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }
  const userCount = await prisma.user.count();

  const user = await clerkClient.users.getUser(userId);
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });
  if (existingUser) {
    const userBackgroundGradient = existingUser?.backgroundGradient || "";
    return (
      <div className="px-1 py-4 sm:px-0 sm:py-0">
        <HoverCard
          email={existingUser.email}
          imageurl={existingUser.imageurl!}
          name={existingUser.name!}
          number={existingUser.number}
          username={existingUser.username!}
          gradient={userBackgroundGradient!}
        />

        <SignOutButton />
      </div>
    );
  }
  const newUser = await prisma.user.create({
    data: {
      email: user.emailAddresses[0].emailAddress,
      name: user.firstName,
      username: user.username,
      imageurl: user.imageUrl,
      number: userCount + 1, // Assign the sequence number
    },
  });

  return (
    <div className="px-1 py-4 sm:px-0 sm:py-0">
      <HoverCard
        email={newUser.email}
        imageurl={newUser.imageurl!}
        name={newUser.name!}
        number={newUser.number}
        username={newUser.username!}
      />
      <SignOutButton />
    </div>
  );
}
