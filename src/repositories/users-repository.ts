import { User, Prisma } from '@prisma/client'

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<{ user: User }>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
}
