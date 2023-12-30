export const toLocalePrice = (price: number, fractionDigits?: boolean) => {
  const priceFormatted = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: fractionDigits ? undefined : 0,
    maximumFractionDigits: fractionDigits ? undefined : 0,
  })

  return priceFormatted
}
