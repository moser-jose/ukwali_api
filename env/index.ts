import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  PORT: z.coerce.number().default(3333),
  POSTGRESQL_USERNAME: z.string(),
  POSTGRESQL_PASSWORD: z.string(),
  POSTGRESQL_HOST: z.string(),
  POSTGRESQL_PORT: z.coerce.number().default(5432),
  POSTGRESQL_DATABASE: z.string(),
  POSTGRESQL_SCHEMA: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format())
  throw new Error('❌ Invalid environment variables.')
}

export const env = _env.data
