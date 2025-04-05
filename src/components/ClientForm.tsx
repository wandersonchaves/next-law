'use client'

import React, {useEffect, useState} from 'react'

import {ClientFormDTO} from '@/core/dto/ClientFormDTO'
import {registerClient} from '@/core/services/clientService'

export const ClientForm = () => {
  const [formData, setFormData] = useState<ClientFormDTO | null>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setFormData(new ClientFormDTO())
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (!formData) return
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setLoading(true)
    setMessage('')

    try {
      await registerClient(formData)
      setMessage('Cadastro realizado com sucesso!')
      setFormData(new ClientFormDTO())
    } catch (error) {
      console.error(error)
      setMessage('Erro ao cadastrar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (!formData) return null

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="cpf"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            CPF
          </label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="rg"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            RG
          </label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="birthDate"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Data de nascimento
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Sexo
          </label>
          <select
            id="gender"
            name="gender"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="maritalStatus"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Estado civil
          </label>
          <input
            type="text"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="nationality"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Nacionalidade
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="placeOfBirth"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Naturalidade
          </label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="educationLevel"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Instrução
          </label>
          <input
            type="text"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="educationField"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Formação
          </label>
          <input
            type="text"
            name="educationField"
            value={formData.educationField}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="professionalCategory"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Categoria Profissional
          </label>
          <input
            type="text"
            name="professionalCategory"
            value={formData.professionalCategory}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="associationCategory"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Categoria de sócio
          </label>
          <input
            type="text"
            name="associationCategory"
            value={formData.associationCategory}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Endereço
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="neighborhood"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Bairro
          </label>
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Cidade
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            UF
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="cep"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            CEP
          </label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone fixo
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Celular
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="otherContact"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Outro contato
          </label>
          <input
            type="text"
            name="otherContact"
            value={formData.otherContact}
            onChange={handleChange}
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 sm:mt-6"
        disabled={loading}
      >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  )
}
