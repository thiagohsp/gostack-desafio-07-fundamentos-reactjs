const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    useGrouping: true,
    minimumFractionDigits: 2,
  }).format(value); // TODO

export default formatValue;
