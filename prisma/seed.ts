import { PrismaClient } from '@prisma/client';
import { addDays } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`, // 一意のメールアドレスを生成
        hasedPassword: '123456',
      },
    });

    const product = await prisma.product.create({
      data: {
        name: `Product ${i}`,
        description: `This is product ${i}`,
        price: 100 * (i + 1),
        category: 'Example Category',
      },
    });

    const cart = await prisma.cart.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        Product: {
          connect: { id: product.id },
        },
        productId: product.id, // Add this line
        quantity: Math.floor(Math.random() * 10) + 1,
      },
    });

    const order = await prisma.order.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        Product: {
          connect: { id: product.id },
        },
        productId: product.id, // Add this line
        quantity: Math.floor(Math.random() * 10) + 1,
        createdAt: addDays(new Date(), -(Math.floor(Math.random() * 30) + 1)),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
