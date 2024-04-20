import { Grid, InputAdornment, TextField } from "@mui/material"

const InputAmount = () => {
  return (
    <Grid item md>
        <TextField
            label="Amount"
            fullWidth
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
        />
    </Grid>
  )
}

export default InputAmount