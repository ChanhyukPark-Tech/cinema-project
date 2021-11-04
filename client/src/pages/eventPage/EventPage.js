import React, {useEffect} from 'react';
import axios from "axios";

function EventPage(props) {

    useEffect(()=>{
        axios.get('/api/event').then(data=>{
            console.log(data)
        })
    },[])

    // 특정영화에대한 이벤트만 가져와줘
    const clickHandler = (movieId) => {
        axios.post('/api/event',movieId).then(data=>{
            console.log(data)
        })
    }

    return (
        <div>이벤트페이지입니다.</div>
    );
}

export default EventPage;