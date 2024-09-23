import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

//test deployment
export const prisma = new PrismaClient().$extends(withAccelerate());
