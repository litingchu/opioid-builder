/*
  Warnings:

  - The primary key for the `medicare_beneficiary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `medicate_beneficiary_id` on the `medicare_beneficiary` table. All the data in the column will be lost.
  - Added the required column `medicare_beneficiary_id` to the `medicare_beneficiary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `medicare_beneficiary` RENAME COLUMN `medicate_beneficiary_id` TO `medicare_beneficiary_id`;
