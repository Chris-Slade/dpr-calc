import * as React from "react";
import { Grid } from "@mui/material";

const Calculator: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        Inputs
      </Grid>
      <Grid item xs={9}>
        Outputs
      </Grid>
    </Grid>
  );
};

export default Calculator;
