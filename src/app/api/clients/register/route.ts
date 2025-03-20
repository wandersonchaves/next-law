import {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {name, email, phone} = body

    if (!name || !email) {
      return NextResponse.json(
        {message: 'Nome e email são obrigatórios'},
        {status: 400},
      )
    }

    const client = await prisma.client.create({
      data: {name, email, phone},
    })

    return NextResponse.json(client, {status: 201})
  } catch (error) {
    return NextResponse.json(
      {message: 'Erro ao cadastrar cliente', error},
      {status: 500},
    )
  }
}
