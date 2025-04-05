'use client'

import {ClientForm} from '@/components/ClientForm'

export default function ClientsCreate() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Cadastro de Associado
        </h2>
        <ClientForm />
      </div>
    </section>
  )
}
