import CountryDetails from './CountryDetails';

const Countries = ({countries}) => {

    //name flag population


    const countryNodes = countries.map((country)=>{
        return(
            <option name={country.name} flag={country.flag} population={country.population} key={country.latlng} value = {country.name}> {country.name} </option>
        )
    });

    return(
        <>
            <h1> Select a country for more information </h1>
            <select>  
                <option value=''>--Please Select--</option> 
                {countryNodes}
            </select>
            
        </>
    );
};

export default Countries;