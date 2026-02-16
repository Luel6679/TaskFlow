
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const base = "inline-flex items-center justify-center font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800 active:scale-95",
    secondary: "bg-neutral-100 text-black hover:bg-neutral-200 active:scale-95",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white active:scale-95"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button 
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-0 placeholder:text-neutral-400 bg-white" 
    {...props} 
  />
);

export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
    {children}
  </label>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`border-2 border-black p-6 bg-white ${className}`}>
    {children}
  </div>
);
