import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

import { appRoutes } from './http/routes'

import { env } from '@/env'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error: Error, _request: FastifyRequest, reply: FastifyReply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      status: 'error',
      statusCode: reply.statusCode,
      message: 'Validation error',
      issues: error.errors,
    })
  }

  if (env.NODE_ENV !== 'development') {
    console.error(error)
  } else {
    // TODO here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({
    status: 'error',
    statusCode: reply.statusCode,
    message: 'Internal server error',
  })
})
