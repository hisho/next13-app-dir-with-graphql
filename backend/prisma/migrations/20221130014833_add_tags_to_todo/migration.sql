-- CreateTable
CREATE TABLE `tags` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tags_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TagToTodo` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TagToTodo_AB_unique`(`A`, `B`),
    INDEX `_TagToTodo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_TagToTodo` ADD CONSTRAINT `_TagToTodo_A_fkey` FOREIGN KEY (`A`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagToTodo` ADD CONSTRAINT `_TagToTodo_B_fkey` FOREIGN KEY (`B`) REFERENCES `todos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
