import {React,useState,useEffect} from 'react';
const key = '90619d006eea4adca5c191417221906';
const url = 'http://api.weatherapi.com/v1/';

const Home = () => {
    const [location, setLocation] = useState('jammu');
    const [newloc,setNewloc] = useState('');
    const [data,setData] = useState([]);
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
        <div className='Main'>
            Weather Buddy
            <div className='imput'>
                <h3>Enter a city to know its Weather</h3>
                    <input type='text' onChange={e=>setNewloc(e.target.value)}/>
                    <button type='submit' onClick={locationUpdate}>Check</button>
                               
            </div>
            <div className='Data'>
                <h4>Today temp in {location} is : {data.current.temp_c} </h4>
                <h4>Today humidity in {location} is : {data.current.humidity}</h4>
            </div>
            {/* {console.log(data)} */}
        </div>
    );
}

export default Home;