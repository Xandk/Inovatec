import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
}from 'fastify'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (Request: FastifyRequest, reply: FastifyReply) => {
        console.log("ROTA CHAMADA!")

        reply.send({ ok: true})

    })


}