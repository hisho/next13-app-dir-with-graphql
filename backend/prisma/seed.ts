import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * モデル投入用のデータ定義
 * @see https://www.prisma.io/docs/guides/database/seed-database
 */

const doSeed = async () => {
  const posts = [...Array(3)].map(async (_, i) => {
    return prisma.post.create({
      data: {
        title: `初めての投稿${i}`,
        content: `初めての投稿を作成する${i}`,
      },
    });
  });

  const tags = [...Array(3)]
    .map((_, i) => `初めてのタグ${i}`)
    .map(async (name) => {
      return prisma.tag.create({
        data: {
          name,
        },
      });
    });

  return Promise.all([posts, tags]);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
