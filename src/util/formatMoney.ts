import {isNaN} from 'lodash';

export const formatMoney = (value: number) => {
  if (isNaN(Number(value))) {
    return '';
  }
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
