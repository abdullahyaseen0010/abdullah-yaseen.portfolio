// app/components/contact/ContactForm.tsx (Client Component)
'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import FormField from './FormField';
import { contactConfig, formLabels, formPlaceholders, formValidation, successMessage } from './contactData';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = formValidation.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = formValidation.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = formValidation.errors.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = formValidation.errors.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = formValidation.errors.messageRequired;
    } else if (formData.message.trim().length < formValidation.minMessageLength) {
      newErrors.message = formValidation.errors.messageMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Create mailto link with form data
    const mailtoLink = `mailto:${contactConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message and reset form
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after configured duration
    setTimeout(() => setSubmitStatus('idle'), successMessage.duration);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        {/* Name Field */}
        <FormField
          id="name"
          label={formLabels.name}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder={formPlaceholders.name}
          error={errors.name}
          isFocused={focusedField === 'name'}
          icon="user"
        />

        {/* Email Field */}
        <FormField
          id="email"
          label={formLabels.email}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder={formPlaceholders.email}
          error={errors.email}
          isFocused={focusedField === 'email'}
          icon="mail"
        />

        {/* Subject Field */}
        <FormField
          id="subject"
          label={formLabels.subject}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          placeholder={formPlaceholders.subject}
          error={errors.subject}
          isFocused={focusedField === 'subject'}
          icon="message"
        />

        {/* Message Field */}
        <FormField
          id="message"
          label={formLabels.message}
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder={formPlaceholders.message}
          error={errors.message}
          isFocused={focusedField === 'message'}
          rows={8}
        />

        {/* Submit Button */}
        <motion.button
          type="button"
          onClick={handleSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-6 rounded-xl font-semibold text-black transition-all flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-sm font-medium text-green-500">
              {successMessage.text}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;