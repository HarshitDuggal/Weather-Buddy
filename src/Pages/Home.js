import {React,useState,useEffect} from 'react';
import './Home.css';
const key = '90619d006eea4adca5c191417221906';
const url = 'http://api.weatherapi.com/v1/';

const Home = () => {
    const [location, setLocation] = useState('jammu');
    const [newloc,setNewloc] = useState('');
    const [data,setData] = useState();
    // const [loading,setLoading]= useState(false);
    const getUsers = async () => {
        const response = await fetch(`${url})forecast.json?key=${key}&q=${location}&days=1&aqi=no&alerts=no `);
        const Weath = await response.json();
        setData(Weath);     
    }
    useEffect(()=>{
        getUsers();
        // console.log(data);
    },[location]);
    const locationUpdate = () => {
        setLocation(newloc);
    }
    return (
        <div className='main'>
            <div className='Heading'>
            Weather Buddy
            </div>
            <div className='imput'>
                <h3>Enter a city to know its Weather</h3>
                    <input type='text' className='type' onChange={e=>setNewloc(e.target.value)}/>
                    <button type='submit' className='check' onClick={locationUpdate}>Check</button>
                               
            </div>
            <div className='Data'>
                <h4>{data?.location.name}</h4>
                <h4>{data?.current.last_updated} (Last Updated) </h4>
                <h4> {data?.current.temp_c} Degree Celsius</h4>
                <h4>{data?.current.humidity} %</h4>
                <h4>{data?.current.condition.text}</h4>
            </div>
            <div className='Data2'>
                <h4>UV: {data?.current.uv}</h4>
                <h4>WIND (KPH): {data?.current.wind_kph}</h4>
                <h4>Wind Degree: {data?.current.wind_degree}</h4>
            </div>
            <div className='bottom'>
                <h4>Sunrise: {data?.forecast.forecastday[0].astro.sunrise}</h4>
                <h4>Sunset: {data?.forecast.forecastday[0].astro.sunset}</h4>
                <h4>Moonrise: {data?.forecast.forecastday[0].astro.moonrise}</h4>
                <h4>Moonset: {data?.forecast.forecastday[0].astro.moonset}</h4>
            </div>
            <div className='Moon'>
                <h4>Moon Phase: {data?.forecast.forecastday[0].astro.moon_phase}</h4>
            </div>
            {/* <img className = 'Image' src='https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'/> */}
            {console.log(data)}
        </div>
    );
}

export default Home;