'use client'

import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      Resultados para: <span className="font-semibold">{query}</span>
      <div className="grid grid-cols-3 gap-6 justify-between">
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
      </div>
    </div>
  )
}
