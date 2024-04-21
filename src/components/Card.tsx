import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCountry from "./SelectCountry";
import SwitchCurrency from "./SwitchCurrency";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { CurrencyContextType } from "../context/CurrencyContext";
import axios from "axios";

const Card: React.FC = () => {
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
    } = useContext(CurrencyContext) as CurrencyContextType;
    const [resultCurrency, setResultCurrency] = useState<number>(0);
    const codeFromCurrency = fromCurrency.split(" ")[1];
    const codeToCurrency = toCurrency.split(" ")[1];    
console.log(resultCurrency);

    useEffect(() => {
        if (firstAmount) {
            axios.get("/fetch-all?from=USD", {
                params: {
                    apikey: "fca_live_EaAh6LWnAZpcg4a0dV8zjua4B8Anhu0W8Jxsc81w",
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
            .then(response => setResultCurrency(response.data.data[codeToCurrency]))
            .catch(error => console.log(error));
        }   
    }, [firstAmount, fromCurrency, toCurrency]);

    const boxStyles: React.CSSProperties = {
        margin: "2.5rem auto",
        background: "#fdfdfd",
        position: "relative",
        textAlign: "center",
        color: "#222",
        minHeight: "10rem",
        borderRadius: 2,
        padding: "4rem 2rem",
    };

    return (
        <Container maxWidth="md" sx={boxStyles}>
            <Grid container spacing={2}>
                <InputAmount />
                <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
                <SwitchCurrency />
                <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
            </Grid>
            {firstAmount ? (
                <Box sx={{textAlign: "left", marginTop: "1rem"}} >
                    <Typography>{firstAmount} {fromCurrency} =</Typography>
                    <Typography variant="h5" sx={{marginTop: "5px", fontWeight: "bold"}}>{resultCurrency * firstAmount} {toCurrency}</Typography>
                </Box>
            ) : ""}
        </Container>
    );
};

export default Card;
