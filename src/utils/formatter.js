export function currencyFormatter(value) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: 'ARS'
  }) 
  return formatter.format(value)
}
