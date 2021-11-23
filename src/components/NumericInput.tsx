import * as React from "react";
import { TextField, OutlinedTextFieldProps } from "@mui/material";

type Value = number;

type Props = Omit<OutlinedTextFieldProps, "value" | "onChange" | "variant"> & {
  value: Value;
  onChange: (value: Value) => unknown;
};

const parse = (value: string): Value => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

const NumericInput: React.FC<Props> = ({ value, onChange, ...rest }) => (
  <TextField
    variant="outlined"
    type="number"
    value={value}
    onChange={(e) => onChange(parse(e.target.value))}
    {...rest}
  />
);

export default NumericInput;
