import React from 'react';
import { BRAND } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-4 py-2 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm";
  const styles = {
    primary: `bg-[#f7a022] text-white shadow-md hover:shadow-lg hover:brightness-105`,
    secondary: "bg-white text-slate-700 border border-slate-300 hover:border-[#f7a022] hover:text-[#f7a022]",
    outline: "bg-transparent border border-[#f7a022] text-[#f7a022] hover:bg-[#f7a022] hover:text-white",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-[#f7a022]",
    dark: `bg-[#2d3243] text-white hover:bg-slate-800`
  };
  return (
    <button 
      className={`${base} ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;