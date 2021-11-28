import React from 'react';
import Header from "../../components/header/Header";
import BranchSelection from "../../components/BranchSelection/BranchSelection";
import Footer from "../../components/Footer/Footer";

function BranchPage(props) {
    return (
        <>
            <Header/>
            <BranchSelection/>
            <Footer/>
        </>
    );
}

export default BranchPage;