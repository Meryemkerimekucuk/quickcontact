import type { ContactFormData } from '../types/contact'

const escapeVcardValue = (value: string): string => {
  return value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}

export const buildVcard = (data: ContactFormData): string => {
  const lines: string[] = ['BEGIN:VCARD', 'VERSION:3.0']

  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ')
  if (fullName) {
    lines.push(`FN:${escapeVcardValue(fullName)}`)
    lines.push(`N:${escapeVcardValue(data.lastName)};${escapeVcardValue(data.firstName)};;;`)
  }

  const fullPhone = [data.phoneCountryCode, data.phone].filter(Boolean).join('').replace(/\s/g, '')
  if (fullPhone) lines.push(`TEL;TYPE=CELL:${fullPhone}`)
  if (data.email) lines.push(`EMAIL:${escapeVcardValue(data.email)}`)
  if (data.company) lines.push(`ORG:${escapeVcardValue(data.company)}`)
  if (data.title) lines.push(`TITLE:${escapeVcardValue(data.title)}`)

  data.socialLinks
    .filter((link) => link.url.trim() !== '')
    .forEach((link) => lines.push(`URL:${escapeVcardValue(link.url)}`))

  lines.push('END:VCARD')
  return lines.join('\r\n')
}

export const hasAnyContactData = (data: ContactFormData): boolean => {
  const { phoneCountryCode, socialLinks, ...rest } = data
  const hasRest = Object.values(rest).some((v) => typeof v === 'string' && v.trim() !== '')
  const hasSocial = socialLinks.some((link) => link.url.trim() !== '')
  return hasRest || hasSocial
}
