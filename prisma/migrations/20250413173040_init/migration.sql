-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
