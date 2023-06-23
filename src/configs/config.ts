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
  baseUrl: process.env.NEXT_PUBLIC_BAAS_BASE_URL_KEY
} as ISettings

export default settings
