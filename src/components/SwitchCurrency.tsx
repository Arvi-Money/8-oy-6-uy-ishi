import { Button, Grid } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import { CurrencyContextType } from "../context/CurrencyContext";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

const switchCurrency = () => {
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext) as CurrencyContextType;


    const handleSwitch = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency)
    }
  return (
    <Grid item xs={12} md="auto">
        <Button onClick={handleSwitch} sx={{
            borderRadius: 1,
            height: "100%"
        }}>
            <CompareArrowsIcon sx={{ fontSize: 30 }}/>
        </Button>
    </Grid>
  )
}

export default switchCurrency