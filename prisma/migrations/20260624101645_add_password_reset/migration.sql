-- CreateTable
CREATE TABLE "passwordReset" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "passwordReset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "passwordReset_email_idx" ON "passwordReset"("email");

-- CreateIndex
CREATE UNIQUE INDEX "passwordReset_email_key" ON "passwordReset"("email");
