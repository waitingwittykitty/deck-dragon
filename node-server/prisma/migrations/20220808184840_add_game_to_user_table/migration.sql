/*
  Warnings:

  - Added the required column `game` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "game" TEXT NOT NULL;
