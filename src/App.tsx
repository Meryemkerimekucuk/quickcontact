import { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactForm } from './components/ContactForm'
import { QRPreview } from './components/QRPreview'
import { DownloadButtons } from './components/DownloadButtons'
import { buildVcard, hasAnyContactData } from './utils/vcard'
import type { ContactFormData } from './types/contact'
import { emptyContactFormData } from './types/contact'

const APP_TITLE = 'QuickContact'
const APP_DESC = 'Dijital kartvizit ve QR kod oluşturucu'

export const App = () => {
  const [formData, setFormData] = useState<ContactFormData>(emptyContactFormData)
  const [showEmptyWarning, setShowEmptyWarning] = useState(false)

  const vcfContent = buildVcard(formData)
  const hasData = hasAnyContactData(formData)

  const handleEmptySubmit = useCallback(() => {
    setShowEmptyWarning(true)
    setTimeout(() => setShowEmptyWarning(false), 5000)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <main className="mx-auto max-w-2xl px-4 py-6 pb-12 sm:py-10">
        <header className="mb-6 text-center">
          <h1 className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-800 sm:text-3xl" id="app-title">
            <FontAwesomeIcon icon="address-card" className="text-emerald-600" />
            {APP_TITLE}
          </h1>
          <p className="mt-1 text-slate-600" aria-describedby="app-title">
            {APP_DESC}
          </p>
        </header>

        {showEmptyWarning && (
          <div
            role="alert"
            className="mb-4 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            <FontAwesomeIcon icon="exclamation-triangle" className="flex-shrink-0" />
            En az bir iletişim bilgisi girmeniz gerekiyor. Boş kartvizit paylaşılamaz.
          </div>
        )}

        <section
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
          aria-labelledby="form-heading"
        >
          <h2 id="form-heading" className="sr-only">
            Kartvizit bilgileri
          </h2>

          <div className="flex flex-col gap-8">
            <ContactForm
              data={formData}
              onChange={setFormData}
              onEmptySubmit={handleEmptySubmit}
            />

            <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-8">
              <QRPreview value={vcfContent} size={200} />
              <DownloadButtons vcfContent={vcfContent} qrValue={vcfContent} hasData={hasData} />
            </div>
          </div>
        </section>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <FontAwesomeIcon icon="qrcode" className="text-slate-400" />
          Bilgilerinizi girin; QR kod anlık güncellenir. QR kodu tarayan kişi rehberine ekleyebilir.
        </p>
      </main>
    </div>
  )
}
