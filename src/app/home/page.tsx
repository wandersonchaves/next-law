'use client'

import {useEffect, useState} from 'react'

// Definir o tipo do Cliente
type Client = {
  id: string
  name: string
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  const [formData, setFormData] = useState({name: '', email: '', phone: ''})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const [clients, setClients] = useState<Client[]>([])

  const [error, setError] = useState('')

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch('/api/clients') // ✅ Mantemos o caminho correto
        if (!res.ok) throw new Error('Erro ao buscar clientes')
        const data: Client[] = await res.json()
        setClients(data)
      } catch {
        setError('Erro ao carregar clientes')
      } finally {
        setLoading(false)
      }
    }

    fetchClients()
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Evita renderizar no SSR

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await fetch('/api/clients/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })

      // if (!response.ok) throw new Error('Erro ao cadastrar')

      setMessage('Cadastro realizado com sucesso!')
      setFormData({name: '', email: '', phone: ''})
    } catch {
      setMessage('Erro ao cadastrar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div>
        <h2>Lista de Clientes</h2>
        {loading && <p>Carregando...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        <ul>
          {clients.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-bold">Cadastro de Cliente</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-2 w-full rounded border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-2 w-full rounded border p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefone (opcional)"
          value={formData.phone}
          onChange={handleChange}
          className="mb-4 w-full rounded border p-2"
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white"
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  )
}
