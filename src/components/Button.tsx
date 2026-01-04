import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-lg hover:shadow-xl',
    secondary: 'bg-green-500 text-white hover:bg-green-600 active:scale-95 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
