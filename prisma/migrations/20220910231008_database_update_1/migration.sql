/*
  Warnings:

  - You are about to alter the column `tot_mdcr_pymt_amt` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(11,2)` to `Double`.
  - You are about to alter the column `tot_mdcr_stdzd_pymt_amt` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(11,2)` to `Double`.
  - You are about to alter the column `tot_mdcr_stdzd_ra_pymt_amt` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(11,2)` to `Double`.
  - You are about to alter the column `tot_mdcr_pymt_pc` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `Double`.
  - You are about to alter the column `tot_mdcr_stdzd_pymt_pc` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `Double`.
  - You are about to alter the column `tot_mdcr_stdzd_ra_pymt_pc` on the `medicare_beneficiary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `Double`.

*/
-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `report_report_id_fkey`;

-- AlterTable
ALTER TABLE `medicare_beneficiary` MODIFY `year` VARCHAR(4) NOT NULL,
    MODIFY `tot_mdcr_pymt_amt` DOUBLE NOT NULL,
    MODIFY `tot_mdcr_stdzd_pymt_amt` DOUBLE NOT NULL,
    MODIFY `tot_mdcr_stdzd_ra_pymt_amt` DOUBLE NOT NULL,
    MODIFY `tot_mdcr_pymt_pc` DOUBLE NOT NULL,
    MODIFY `tot_mdcr_stdzd_pymt_pc` DOUBLE NOT NULL,
    MODIFY `tot_mdcr_stdzd_ra_pymt_pc` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `opioid_prescription_rate` MODIFY `year` VARCHAR(4) NOT NULL;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
