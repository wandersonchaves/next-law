import React, {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ModalWrapperProps {
  id: string
  children: React.ReactNode
  size?: ModalSize
}

const sizeMap: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
}

export const ModalWrapper = ({
  id,
  children,
  size = 'md',
}: ModalWrapperProps) => {
  return (
    <div
      id={id}
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div
        className={`relative max-h-full w-full ${sizeMap[size] || size} p-4`}
      >
        <div className="relative rounded-lg bg-white p-4 shadow sm:p-5 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  )
}

interface ModalHeaderProps {
  title: string
  modalId?: string
}

export const ModalHeader = ({title, modalId}: ModalHeaderProps) => (
  <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5 dark:border-gray-600">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <button
      type="button"
      className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-toggle={modalId || 'modal'}
    >
      <svg
        aria-hidden="true"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  </div>
)

export interface ModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id?: string
  type?: string
  value?: string
  placeholder?: string
}

export const ModalInput = ({
  label,
  id,
  type = 'text',
  value,
  placeholder,
  ...props
}: ModalInputProps) => (
  <div>
    <label
      htmlFor={props.name}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      defaultValue={value}
      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
      placeholder={placeholder}
      required
      {...props}
    />
  </div>
)

export interface ModalTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id?: string
  value?: string
  placeholder?: string
}

export const ModalTextArea = ({
  label,
  id,
  value,
  placeholder,
  ...props
}: ModalTextAreaProps) => (
  <div className="sm:col-span-2">
    <label
      htmlFor={props.name}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      defaultValue={value}
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
      placeholder={placeholder}
      {...props}
    ></textarea>
  </div>
)

interface Option {
  label: string
  value: string
}

interface ModalSelectProps {
  label: string
  id?: string
  name: string
  options: Option[]
}

export const ModalSelect = ({label, id, name, options}: ModalSelectProps) => (
  <div>
    <label
      htmlFor={name}
      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <select
      id={id}
      name={name}
      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
    >
      {options.map(({label, value}) => (
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      ))}
    </select>
  </div>
)

export const ModalFormGrid = ({children}: {children: React.ReactNode}) => (
  <div className="mb-4 grid gap-4 sm:grid-cols-2">{children}</div>
)

interface ModalActionsProps {
  primaryLabel?: string
  primaryStyle?: string
  secondaryLabel?: string
  secondaryStyle?: string
  primaryIcon?: string
  primaryType?: 'button' | 'submit' | 'reset'
  onPrimaryClick?: () => void
  children?: React.ReactNode
}

export const ModalActions = ({
  primaryLabel,
  primaryIcon,
  primaryType = 'button',
  onPrimaryClick,
  children,
}: ModalActionsProps) => (
  <div className="...">
    <button
      type={primaryType}
      onClick={onPrimaryClick}
      className="..."
    >
      {primaryIcon && <i className={primaryIcon}></i>}
      {primaryLabel}
    </button>
    {children}
  </div>
)
