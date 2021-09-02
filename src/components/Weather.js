import React, { useEffect, useState } from 'react';
import "./css/weather.css";
import {Table} from './table';

const Weather = ()=>{

const [cityData ,setCityData] = useState([]); 
const [searchValue, setSearchValue] = useState("mumbai")

useEffect( () =>{
    const fetchApi = async() => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=s6GKrcurx7Fw9IVdr5cYviAEL5oYIdQ8&q=${searchValue}`
        const response = await fetch(url);
        const resJson = await response.json()
        setCityData(resJson);
    }
    fetchApi();
},[searchValue] )

    return(
        <>
        <div className="box">
            <div className="inputField">
                <label className="search-label">Search: </label>
                <input
                type="search"
                className="input-data"
                value={searchValue}
                onChange = {(event) => {
                        setSearchValue(event.target.value)
                     } 
                }
                />
            </div>
            <Table cityData={cityData}></Table>
        </div>
        </>
    )
}

export default Weather;