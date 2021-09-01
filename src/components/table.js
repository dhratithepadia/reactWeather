import React from 'react';
import './css/table.css';
import {useHistory} from 'react-router-dom'
export const Table = ({ cityData }) => {
    const history = useHistory();
    const headerKeys = ['CITY-NAME', "MIN_TEMP", "MAX_TEMP", "LONGTITUDE", "LATITUDE", "DAYS"];
    const selectedDaysHandler = (e)=> {
        history.push('/days');
    }
    return <div className="table-container">
        {Object.keys(cityData).length && <table>
            <tr>
                {headerKeys.map((key, i) => {
                    return <th key={i}>{key}</th>
                })}
            </tr>
            <React.Fragment>
                <tr >
                    <td>{cityData.name}</td>
                    <td>{cityData.main.temp_min}</td>
                    <td>{cityData.main.temp_max}</td>
                    <td>{cityData.coord.lon}</td>
                    <td>{cityData.coord.lat}</td>
                    <td>
                        <select name="days" id="days"
                        onChange={selectedDaysHandler}>
                            <option value="1day">1 Days</option>
                            <option value="5day" >5 Days</option>
                            <option value="10day">10 Days</option>
                            <option value="15day">15 Days</option>
                        </select>
                    </td>

                </tr>
            </React.Fragment>
        </table>}
    </div>
}