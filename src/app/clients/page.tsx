'use client'

import {useEffect, useState} from 'react'

import {ActionButton} from '@/components/Buttons/ActionButton'
import {AddButton} from '@/components/Buttons/AddButton'
import {SearchInput} from '@/components/Form/SearchInput'
import {SectionWrapper} from '@/components/Layout/SectionWrapper'
import {FilterDropdown} from '@/components/Table/FilterDropdown'
import {Table} from '@/components/Table/Table'
import {getAllClients} from '@/core/services/clientService'

type Client = {
  id: string
  name: string
  email: string
  mobile: string
  phone: string | null
  professionalCategory: string
  city: string
  state: string
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Partial<Client>[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const headers = ['Nome', 'Email', 'Telefone', 'Categoria', 'Cidade', 'UF']
  const data = clients.map((client) => ({
    Nome: client.name,
    Email: client.email,
    Telefone: client.mobile || client.phone,
    Categoria: client.professionalCategory,
    Cidade: client.city,
    UF: client.state,
  }))

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await getAllClients()
        setClients(res)
      } catch (error) {
        console.error(error)
        setError('Erro ao carregar clientes')
      } finally {
        setLoading(false)
      }
    }
    fetchClients()
  }, [])

  return (
    <SectionWrapper>
      {loading && <p>Carregando...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
          <SearchInput />
          <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
            <AddButton />
            <div className="flex w-full items-center space-x-3 md:w-auto">
              <ActionButton />
              <FilterDropdown />
            </div>
          </div>
        </div>
        <Table
          headers={headers}
          data={data}
          actions={(row) => (
            <button onClick={() => console.log(row)}>Ver</button>
          )}
        />
      </div>
    </SectionWrapper>
  )
}
