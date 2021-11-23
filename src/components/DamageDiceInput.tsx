import * as React from "react";
import { Box, FormLabel } from "@mui/material";
import NumericInput from "./NumericInput";
import Value from "types/DamageDice";
import Die from "types/Die";

interface Props {
  value: Value;
  onChange: (value: Value) => unknown;
}

const DamageDieInput: React.FC<{
  die: Die;
  value: Value;
  onChange: (value: Value) => unknown;
}> = ({ die, value, onChange }) => (
  <NumericInput
    label={die}
    name={die}
    value={value[die]}
    onChange={(newValue) =>
      onChange({
        ...value,
        [die]: newValue,
      })
    }
  />
);

const dice: Die[] = ["d4", "d6", "d8", "d10", "d12", "d20"];

const DamageDiceInput: React.FC<Props> = ({ value, onChange }) => (
  <Box display="flex" flexDirection="column">
    <FormLabel sx={{ marginBottom: 3 }}>Damage Dice</FormLabel>
    <Box
      sx={{
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(2, 1fr)",
        gap: 3,
      }}
    >
      {dice.map((die, key) => (
        <DamageDieInput key={key} die={die} value={value} onChange={onChange} />
      ))}
    </Box>
  </Box>
);

export default DamageDiceInput;
