import {ClientFormDTO} from '../dto/ClientFormDTO'
import type {ClientPreviewDTO} from '../dtos/client-preview.dto'

export async function registerClient(data: ClientFormDTO): Promise<void> {
  const response = await fetch('/api/clients/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Erro ao cadastrar cliente')
  }
}

export const getAllClients = async (): Promise<ClientPreviewDTO[]> => {
  const res = await fetch('/api/clients')
  if (!res.ok) throw new Error('Erro ao buscar client  es')
  return res.json()
}
