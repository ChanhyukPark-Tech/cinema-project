/*global kakao*/
import React, { useEffect } from 'react'



const Location=({Latitude,Longitude})=>{

    useEffect(()=>{




        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(Latitude, Longitude),
            level: 3
        };

        let map = new kakao.maps.Map(container, options);
        let markerPosition  = new kakao.maps.LatLng(Latitude, Longitude);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [Latitude,Longitude])


    return (
        <div style={{borderRadius:'59px'}}>
            <div id="map" style={{width:"500px", height:"400px"}}></div>
        </div>
    )
}

export default Location;