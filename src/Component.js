import axios from "axios"
import { useState } from "react"



function Component(){

    const [city,setcity]= useState("")

    const[weather,setweather]= useState("")

    const[Temperature,settemperature]= useState("")
    const[Description,setdescription]= useState("")



    function handlecityname(event){
        setcity(event.target.value)
    }

    function getweather(){

        const weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16569a67665b1c1bafb68c348e70ac51`)

        weatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemperature(success.data.main.temp)
            setdescription(success.data.weather[0].description)
        })
        .catch(function(errmsg){

            console.log(errmsg)
        })
    }


    return(
        <div class="bg-black p-40 m-5 rounded-md">
        <div class="bg-green-500 p-10 rounded-md">
            <h1 class="text-3xl ">Weather Report By Kaushik</h1>
            <p>I can give You a Weather report about Your City</p>
            <input placeholder="Enter Your City Name" class="mt-2 p-1 border-b-black rounded-md" value={city} onChange={handlecityname}></input>
            <br></br>
            <button class="bg-black text-white p-2 mt-3 rounded-md" style={{boxShadow:"whitesmoke"}} onClick={getweather} >Get Report</button>
          
            <div class="mt-3">
            <p class="font-bold">Weather: <span>{weather}</span></p>
            <p class="font-bold" >Temperature: <span>{Temperature}</span></p>
            <p class="font-bold" >Description:  <span>{Description}</span></p>
            </div>
            
            
        </div>
        </div>
    )
}



export default Component
