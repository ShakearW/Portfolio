// scripts/createUser.ts
import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true,
  ssl: false,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "demo@portfolio.com";
  const plainPassword = "demo1234";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("User already exists:", existing.email);
    return;
  }

  const hashed = await bcrypt.hash(plainPassword, 12);
  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  console.log("✅ User created:", user.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());