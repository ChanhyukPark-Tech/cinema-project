import React from 'react';
import Header from "../../components/header/Header";
import BranchSelection from "../../components/BranchSelection/BranchSelection";
import {useParams} from "react-router-dom";

function BranchPage(props) {
    const {id} = useParams();
    return (
        <>
            <Header/>
            <BranchSelection/>

        </>
    );
}

export default BranchPage;