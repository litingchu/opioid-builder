-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(128) NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `first_name` VARCHAR(128) NOT NULL,
    `last_name` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `user_username_key`(`username`),
    UNIQUE INDEX `user_password_key`(`password`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `opioid_prescription_rate` (
    `opioid_prescription_rate_id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` DATETIME(3) NOT NULL,
    `prscrbr_geo_lvl` VARCHAR(32) NOT NULL,
    `prscrbr_geo_desc` VARCHAR(128) NOT NULL,
    `tot_prscrbrs` BIGINT NOT NULL,
    `tot_opioid_prscrbrs` BIGINT NOT NULL,
    `tot_opioid_clms` BIGINT NOT NULL,
    `tot_clms` BIGINT NOT NULL,
    `opioid_prscrbng_rate` DOUBLE NOT NULL,
    `opioid_prscrbng_rate_5y_chg` DOUBLE NOT NULL,
    `opioid_prscrbng_rate_1y_chg` DOUBLE NOT NULL,
    `la_tot_opioid_clms` DOUBLE NOT NULL,
    `la_opioid_prscrbng_rate` DOUBLE NOT NULL,
    `la_opioid_prscrbng_rate_5y_chg` DOUBLE NOT NULL,
    `la_opioid_prscrbng_rate_1y_chg` DOUBLE NOT NULL,

    PRIMARY KEY (`opioid_prescription_rate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicare_beneficiary` (
    `medicate_beneficiary_id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` DATETIME(3) NOT NULL,
    `bene_geo_lvl` VARCHAR(8) NOT NULL,
    `bene_geo_desc` VARCHAR(128) NOT NULL,
    `bene_age_lvl` VARCHAR(4) NOT NULL,
    `benes_wth_ptaptb_cnt` INTEGER NOT NULL,
    `benes_ffs_cnt` INTEGER NOT NULL,
    `benes_ma_cnt` INTEGER NOT NULL,
    `ma_prtcptn_rate` DOUBLE NOT NULL,
    `bene_avg_age` INTEGER NOT NULL,
    `bene_feml_pct` DOUBLE NOT NULL,
    `bene_male_pct` DOUBLE NOT NULL,
    `bene_race_wht_pct` DOUBLE NOT NULL,
    `bene_race_black_pct` DOUBLE NOT NULL,
    `bene_race_hspnc_pct` DOUBLE NOT NULL,
    `bene_race_othr_pct` DOUBLE NOT NULL,
    `bene_dual_pct` DOUBLE NOT NULL,
    `bene_avg_risk_scre` DOUBLE NOT NULL,
    `tot_mdcr_pymt_amt` DECIMAL(11, 2) NOT NULL,
    `tot_mdcr_stdzd_pymt_amt` DECIMAL(11, 2) NOT NULL,
    `tot_mdcr_stdzd_ra_pymt_amt` DECIMAL(11, 2) NOT NULL,
    `tot_mdcr_pymt_pc` DECIMAL(5, 2) NOT NULL,
    `tot_mdcr_stdzd_pymt_pc` DECIMAL(5, 2) NOT NULL,
    `tot_mdcr_stdzd_ra_pymt_pc` DECIMAL(5, 2) NOT NULL,

    PRIMARY KEY (`medicate_beneficiary_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `report_id` INTEGER NOT NULL AUTO_INCREMENT,
    `report_name` VARCHAR(128) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `summary` TEXT NOT NULL,
    `opioid_graph_url` VARCHAR(128) NOT NULL,
    `medicare_graph_url` VARCHAR(128) NOT NULL,
    `state` VARCHAR(32) NOT NULL,
    `age_level` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_report_id_fkey` FOREIGN KEY (`report_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
