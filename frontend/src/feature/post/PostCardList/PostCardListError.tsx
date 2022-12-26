'use client'
import type { ErrorBoundaryFallbackProps } from '@src/component/ErrorBoundary/ErrorBoundary'

type Props = ErrorBoundaryFallbackProps

export const PostCardListError = ({ reset }: Props) => {
  return (
    <div>
      エラー出たよ
      <button type={'button'} onClick={reset}>
        リセットする
      </button>
    </div>
  )
}
