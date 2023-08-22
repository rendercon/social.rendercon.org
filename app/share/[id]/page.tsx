import React from "react";
import HoverCard from "@/components/HoverCard";
import { prisma } from "@/prisma/prisma";
import { Heading } from "@radix-ui/themes";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Params) {
  const user = await prisma.user.findUnique({
    where: {
      username: params.id,
    },
  });
  if (!user) redirect("/404");
  const userBackgroundGradient = user.backgroundGradient || "";

  return (
    <div className="px-1 py-4 sm:px-0 sm:py-0 flex flex-col container">
      <h1>
        <span>{user.name}</span> RenderCon Ticket
      </h1>
      <HoverCard
        email={user.email}
        imageurl={user.imageurl || ""}
        name={user.name!}
        number={user.number}
        username={user.username}
        gradient={userBackgroundGradient}
      />
    </div>
  );
}
