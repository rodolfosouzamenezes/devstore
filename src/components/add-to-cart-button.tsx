'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      onClick={() => addToCart(productId)}
      className="mt-8 h-12 flex items-center justify-center rounded-full font-semibold bg-emerald-600"
    >
      Adicionar ao carrinho
    </button>
  )
}
