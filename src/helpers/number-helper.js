export const formatNumber = (nyumber) => {
  let result = '';
  const [integerPart, fractionalPart] = `${nyumber}`.split('.');
  for (let i = 0; i < integerPart.length; i++) {
    result = result + integerPart[i];
    if (i !== integerPart.length - 1 && (integerPart.length - 1 - i) % 3 === 0) {
      result = result + '\xa0';
    }
  }
  if (fractionalPart) {
    result += `.${fractionalPart.slice(0, 2)}`;
  }
  return result;
};