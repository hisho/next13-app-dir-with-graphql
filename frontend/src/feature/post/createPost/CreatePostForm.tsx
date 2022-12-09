'use client'

import { useId, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type { CreatePostInput } from '@src/lib/graphql/graphql.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createPostMutation } from '@src/feature/post/createPost/createPostMutation'
import { useRouter } from 'next/navigation'

/**
 * TODO 外部切り出し
 */
type ToZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>
}

/**
 * TODO リファクタリング
 */
export const CreatePostForm = () => {
  const id = useId()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const { register, handleSubmit, reset } = useForm<CreatePostInput>({
    defaultValues: {
      title: '',
      content: '',
    },
    resolver: zodResolver(
      z.object<ToZod<CreatePostInput>>({
        title: z.string(),
        content: z.string(),
      })
    ),
  })

  const handleCreatePost = handleSubmit((data) => {
    startTransition(() => {
      ;(async () => {
        try {
          await createPostMutation(data)
          reset()
          router.refresh()
        } catch (e) {
          console.log(e)
        }
      })()
    })
  })

  return (
    <form onSubmit={handleCreatePost}>
      <div>
        <label htmlFor={`${id}_title`}>タイトル</label>
        <input id={`${id}_title`} type={'text'} {...register('title')} />
      </div>
      <div>
        <label htmlFor={`${id}_content`}>本文</label>
        <input id={`${id}_content`} type={'text'} {...register('content')} />
      </div>
      <button type={'submit'} disabled={isPending}>
        作成
      </button>
    </form>
  )
}
