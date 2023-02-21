import React, { useEffect, useState } from 'react'
import "./css/Style.css";

const TempApp = () => {

    // main flow kuch aisa hai ki 
    // first user search bar mein type karega aur use kahi per store karna hai
    // second search kare city name ko show karwana hai
    // third city name ke sath sath temp and baki fields ko bhi show karwana hai
    // code kuch aise start hai 
    // first seach kara hua city hume dikhana hai uske liya seach name ka usestate cerate kiya  aur city agr hai to pura ui show hoga warna nahi uske liye ternary operator use karke ek condition bana li 
    // ki city exists karega to ui show hoga warna no city foud msg show karenge
    // second useEffect use karke api ko call karenge jo api se data fetch karega with async await method below hai
    // third api mein search kara hua city name pass kardo jise humne seach name se define kara hai
    // aur ab city name ki upgraded value ko bhi use karna hai use yaha per umne api ka response pass kiya hai name is setCity(response)
    // fourth setSeach ko seach bar mein onChange mein set kiya hai



    // user kya type kar raha hai wo is state per store hoga
    const[city,setCity] = useState(null);
    // user search bar mein kuch bhi likhega to use api ki url mein include karna hota hai  aur city car mein get karna hai
    const[search,setSearch] = useState("delhi");   /// this is used to store thre location in api

    // third 
    useEffect(() =>{

        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
            const response = await fetch(url)
            // now converting data into json format
            const resJson  = await  response.json()
            //  below now ab mujhe jo response mil raha hai use mujhe store karke rakhna hai
            setCity(resJson.main);
        }
        fetchApi();
        // jab jab search bar kuch bhi likha jaye tabhi useeffect fire hoga
    },[search])

  return (
    <>
    <div className="box">
        <div className="inputData">
            {/* second */}
            <input type="search" className='inputField'
            value={search}
            onChange={(event) =>{
                setSearch(event.target.value);
            }}
            />
        </div>
        {/* first */}
        {
            !city ? (
                <p className='errorMsg'>NO Data found</p>
            ):(
                <div>
                <div className="info">
                <h2 className='location'>
                    {/* below down yaha per city name show karte hai */}
                <i className="fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className='temp'>
                    {city.temp}
                </h1>
                <h3 className='tempmin_max'>
                    {city.temp}
                </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>

            )}
            </div>
    </>
  )
}

export default TempApp