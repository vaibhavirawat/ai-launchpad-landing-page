'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { goals } from '@/lib/landing-data'

type Role = 'Student' | 'Working Professional'
type FormData = { name: string; email: string; whatsapp: string; role: Role; goal: string }
type Errors = Partial<Record<keyof FormData, string>>

const initialData: FormData = { name: '', email: '', whatsapp: '', role: 'Student', goal: '' }
const roles: Role[] = ['Student', 'Working Professional']

export function RegistrationForm({ idPrefix }: { idPrefix: string }) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (step === 3) successRef.current?.focus()
    if (step === 2) formRef.current?.querySelector<HTMLInputElement>('input[name="role"]:checked')?.focus()
  }, [step])

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }))

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next: Errors = {}
    if (step === 1) {
      if (data.name.trim().length < 2) next.name = 'Please enter your full name.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = 'Enter a valid email address.'
      if (data.whatsapp.replace(/\D/g, '').length < 8)
        next.whatsapp = 'Enter a valid WhatsApp number with country code.'
    } else if (!data.goal) {
      next.goal = 'Please choose a goal.'
    }
    setErrors(next)
    const firstError = Object.keys(next)[0]
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus()
      return
    }
    setStep(step === 1 ? 2 : 3)
  }

  if (step === 3) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/15 text-brand-light">
          <Check className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
        </div>
        <h3 ref={successRef} tabIndex={-1} className="mt-5 text-xl font-semibold outline-none">
          {`You're on the list, ${data.name.trim().split(' ')[0]}!`}
        </h3>
        <p className="mt-2 text-sm text-white/60">
          {"We'll message you on WhatsApp at "}
          <span className="text-white">{data.whatsapp}</span> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(initialData)
            setErrors({})
            setStep(1)
          }}
          className="mt-6 text-sm text-brand-light underline-offset-4 hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  const isStepOne = step === 1

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-white/50">
          <span className="font-mono uppercase tracking-wider">Step {step} of 2</span>
          <span>{isStepOne ? 'Your details' : 'About you'}</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-brand transition-all duration-500"
            style={{ width: isStepOne ? '50%' : '100%' }}
          />
        </div>
        <h3 className="mt-5 text-xl font-semibold">
          {isStepOne ? 'Apply for the next cohort' : "Tell us where you're headed"}
        </h3>
      </div>
      <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-4">
        {isStepOne ? (
          <>
            <Field
              id={`${idPrefix}-name`}
              name="name"
              label="Full name"
              type="text"
              placeholder="Aarav Sharma"
              autoComplete="name"
              value={data.name}
              error={errors.name}
              onChange={(v) => update('name', v)}
            />
            <Field
              id={`${idPrefix}-email`}
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={data.email}
              error={errors.email}
              onChange={(v) => update('email', v)}
            />
            <Field
              id={`${idPrefix}-whatsapp`}
              name="whatsapp"
              label="WhatsApp number"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              value={data.whatsapp}
              error={errors.whatsapp}
              onChange={(v) => update('whatsapp', v)}
            />
          </>
        ) : (
          <>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-white/80">Current role</legend>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <label key={r} className="cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={data.role === r}
                      onChange={() => update('role', r)}
                      className="peer sr-only"
                    />
                    <span className="block rounded-xl border border-white/12 bg-white/[0.03] px-3 py-3 text-center text-sm transition peer-checked:border-brand peer-checked:bg-brand/15 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand">
                      {r}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor={`${idPrefix}-goal`} className="mb-1.5 block text-sm font-medium text-white/80">
                Primary goal
              </label>
              <select
                id={`${idPrefix}-goal`}
                name="goal"
                value={data.goal}
                onChange={(e) => update('goal', e.target.value)}
                className="field"
                aria-invalid={errors.goal ? true : undefined}
                aria-describedby={`${idPrefix}-goal-err`}
              >
                <option value="" className="bg-panel">
                  Select your goal
                </option>
                {goals.map((g) => (
                  <option key={g} value={g} className="bg-panel">
                    {g}
                  </option>
                ))}
              </select>
              <p id={`${idPrefix}-goal-err`} className={errors.goal ? 'mt-1 text-xs text-red-400' : 'hidden'}>
                {errors.goal}
              </p>
            </div>
          </>
        )}
        <div className="flex gap-2 pt-2">
          {!isStepOne && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="flex-1 rounded-xl bg-brand px-4 py-3 text-sm font-semibold transition hover:bg-brand-deep"
          >
            {isStepOne ? 'Continue' : 'Submit application'}
          </button>
        </div>
        <p className="text-center text-xs text-white/40">
          No spam. We only use your details to contact you about the cohort.
        </p>
      </form>
    </>
  )
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  autoComplete,
  value,
  error,
  onChange,
}: {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  autoComplete: string
  value: string
  error?: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field"
        aria-invalid={error ? true : undefined}
        aria-describedby={`${id}-err`}
        required
      />
      <p id={`${id}-err`} className={error ? 'mt-1 text-xs text-red-400' : 'hidden'}>
        {error}
      </p>
    </div>
  )
}
