interface BrandMarkProps {
  className?: string
}

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 27V9l11 9 11-9v18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 9l11 18 11-18" stroke="currentColor" strokeWidth="1" opacity="0.42" />
      <circle cx="7" cy="9" r="2.5" fill="currentColor" />
      <circle cx="29" cy="9" r="2.5" fill="currentColor" />
      <circle cx="18" cy="27" r="2.5" fill="currentColor" />
    </svg>
  )
}
