import clsx from 'clsx'

interface Props {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function MenuToggle({ isOpen, onClick, className }: Props) {
  return (
    <button
      className={clsx('relative z-20 -mr-2 h-12 w-12 lg:hidden', className)}
      onClick={onClick}
      aria-label='Toggle menu'
    >
      <HamburgerIcon
        className={clsx(
          'absolute left-2 top-2 h-8 w-8 transition-opacity',
          isOpen && 'opacity-0'
        )}
      />
      <CloseIcon
        className={clsx(
          'absolute left-2 top-2 h-8 w-8 transition-opacity',
          !isOpen && 'opacity-0'
        )}
      />
    </button>
  )
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M4 7H20' stroke='currentColor' strokeWidth='1.5' />
      <path d='M4 12H20' stroke='currentColor' strokeWidth='1.5' />
      <path d='M4 17H20' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.75732 7.75732L16.2426 16.2426'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M7.75732 16.2426L16.2426 7.75727'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
