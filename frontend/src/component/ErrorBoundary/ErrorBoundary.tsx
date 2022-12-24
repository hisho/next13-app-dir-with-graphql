'use client'
import type { ComponentType, ReactNode } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

export type ErrorBoundaryFallbackProps = Readonly<{
  error: Error
  reset: () => void
}>

export const ErrorBoundary = ({
  children,
  Fallback,
}: {
  children: ReactNode
  Fallback: ComponentType<ErrorBoundaryFallbackProps>
}) => {
  return (
    <ReactErrorBoundary
      fallbackRender={(e) => (
        <Fallback error={e.error} reset={e.resetErrorBoundary} />
      )}
    >
      {children}
    </ReactErrorBoundary>
  )
}
