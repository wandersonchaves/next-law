export class ClientFormDTO {
  name = ''
  cpf = ''
  rg = ''
  birthDate = ''
  gender = ''
  maritalStatus = ''
  nationality = ''
  placeOfBirth = ''
  educationLevel = ''
  educationField = ''
  professionalCategory = ''
  associationCategory = ''
  address = ''
  neighborhood = ''
  city = ''
  state = ''
  cep = ''
  phone = ''
  mobile = ''
  email = ''
  otherContact = ''
  dependents: {
    name: string
    birthDate: string
    relationship: string
  }[] = []
}
