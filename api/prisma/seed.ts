import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.donation.deleteMany();

  const alice = await prisma.donation.create({
    data: {
      count: 100,
      name: 'Alice',
      email: 'alisce@email.com',
      mobile: '+5511999999999',
    },
  });

  console.log(alice);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }) 
  .finally(async () => {
    await prisma.$disconnect();
  });
