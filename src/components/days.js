import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './css/days.css';

const Days = ()=> {
    const location = useLocation();
    const [daysForecast, setDaysForecast] = useState([])
    const headerKeys = ['Day-Forecast', 'Night-Forecast', 'Min-Temp', 'Max-Temp']
    useEffect(()=> {
        const fetchApi = async() => {
            const url = `http://dataservice.accuweather.com/forecasts/v1/daily/${location.state.days}/${location.state.key}?apikey=s6GKrcurx7Fw9IVdr5cYviAEL5oYIdQ8`
            const response = await fetch(url);
            const resJson = await response.json();
            setDaysForecast(resJson);
            
        }
        fetchApi()
    }, [location.state.days, location.state.key])
    return <div>
        <div className="forecast-header">
        CITY FORECAST REPORT
        </div>
        {daysForecast.DailyForecasts && daysForecast.DailyForecasts.length && <div className="table-container">
            <table>
                <tr>
                {headerKeys.map((key, i) => {
                    return <th key={i}>{key}</th>
                })}
                </tr>
                <React.Fragment>
                {daysForecast.DailyForecasts.map((ele, i)=> {
                    return <tr>
                        <td>{ele.Day.IconPhrase}</td>
                        <td>{ele.Night.IconPhrase}</td>
                        <td>{`${ele.Temperature.Minimum.Value}${ele.Temperature.Minimum.Unit}`}</td>
                        <td>{`${ele.Temperature.Maximum.Value}${ele.Temperature.Maximum.Unit}`}</td>
                    </tr>
                })}
                </React.Fragment>
            </table>
        </div> }
    </div>
}
export default Days;