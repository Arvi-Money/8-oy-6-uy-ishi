import { Grid, InputAdornment, TextField } from "@mui/material"
import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"

const InputAmount = () => {
const {firstAmount, setFirstAmount} = useContext(CurrencyContext)

  return (
    <Grid item md>
        <TextField
            label="Amount"
            value={firstAmount}
            onChange={e => setFirstAmount(e.target.value)}
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