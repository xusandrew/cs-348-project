-- CreateTable
CREATE TABLE "Club" (
    "cid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "instagram" TEXT,
    "discord" TEXT,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "Event" (
    "eid" SERIAL NOT NULL,
    "cid" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "posted_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eid")
);

-- CreateTable
CREATE TABLE "Category" (
    "type" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("type")
);

-- CreateTable
CREATE TABLE "ClubCategory" (
    "cid" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ClubCategory_pkey" PRIMARY KEY ("cid","type")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_email_key" ON "Club"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Club_name_key" ON "Club"("name");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCategory" ADD CONSTRAINT "ClubCategory_cid_fkey" FOREIGN KEY ("cid") REFERENCES "Club"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubCategory" ADD CONSTRAINT "ClubCategory_type_fkey" FOREIGN KEY ("type") REFERENCES "Category"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
