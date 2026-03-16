import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { QRCodeSVG } from 'qrcode.react'

type DownloadButtonsProps = {
  vcfContent: string
  qrValue: string
  hasData: boolean
}

export const DownloadButtons = ({ vcfContent, qrValue, hasData }: DownloadButtonsProps) => {
  const qrRef = useRef<HTMLDivElement>(null)

  const handleDownloadVcf = () => {
    if (!vcfContent.trim()) return
    const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'contact.vcf'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDownloadQR = (format: 'png' | 'jpg') => {
    if (!qrRef.current || !qrValue) return
    const svg = qrRef.current.querySelector('svg')
    if (!svg) return
    const canvas = document.createElement('canvas')
    const size = 256
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const img = new Image()
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)
    img.onload = () => {
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, size, size)
      ctx.drawImage(img, 0, 0, size, size)
      URL.revokeObjectURL(url)
      const mime = format === 'png' ? 'image/png' : 'image/jpeg'
      canvas.toBlob((blob) => {
        if (!blob) return
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = `quickcontact-qr.${format}`
        a.click()
        URL.revokeObjectURL(a.href)
      }, mime)
    }
    img.src = url
  }

  const disabled = !hasData

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleDownloadVcf}
        disabled={disabled}
        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="VCF dosyasını indir"
        tabIndex={0}
      >
        <FontAwesomeIcon icon="file-arrow-down" />
        .vcf İndir
      </button>
      <button
        type="button"
        onClick={() => handleDownloadQR('png')}
        disabled={disabled}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="QR kodu PNG olarak indir"
        tabIndex={0}
      >
        <FontAwesomeIcon icon="image" />
        QR PNG
      </button>
      <button
        type="button"
        onClick={() => handleDownloadQR('jpg')}
        disabled={disabled}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="QR kodu JPG olarak indir"
        tabIndex={0}
      >
        <FontAwesomeIcon icon="image" />
        QR JPG
      </button>
      <div className="sr-only" aria-hidden>
        <div ref={qrRef}>
          {qrValue ? <QRCodeSVG value={qrValue} size={256} level="M" /> : null}
        </div>
      </div>
    </div>
  )
}
