import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

interface SelectCountryProps {
    value: any;
    setValue: (value: any) => void;
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

    const dataFilter = data.filter(item => "currencies" in item);
    const dataCountries = dataFilter.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`;
    });
    console.log(11, dataFilter);

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </Grid>
    );
};

export default SelectCountry;
