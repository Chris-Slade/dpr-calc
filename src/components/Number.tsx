import * as React from "react";

interface Props {
  value: number;
  style?: "decimal" | "percent";
}

const Number: React.FC<Props> = ({ value, style = "decimal" }) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style,
    maximumFractionDigits: 10,
  }).format(value);

  return <span>{formatted}</span>;
};

export default Number;
