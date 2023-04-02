-- CreateTable
CREATE TABLE "Nft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clollected" BOOLEAN NOT NULL DEFAULT false,
    "owner" TEXT
);
