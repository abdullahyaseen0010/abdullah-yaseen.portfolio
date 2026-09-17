// app/components/contact/FormField.tsx (Client Component)
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, AlertCircle } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  error?: string;
  isFocused: boolean;
  icon?: 'user' | 'mail' | 'message';
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  error,
  isFocused,
  icon,
  rows = 4,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'user':
        return <User className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      case 'message':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-semibold mb-2"
        style={{ color: 'var(--color-primary-content)' }}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div 
            className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: isFocused ? 'var(--gradient-start)' : 'var(--color-tertiary-content)' }}
          >
            {getIcon()}
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={rows}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border transition-all outline-none resize-none"
            style={{
              borderColor: error ? '#EF4444' : isFocused ? 'var(--gradient-start)' : undefined,
              color: 'var(--color-neutral)',
            }}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border transition-all outline-none`}
            style={{
              borderColor: error ? '#EF4444' : isFocused ? 'var(--gradient-start)' : undefined,
              color: 'var(--color-neutral)',
            }}
            placeholder={placeholder}
          />
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm flex items-center gap-1"
          style={{ color: '#EF4444' }}
        >
          <AlertCircle className="w-4 h-4" />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default FormField;