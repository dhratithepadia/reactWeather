import React, { useEffect, useState } from 'react';
import "./css/style.css"

const Weather = ()=>{

const [city ,setCity] = useState("null"); 
const [search ,setSearch] = useState("mumbai");

useEffect( () =>{
    const fetchApi = async() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aa53c6f1adbb85fef86618375087acb6`
        const response = await fetch(url);
        //console.log(response);
        const resJson = await response.json()
        //console.log(resJson);
        setCity(resJson.main);
    }
    fetchApi()
},[search] )

    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                className="inputField"
                value={search}
                onChange = {(event) => {
                        setSearch(event.target.value)
                     } 
                }
                />
            </div>
        {!city ?(
            <p> no data</p>
        ): (
            <div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view"> {search}</i>
                </h2>
                <h1 className="temp"> 
                  {city.temp}°C
                </h1>
                <h3 className="tempmin_,max">
                min : {city.temp_min}°C | max: {city.temp_max}°C
                </h3>
        </div>
        )}
        
        
        </div>
        </>
    )
}

export default Weather;