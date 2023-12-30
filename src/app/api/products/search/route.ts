import { z } from 'zod'
import data from '../data.json'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const product = data.products.filter((product) =>
    product.slug.toLowerCase().includes(query.toLowerCase()),
  )

  return Response.json(product)
}
