import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
// import useAxios from "../hooks/useAxios";
import Data from '../data/CurrrencyFlags.json'
import { useState } from "react";

interface SelectCountryProps {
    value: string; 
    setValue: (value: string) => void;
    label: string;
}

const SelectCountry = ({ value, setValue, label }: SelectCountryProps) => {
    const [data, setData] = useState<any>(Data);
    const [error, setError] = useState<Error | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    if (loaded) {
        return (
            <Grid>
                <CircularProgress />
            </Grid>
        );
    }

    if (error) {
        return "Something went wrong";
    }

    const filteredCountries = data.filter(item => "currencies" in item); 
    const countryOptions = filteredCountries.map(item => {
        return `${data.flag} ${Object.keys(data.currency.code)[0]} - ${data.name}`;
    });

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                value={value}
                disableClearable
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                options={countryOptions}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </Grid>
    );
};

export default SelectCountry;
