import { prisma } from "@/prisma/prisma";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  const user = await clerkClient.users.getUser(userId!);

  const data = await req.json();
  const { backgroundGradient, icon } = data;

  console.log(backgroundGradient);
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  if (currentUser) {
    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        backgroundGradient: backgroundGradient,
        icon: icon,
      },
    });
  }

  return NextResponse.json(currentUser?.backgroundGradient);
}
