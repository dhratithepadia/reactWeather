import React, {useEffect} from 'react';

const Days = ()=> {
    useEffect(()=> {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=mumbai&cnt=1&appid=4ca03cbcfbbc11fb1b2ac9973b370a97
            `
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            console.log(resJson.main);
            
        }
        fetchApi()
    }, [])
    return <div>
        Routing worked
    </div>
}
export default Days;