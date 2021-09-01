import React, { useEffect, useState } from 'react';
import "./css/weather.css";
import {Table} from './table';

const Weather = ()=>{

const [cityData ,setCityData] = useState([]); 
const [search ,setSearch] = useState("mumbai");
const [searchValue, setSearchValue] = useState("mumbai")

const searchHandler = (e)=> {
    setSearch(searchValue);
}

useEffect( () =>{
    const fetchApi = async() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aa53c6f1adbb85fef86618375087acb6`
        const response = await fetch(url);
        const resJson = await response.json()
        console.log(resJson)
        setCityData(resJson);
    }
    fetchApi();
},[search] )

    return(
        <>
        <div className="box">
            <div className="inputField">
                <input
                type="search"
                className="input-data"
                value={searchValue}
                onChange = {(event) => {
                        setSearchValue(event.target.value)
                     } 
                }
                />
                <button className="button-search" onClick={searchHandler}>Search</button>
            </div>
            <Table cityData={cityData}></Table>
        </div>
        </>
    )
}

export default Weather;