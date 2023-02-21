import React, { useEffect, useState } from "react";

const temp = () => {
    const[city,setCity] = useState(null)
    const[search,setSearch] = useState("DELHI")

useEffect(() =>{
    const fetchApi = async () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;

        const response = await fetch(url);
        const resJson  = await response.json();
        setCity(resJson.main)
    }
    fetchApi()
},[search])



  return (
    <div className="box">
      <div className="inputData">
        {/* below is the input field */}
        <input
          type="search"
          className="inputField"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {
          !city?(
            <p className="errorMsg">NO Data found</p>
        ):(
            <div>
            <div className="info">
              <h2 className="location">
                {/* below down yaha per city name show karte hai */}
                <i className="fa-solid fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max">{city.temp}</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
        )
      }

    </div>
  );
};

export default temp;
