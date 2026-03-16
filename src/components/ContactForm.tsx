import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ContactFormData } from '../types/contact'
import { COUNTRY_CODES } from '../constants/countryCodes'
import { SOCIAL_PLATFORMS } from '../constants/socialPlatforms'
import {
  getPhonePlaceholder,
  formatPhoneDisplay,
  normalizePhoneDigits,
} from '../utils/phoneFormat'
import { SocialIcon } from './SocialIcon'
import { hasAnyContactData } from '../utils/vcard'

type ContactFormProps = {
  data: ContactFormData
  onChange: (data: ContactFormData) => void
  onEmptySubmit: () => void
}

const fieldClass =
  'w-full min-h-[3rem] rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'

const selectClass =
  'min-h-[3rem] rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700'

export const ContactForm = ({ data, onChange, onEmptySubmit }: ContactFormProps) => {
  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    if (field === 'phone') {
      const digits = normalizePhoneDigits(data.phoneCountryCode, value)
      onChange({ ...data, phone: digits })
      return
    }
    onChange({ ...data, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!hasAnyContactData(data)) {
      onEmptySubmit()
      return
    }
  }

  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(SOCIAL_PLATFORMS[0]?.id ?? '')
  const addedPlatformIds = data.socialLinks.map((l) => l.platformId)
  const availablePlatforms = SOCIAL_PLATFORMS.filter((p) => !addedPlatformIds.includes(p.id))

  useEffect(() => {
    const available = SOCIAL_PLATFORMS.filter((p) => !data.socialLinks.some((l) => l.platformId === p.id))
    if (available.length === 0) setSelectedPlatformId('')
    else if (!selectedPlatformId || data.socialLinks.some((l) => l.platformId === selectedPlatformId)) {
      setSelectedPlatformId(available[0].id)
    }
  }, [data.socialLinks.length, selectedPlatformId])

  const handleAddSocial = () => {
    if (!selectedPlatformId) return
    if (addedPlatformIds.includes(selectedPlatformId)) return
    const platform = SOCIAL_PLATFORMS.find((p) => p.id === selectedPlatformId)
    if (!platform) return
    onChange({
      ...data,
      socialLinks: [...data.socialLinks, { platformId: platform.id, url: '' }],
    })
  }

  const handleSocialUrlChange = (index: number, url: string) => {
    const next = [...data.socialLinks]
    next[index] = { ...next[index], url }
    onChange({ ...data, socialLinks: next })
  }

  const handleRemoveSocial = (index: number) => {
    onChange({
      ...data,
      socialLinks: data.socialLinks.filter((_, i) => i !== index),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="İletişim bilgileri formu">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            Ad
          </label>
          <input
            id="firstName"
            type="text"
            value={data.firstName}
            onChange={handleChange('firstName')}
            className={fieldClass}
            placeholder="Adınız"
            aria-label="Ad"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Soyad
          </label>
          <input
            id="lastName"
            type="text"
            value={data.lastName}
            onChange={handleChange('lastName')}
            className={fieldClass}
            placeholder="Soyadınız"
            aria-label="Soyad"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Telefon
        </label>
        <div className="flex gap-2">
          <select
            id="phoneCountryCode"
            value={data.phoneCountryCode}
            onChange={handleChange('phoneCountryCode')}
            className={`${selectClass} w-36 flex-shrink-0`}
            aria-label="Ülke kodu"
          >
            {COUNTRY_CODES.map(({ code, label }) => (
              <option key={`${code}-${label}`} value={code}>
                {code} {label}
              </option>
            ))}
          </select>
          <input
            id="phone"
            type="tel"
            value={formatPhoneDisplay(data.phoneCountryCode, data.phone)}
            onChange={handleChange('phone')}
            className={fieldClass}
            placeholder={getPhonePlaceholder(data.phoneCountryCode)}
            aria-label="Telefon numarası"
            autoComplete="tel-national"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={handleChange('email')}
          className={fieldClass}
          placeholder="ornek@email.com"
          aria-label="E-posta"
          autoComplete="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Şirket
          </label>
          <input
            id="company"
            type="text"
            value={data.company}
            onChange={handleChange('company')}
            className={fieldClass}
            placeholder="Şirket adı"
            aria-label="Şirket"
          />
        </div>
        <div>
          <label htmlFor="title" className={labelClass}>
            Unvan
          </label>
          <input
            id="title"
            type="text"
            value={data.title}
            onChange={handleChange('title')}
            className={fieldClass}
            placeholder="Unvanınız"
            aria-label="Unvan"
          />
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
          <FontAwesomeIcon icon={['fas', 'share-nodes']} className="text-slate-500" />
          Sosyal medya
        </h3>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedPlatformId}
            onChange={(e) => setSelectedPlatformId(e.target.value)}
            className={`${selectClass} min-w-0 flex-1 sm:max-w-xs`}
            aria-label="Platform seçin"
          >
            {availablePlatforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
            {availablePlatforms.length === 0 && (
              <option value="">Tüm platformlar eklendi</option>
            )}
          </select>
          <button
            type="button"
            onClick={handleAddSocial}
            disabled={
              addedPlatformIds.includes(selectedPlatformId) ||
              availablePlatforms.length === 0
            }
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-600 bg-emerald-600 text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Platform ekle"
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {data.socialLinks.map((link, index) => {
            const platform = SOCIAL_PLATFORMS.find((p) => p.id === link.platformId)
            if (!platform) return null
            return (
              <div
                key={`${link.platformId}-${index}`}
                className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-2"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <SocialIcon slug={platform.slug} size={22} />
                </div>
                <span className="min-w-0 flex-1 text-sm font-medium text-slate-700 sm:w-28">
                  {platform.name}
                </span>
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleSocialUrlChange(index, e.target.value)}
                  className={`${fieldClass} min-h-0 flex-1 py-2 sm:min-w-[12rem]`}
                  placeholder={`${platform.name} linki`}
                  aria-label={`${platform.name} adresi`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSocial(index)}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  aria-label="Kaldır"
                >
                  <FontAwesomeIcon icon="trash-can" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </form>
  )
}
