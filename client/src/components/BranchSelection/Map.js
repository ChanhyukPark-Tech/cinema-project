/*global kakao*/
import React, { useEffect } from 'react'



const Location=({Latitude,Longitude})=>{

    useEffect(()=>{

        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다

            let myMarker = new kakao.maps.Marker({
                position: locPosition
            })
        })


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