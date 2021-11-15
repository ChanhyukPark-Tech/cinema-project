import React from 'react';
import Header from "../../components/header/Header";
import {useParams, useRouteMatch} from "react-router-dom";

function SeatSelectPage() {

    const params = useParams();


    return (
        <div>
            <Header/>

        </div>
    );
}

export default SeatSelectPage;