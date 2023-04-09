import * as React from 'react';
import { Typography } from '@mui/material';

interface Props {
  value: number;
  label?: string;
  style?: 'decimal' | 'percent';
}

const Number: React.FC<Props> = ({ label, value, style = 'decimal' }) => {
  const formatted = isNaN(value)
    ? 'n/a'
    : new Intl.NumberFormat('en-US', {
        style,
        maximumFractionDigits: style === 'decimal' ? 10 : 2,
      }).format(value);

  const valueString = String(value);

  const isTruncated =
    !isNaN(value) &&
    (style === 'percent'
      ? valueString.length !== formatted.length - 1
      : valueString.length !== formatted.length);

  return (
    <Typography title={isTruncated ? valueString : undefined}>
      {label ? `${label}: ` : ''}
      {formatted}
    </Typography>
  );
};

export default Number;
