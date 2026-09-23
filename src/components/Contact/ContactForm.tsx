'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { contactConfig, formCopy } from './contactData'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const fieldClass =
  'border-border bg-secondary text-neutral focus-visible:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 w-full rounded-md border px-4 py-3'
const errorFieldClass = 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30'

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const ContactForm = () => {
  const [errors, setErrors] = useState<Errors>({})
  const [opened, setOpened] = useState(false)

  const validate = (data: FormData): Errors => {
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = formCopy.errors.name
    if (!email || !isValidEmail(email)) next.email = formCopy.errors.email
    if (message.length < 10) next.message = formCopy.errors.message
    return next
  }

  const clearError = (field: keyof Errors) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!errors[field]) return
    if (field === 'email' && !isValidEmail(event.target.value.trim())) return
    if (field !== 'email' && !event.target.value.trim()) return
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const foundErrors = validate(data)
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length > 0) return

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = `Message from ${name}`
    const body = `${message}\n\n${name}\n${email}`

    window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // The form is not cleared: if no email app opens, the text is still there.
    setOpened(true)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-neutral font-medium">
          {formCopy.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onChange={clearError('name')}
          className={`${fieldClass} ${errors.name ? errorFieldClass : ''}`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-neutral font-medium">
          {formCopy.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onChange={clearError('email')}
          className={`${fieldClass} ${errors.email ? errorFieldClass : ''}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-neutral font-medium">
          {formCopy.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onChange={clearError('message')}
          className={`${fieldClass} resize-y ${errors.message ? errorFieldClass : ''}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="bg-accent text-primary rounded-md px-6 py-3 font-semibold transition-opacity hover:opacity-90"
        >
          {formCopy.submit}
        </button>
        <p className="text-primary-content text-sm">{formCopy.hint}</p>
      </div>

      {opened && (
        <p role="status" className="text-neutral">
          Your email app should have opened with the message ready to send. If it did not, write to{' '}
          <a
            href={`mailto:${contactConfig.email}`}
            className="decoration-accent underline decoration-2 underline-offset-4"
          >
            {contactConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}

export default ContactForm
