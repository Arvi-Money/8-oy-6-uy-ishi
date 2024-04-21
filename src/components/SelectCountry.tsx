import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

interface SelectCountryProps {
    value: string; 
    setValue: (value: string) => void;
    label: string;
}

const SelectCountry = ({ value, setValue, label }: SelectCountryProps) => {
    const [data, loaded, error] = useAxios<any[]>("https://restcountries.com/v3.1/all");

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

    const filteredCountries = data.filter(item => "currencies" in item); // O'zgaruvchilarni nomlash
    const countryOptions = filteredCountries.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`;
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
