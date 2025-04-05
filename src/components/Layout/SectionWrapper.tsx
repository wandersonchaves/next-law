import React from 'react'

import {cn} from '@/lib/utils'

interface SectionWrapperProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <section
      className={cn(
        'bg-gray-50 p-3 antialiased sm:p-5 dark:bg-gray-900',
        className,
      )}
    >
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-muted-foreground text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">{children}</div>
    </section>
  )
}
