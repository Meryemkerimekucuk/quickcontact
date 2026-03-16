export type SocialLink = {
  platformId: string
  url: string
}

export type ContactFormData = {
  firstName: string
  lastName: string
  phoneCountryCode: string
  phone: string
  email: string
  company: string
  title: string
  socialLinks: SocialLink[]
}

export const emptyContactFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  phoneCountryCode: '+90',
  phone: '',
  email: '',
  company: '',
  title: '',
  socialLinks: [],
}
