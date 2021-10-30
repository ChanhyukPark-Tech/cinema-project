import React from 'react';
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, theme }) => {
    return (
        <>
            <Header theme={theme} />
            <main style={{marginTop:'110px',marginBottom:'110px'}}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
