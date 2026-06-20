let PrismaClient: any;
try {
	// prefer import when available
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	PrismaClient = require("@prisma/client").PrismaClient;
} catch (e) {
	// fallback dummy to avoid TS/Node errors when @prisma/client isn't installed
	PrismaClient = class {
		constructor() {
			// no-op
		}
	};
}

const globalForPrisma = globalThis as { prisma?: InstanceType<typeof PrismaClient> };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;