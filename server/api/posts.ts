import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default defineEventHandler(async () => {
    const posts = await client.post.findMany()

    return posts
})
