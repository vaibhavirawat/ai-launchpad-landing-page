'use client'

import { createContext, useCallback, useContext, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { RegistrationForm } from './registration-form'

const ApplyModalContext = createContext<() => void>(() => {})

export function useOpenApplyModal() {
  return useContext(ApplyModalContext)
}

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    dialog.querySelector('input')?.focus()
  }, [])

  return (
    <ApplyModalContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close()
        }}
        className="m-auto w-[min(92vw,30rem)] rounded-3xl border border-line bg-panel p-0 text-white"
      >
        <div className="p-6 sm:p-8">
          <div className="mb-1 flex items-start justify-between gap-4">
            <h2 id="modal-title" className="sr-only">
              Apply for Cohort
            </h2>
            <span />
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="-mr-2 -mt-2 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <RegistrationForm idPrefix="modal" />
        </div>
      </dialog>
    </ApplyModalContext.Provider>
  )
}

export function ApplyButton({ className, children }: { className?: string; children: ReactNode }) {
  const open = useOpenApplyModal()
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  )
}
