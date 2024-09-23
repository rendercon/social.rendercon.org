"use server";

import { z } from "zod";
import { actionClient } from "./safe-actions";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";
import { SocialCard, User } from "@prisma/client";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  profession: z.string().min(1, "Profession is required"),
  email: z.string().email("Invalid email address"),
});

const userSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  firstName: z.string().optional(),
  username: z.string().optional(),
  lastName: z.string().optional(),
});

// This schema is used to validate input from client.

export const registerForm = actionClient
  .schema(formSchema)
  .action(
    async ({
      parsedInput: { companyName, email, firstName, lastName, profession },
    }) => {
      const { userId } = auth();
      if (!userId) {
        throw new Error("User not authenticated");
      }

      const user = await prisma.user.findUnique({
        where: {
          clerkId: userId,
        },
        include: {
          socialCard: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const socialCard = await prisma.socialCard.upsert({
        where: {
          userId: user.id,
        },
        create: {
          userId: user.id,
          companyName,
          email,
          name: `${firstName} ${lastName}`,
          profession: profession,
        },
        update: {
          companyName,
          email,
          name: `${firstName} ${lastName}`,
          profession: profession,
        },
      });

      return { success: true, socialCard };
    }
  );

export const checkSocialCard = async (): Promise<SocialCard> => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      socialCard: true,
    },
  });

  return user?.socialCard!;
};
