import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance): Promise<void> {
  app.get('/', () => {
    return { message: 'Bem vindo ao Ukwali API, fique ligado, coisas boas estão por vir!' }
  })
}
