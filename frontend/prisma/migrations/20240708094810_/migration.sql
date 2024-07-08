/*
  Warnings:

  - You are about to drop the `RVSP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RVSP" DROP CONSTRAINT "RVSP_eid_fkey";

-- DropTable
DROP TABLE "RVSP";

-- CreateTable
CREATE TABLE "RSVP" (
    "eid" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RSVP_pkey" PRIMARY KEY ("eid","email")
);

-- AddForeignKey
ALTER TABLE "RSVP" ADD CONSTRAINT "RSVP_eid_fkey" FOREIGN KEY ("eid") REFERENCES "Event"("eid") ON DELETE RESTRICT ON UPDATE CASCADE;
