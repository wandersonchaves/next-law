import {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'

const prisma = new PrismaClient()

// Método GET para buscar os clientes
export async function GET() {
  try {
    const clients = await prisma.client.findMany()
    return NextResponse.json(clients, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {message: 'Erro ao buscar clientes', error},
      {status: 500},
    )
  }
}
