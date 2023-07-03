import React from "react";
import "./layout.css";

function Header() {
    return (
        <div className="header">
            <div className="wrapper">this is header</div>
        </div>
    );
}

function Footer() {
    return <div>footer</div>;
}

function Layout({ children }) {
    return (
        <div className="global-container">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
