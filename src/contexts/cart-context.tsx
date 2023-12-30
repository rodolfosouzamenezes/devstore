'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CardContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CardContext = createContext({} as CardContextType)

export function CardProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState([] as CartItem[])

  const addToCart = (productId: number) => {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      return !productInCart
        ? [...state, { productId, quantity: 1 }]
        : state.map((item) => ({
            ...item,
            quantity:
              item.productId === productId ? item.quantity + 1 : item.quantity,
          }))
    })
  }

  return (
    <CardContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCart = () => useContext(CardContext)
