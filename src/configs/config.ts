// let settings = {}

interface ISettings {
  apiUrl: string
  appName: string
  subject: string
  baseUrl: string
}

const settings = {
  apiUrl: '',
  appName: 'BaaS Platform',
  subject: 'BaaS Platform',
  baseUrl: 'https://sandbox-api.baas.ng'
} as ISettings

export default settings
