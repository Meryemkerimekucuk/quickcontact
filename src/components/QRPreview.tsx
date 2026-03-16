import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { QRCodeSVG } from 'qrcode.react'

type QRPreviewProps = {
  value: string
  size?: number
}

export const QRPreview = ({ value, size = 200 }: QRPreviewProps) => {
  if (!value || value.trim() === '') {
    return (
      <div
        className="flex flex-shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-4"
        style={{ width: size, height: size }}
        aria-label="QR kod önizlemesi boş"
      >
        <FontAwesomeIcon icon="qrcode" className="text-4xl text-slate-300" />
        <span className="text-center text-sm text-slate-400">Bilgi girildikçe QR kod burada görünecek</span>
      </div>
    )
  }

  return (
    <div
      className="flex flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
      style={{ width: size, height: size }}
      aria-label="QR kod önizlemesi"
    >
      <QRCodeSVG value={value} size={size - 24} level="M" includeMargin={false} />
    </div>
  )
}
