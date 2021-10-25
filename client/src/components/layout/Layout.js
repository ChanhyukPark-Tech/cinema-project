import React from 'react';
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, theme }) => {
    return (
        <>
            <Header theme={theme} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
