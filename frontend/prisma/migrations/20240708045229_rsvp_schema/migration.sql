-- CreateTable
CREATE TABLE "RVSP" (
    "eid" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RVSP_pkey" PRIMARY KEY ("eid","email")
);

-- AddForeignKey
ALTER TABLE "RVSP" ADD CONSTRAINT "RVSP_eid_fkey" FOREIGN KEY ("eid") REFERENCES "Event"("eid") ON DELETE RESTRICT ON UPDATE CASCADE;