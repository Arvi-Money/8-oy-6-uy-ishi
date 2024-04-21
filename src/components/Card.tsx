import { Container, Grid, Typography, Box } from "@mui/material"
import InputAmount from "./InputAmount"
import SelectCountry from "./SelectCountry"
import SwitchCurrency from "./SwitchCurrency"
import { useState } from "react"
import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"
import { CurrencyContextType } from "../context/CurrencyContext"

const Card: React.FC = () => {
    const {
      fromCurrency,
      setFromCurrency,
      toCurrency,
      setToCurrency,
      firstAmount,
    } = useContext(CurrencyContext) as CurrencyContextType;
    const [resultCurrency, setResultCurrency] = useState<number>(0);

    const boxStyles = {
        margin: "2.5rem auto",
        background: "#fdfdfd",
        position: "relative",
        textAlign: "center",
        color: "#222",
        minHeight: "20rem",
        borderRadius: 2,
        padding: "4rem 2rem",
        // left: "20rem"
        // boxShadow: "0px 10px 15px - 3px rgba(0,0,0,0.1"
    }

  return (
    <Container maxWidth="md" sx={boxStyles}>
        <Grid container spacing={2}>
          <InputAmount/>
          <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
          <SwitchCurrency/>
          <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
        </Grid>
        {firstAmount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "5px", fontWeight: "bold" }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : (
        ""
      )}
      </Container>
  )
}

export default Card