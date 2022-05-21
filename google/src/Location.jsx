import React, { useEffect, useState } from 'react'
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from "axios"

function Location() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/Data").then((res)=>{
          
        setData(res.data);
        }).catch((error)=>{
            console.log(error)
        })
        
        }, [])

  return (
    <div>
         <Map

mapboxAccessToken="pk.eyJ1Ijoia3VtYXItZyIsImEiOiJjbDNmY3F0YXYwMDlrM2RwMHBrc24wejZjIn0.Acxe8LEPs12YTojMf39ukg"
initialViewState={{
    longitude: 0,
    latitude: 0,
    zoom: 3.5
}}
style={{ width: '80%', height: '50em' }}
mapStyle="mapbox://styles/mapbox/streets-v11"
>
{data.map((e)=>{
    return <div>
        <Marker 
        id="marker-icon"
         latitude={e.lat} 
         longitude={e.long}/>
    </div>
})}

 <GeolocateControl
    position="top-left"
    trackUserLocation /> 

</Map>

    </div>
  )
}

export default Location