export const toLocalePrice = (price: number) => {
  const priceFormatted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return priceFormatted
}
