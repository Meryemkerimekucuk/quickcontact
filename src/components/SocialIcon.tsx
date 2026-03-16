import * as simpleIcons from 'simple-icons'

const slugToVariableName = (slug: string): string =>
  'si' +
  slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('')

type SocialIconProps = {
  slug: string
  className?: string
  size?: number
}

type SimpleIconData = {
  path: string
  title: string
  hex: string
}

export const SocialIcon = ({ slug, className = '', size = 24 }: SocialIconProps) => {
  const variableName = slugToVariableName(slug)
  const icon = (simpleIcons as Record<string, SimpleIconData | undefined>)[variableName]
  if (!icon) return null
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}
