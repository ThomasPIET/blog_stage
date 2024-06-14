/*
  Warnings:

  - The `photo` column on the `Article` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "photo",
ADD COLUMN     "photo" BYTEA;
