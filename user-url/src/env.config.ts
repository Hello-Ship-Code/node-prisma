import dotenv from 'dotenv'

dotenv.config();

export const env = {
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  DATABASE_URL: process.env.DATABASE_URL ?? "mongodb://127.0.0.1:27017",
  NODE_ENV: process.env.NODE_ENV ?? 'production'
}