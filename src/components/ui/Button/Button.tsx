interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black' | 'white'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-xl font-bold cursor-pointer transition-all duration-100 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed translate-y-0 active:translate-y-1 select-none'

  const variantClasses = {
    primary: 'bg-primary text-white shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-primary)_60%,black)] hover:shadow-[0_3px_0_0_color-mix(in_srgb,var(--color-primary)_60%,black)] hover:translate-y-0.5 active:shadow-none focus:ring-primary/30',
    secondary: 'bg-secondary text-white dark:text-black shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-secondary)_60%,black)] hover:shadow-[0_3px_0_0_color-mix(in_srgb,var(--color-secondary)_60%,black)] hover:translate-y-0.5 active:shadow-none focus:ring-secondary/30',
    success: 'bg-success text-white shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-success)_60%,black)] hover:shadow-[0_3px_0_0_color-mix(in_srgb,var(--color-success)_60%,black)] hover:translate-y-0.5 active:shadow-none focus:ring-success/30',
    warning: 'bg-warning text-white shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-warning)_60%,black)] hover:shadow-[0_3px_0_0_color-mix(in_srgb,var(--color-warning)_60%,black)] hover:translate-y-0.5 active:shadow-none focus:ring-warning/30',
    danger: 'bg-danger text-white shadow-[0_5px_0_0_color-mix(in_srgb,var(--color-danger)_60%,black)] hover:shadow-[0_3px_0_0_color-mix(in_srgb,var(--color-danger)_60%,black)] hover:translate-y-0.5 active:shadow-none focus:ring-danger/30',
    black: 'bg-black text-white shadow-[0_5px_0_0_#444] hover:shadow-[0_3px_0_0_#444] hover:translate-y-0.5 active:shadow-none focus:ring-black/30',
    white: 'bg-white text-black border border-gray-200 shadow-[0_5px_0_0_#d1d5db] hover:shadow-[0_3px_0_0_#d1d5db] hover:translate-y-0.5 active:shadow-none focus:ring-black/10'
  }

  const buttonClass = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button