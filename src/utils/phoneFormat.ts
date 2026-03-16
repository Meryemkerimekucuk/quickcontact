type PhoneFormatRule = {
  placeholder: string
  maxDigits: number
  format: (digits: string) => string
}

const onlyDigits = (s: string): string => s.replace(/\D/g, '')

const formatTr = (digits: string): string => {
  const d = onlyDigits(digits).slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`
  if (d.length <= 8) return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`
  return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`
}

const formatUs = (digits: string): string => {
  const d = onlyDigits(digits).slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

const formatUk = (digits: string): string => {
  const d = onlyDigits(digits).slice(0, 10)
  if (d.length <= 4) return d
  if (d.length <= 7) return `${d.slice(0, 4)} ${d.slice(4)}`
  return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`
}

const formatGeneric = (digits: string, groupSizes: number[]): string => {
  const d = onlyDigits(digits)
  const parts: string[] = []
  let i = 0
  for (const size of groupSizes) {
    if (i >= d.length) break
    parts.push(d.slice(i, i + size))
    i += size
  }
  if (i < d.length) parts.push(d.slice(i))
  return parts.join(' ')
}

const PHONE_RULES: Record<string, PhoneFormatRule> = {
  '+90': {
    placeholder: '5XX XXX XX XX',
    maxDigits: 10,
    format: formatTr,
  },
  '+1': {
    placeholder: '(XXX) XXX-XXXX',
    maxDigits: 10,
    format: formatUs,
  },
  '+44': {
    placeholder: 'XXXX XXX XXXX',
    maxDigits: 10,
    format: formatUk,
  },
  '+49': {
    placeholder: 'XXX XXXXXXX',
    maxDigits: 11,
    format: (d) => formatGeneric(d, [3, 7]),
  },
  '+33': {
    placeholder: 'X XX XX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [1, 2, 2, 2, 2]),
  },
  '+39': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+34': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+31': {
    placeholder: 'X XX XX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [1, 2, 2, 2, 2]),
  },
  '+32': {
    placeholder: 'XXX XX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 2, 2, 2]),
  },
  '+43': {
    placeholder: 'XXX XXXXXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 7]),
  },
  '+41': {
    placeholder: 'XX XXX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 2, 2]),
  },
  '+46': {
    placeholder: 'XX XXX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 2, 2]),
  },
  '+47': {
    placeholder: 'XXX XX XXX',
    maxDigits: 8,
    format: (d) => formatGeneric(d, [3, 2, 3]),
  },
  '+45': {
    placeholder: 'XX XX XX XX',
    maxDigits: 8,
    format: (d) => formatGeneric(d, [2, 2, 2, 2]),
  },
  '+358': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+48': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+420': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+36': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+40': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+30': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+351': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+7': {
    placeholder: 'XXX XXX XX XX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 2, 2]),
  },
  '+380': {
    placeholder: 'XX XXX XX XX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 2, 2]),
  },
  '+966': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+971': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+20': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+27': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+91': {
    placeholder: 'XXXXX XXXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [5, 5]),
  },
  '+86': {
    placeholder: 'XXX XXXX XXXX',
    maxDigits: 11,
    format: (d) => formatGeneric(d, [3, 4, 4]),
  },
  '+81': {
    placeholder: 'XX XXXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [2, 4, 4]),
  },
  '+82': {
    placeholder: 'XX XXXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [2, 4, 4]),
  },
  '+61': {
    placeholder: 'XXX XXX XXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [3, 3, 3]),
  },
  '+55': {
    placeholder: 'XX XXXXX XXXX',
    maxDigits: 11,
    format: (d) => formatGeneric(d, [2, 5, 4]),
  },
  '+52': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+54': {
    placeholder: 'XX XXXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [2, 4, 4]),
  },
  '+353': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+64': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
  '+60': {
    placeholder: 'XX XXXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 4, 4]),
  },
  '+65': {
    placeholder: 'XXXX XXXX',
    maxDigits: 8,
    format: (d) => formatGeneric(d, [4, 4]),
  },
  '+62': {
    placeholder: 'XXX XXXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 4, 4]),
  },
  '+98': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+964': {
    placeholder: 'XXX XXX XXXX',
    maxDigits: 10,
    format: (d) => formatGeneric(d, [3, 3, 4]),
  },
  '+962': {
    placeholder: 'X XXXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [1, 4, 4]),
  },
  '+972': {
    placeholder: 'XX XXX XXXX',
    maxDigits: 9,
    format: (d) => formatGeneric(d, [2, 3, 4]),
  },
}

const defaultRule: PhoneFormatRule = {
  placeholder: 'XXXXXXXXXX',
  maxDigits: 15,
  format: (d) => formatGeneric(d, [3, 3, 3, 3]),
}

export const getPhonePlaceholder = (countryCode: string): string => {
  return PHONE_RULES[countryCode]?.placeholder ?? defaultRule.placeholder
}

export const getPhoneMaxDigits = (countryCode: string): number => {
  return PHONE_RULES[countryCode]?.maxDigits ?? defaultRule.maxDigits
}

export const formatPhoneDisplay = (countryCode: string, rawPhone: string): string => {
  const digits = rawPhone.replace(/\D/g, '')
  const rule = PHONE_RULES[countryCode] ?? defaultRule
  const limited = digits.slice(0, rule.maxDigits)
  return rule.format(limited)
}

export const normalizePhoneDigits = (countryCode: string, value: string): string => {
  const digits = value.replace(/\D/g, '')
  const max = getPhoneMaxDigits(countryCode)
  return digits.slice(0, max)
}
