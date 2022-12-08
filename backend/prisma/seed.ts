import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * モデル投入用のデータ定義
 * @see https://www.prisma.io/docs/guides/database/seed-database
 */

const doSeed = async () => {
  const todos = [...Array(3)].map(async (_, i) => {
    return prisma.todo.create({
      data: {
        title: `初めてのTODO${i}`,
        description: `初めてのTODOを作成する${i}`,
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

  return Promise.all([todos, tags]);
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
