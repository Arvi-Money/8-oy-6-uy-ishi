import { Container, Grid } from "@mui/material"
import InputAmount from "./InputAmount"
import SelectCountry from "./SelectCountry"
import SwitchCurrency from "./SwitchCurrency"
import { useState } from "react"

const Card = () => {
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>("")

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
      </Container>
  )
}

export default Card