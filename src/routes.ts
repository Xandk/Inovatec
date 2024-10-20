import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
}from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        console.log("ROTA CHAMADA!")

        reply.send({ ok: true})

    })

    fastify.post("/create", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateNutritionController().handle(request, reply)
    })

}

