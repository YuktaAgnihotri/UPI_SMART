import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})

export default prisma;
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ??  new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;