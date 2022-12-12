'use client'

import { useId, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type { UpdatePostInput } from '@src/lib/graphql/graphql.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { ClientError } from 'graphql-request'
import { useGraphQLErrors } from '@src/feature/graphql/customErrors/useCustomGraphqlErrors'
import { updatePostMutation } from '@src/feature/post/updatePost/updatePostMutation'
import type { UpdatePostForm_PostFragment } from '@src/feature/post/updatePost/updatePost.generated'

/**
 * TODO 外部切り出し
 */
type ToZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>
}

type Props = {
  post: UpdatePostForm_PostFragment
}

/**
 * TODO リファクタリング
 */
export const UpdatePostForm = ({ post }: Props) => {
  const id = useId()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const { findErrorMessages, setErrors, resetErrors } =
    useGraphQLErrors<UpdatePostInput>()
  const { register, handleSubmit, reset } = useForm<UpdatePostInput>({
    defaultValues: {
      title: post.title,
      content: post.content,
    },
    resolver: zodResolver(
      z.object<ToZod<UpdatePostInput>>({
        title: z.string(),
        content: z.string(),
      })
    ),
  })

  const handleUpdatePost = handleSubmit((data) => {
    startTransition(() => {
      ;(async () => {
        try {
          await updatePostMutation(post.id, data)
          router.push('/user/post')
          reset()
          resetErrors()
        } catch (e) {
          console.log(e)
          if (e instanceof ClientError && e.response.errors) {
            setErrors(e.response.errors)
          }
        }
      })()
    })
  })

  return (
    <form
      onSubmit={handleUpdatePost}
      className={'px-2 py-6 max-w-lg w-full mx-auto'}
    >
      <div className={'grid gap-2'}>
        <div className={'flex flex-col'}>
          <label htmlFor={`${id}_title`}>タイトル</label>
          <input id={`${id}_title`} type={'text'} {...register('title')} />
          {findErrorMessages('title').map((message, index) => (
            <div key={`title_error_${message}_${index}`} className={'text-xs'}>
              {message}
            </div>
          ))}
        </div>
        <div className={'flex flex-col'}>
          <label htmlFor={`${id}_content`}>本文</label>
          <input id={`${id}_content`} type={'text'} {...register('content')} />
          {findErrorMessages('content').map((message, index) => (
            <div
              key={`content_error_${message}_${index}`}
              className={'text-xs'}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className={'h-4'} aria-hidden />
      <div className={'flex justify-center'}>
        <button
          className={`btn btn-primary btn-sm ${isPending ? 'loading' : ''}`}
          type={'submit'}
          disabled={isPending}
        >
          更新
        </button>
      </div>
    </form>
  )
}
