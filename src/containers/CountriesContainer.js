import Countries from "../componets/Countries";
import {useState, useEffect} from "react";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all').then((res)=>{
            return res.json().then((data)=>{
                setCountries(data);
            });
        });
    };

    useEffect(()=>{
        getCountries();
    }, [])

    return(
        <>
            <h1>I'm full o countries</h1>
            <Countries countries={countries}/>
        </>
    );
};

export default CountriesContainer;