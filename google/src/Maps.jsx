import React, { useEffect, useState } from 'react'
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Location from './Location';
import Recent from './Recent';
function Maps() {
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")
    const [Show,setShow] = useState(false)
    let center = {
        lat: lat,
        lng: long
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

    }, [])
const handleClick = () => {
    setShow(true)
}
    return (
        <div>
           
        {Show == false ?    <RestaurantIcon onClick={handleClick} className='Icons-rest'/>: <Recent  />} 
    {  Show == false ?     ( 
    
    <Map

                mapboxAccessToken="pk.eyJ1Ijoia3VtYXItZyIsImEiOiJjbDNmY3F0YXYwMDlrM2RwMHBrc24wejZjIn0.Acxe8LEPs12YTojMf39ukg"
                initialViewState={{
                    longitude: long,
                    latitude: lat,
                    zoom: 3.5
                }}
                style={{ width: '95%', height: '52em' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                
                <Marker
                    longitude={long}
                    latitude={lat}
                    draggable
                />
                <NavigationControl position="bottom-right" />
                <GeolocateControl
                    position="top-left"
                    trackUserLocation />
            
            </Map>)
            : <Location/>}
        </div>
    )
}

export default Maps