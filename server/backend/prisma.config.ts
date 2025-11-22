import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    url: env("DATABASE_URL"),   // ✔ Prisma 7 now uses datasource.url here
  },

  migrations: {
    path: "./prisma/migrations", 
  },

  client: {
    engine: "binary",           // ✔ Recommended for local development
  },
});

