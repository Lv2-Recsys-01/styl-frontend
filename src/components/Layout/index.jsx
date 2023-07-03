import React from "react";
import "./layout.css";

function Header() {
    return <div>this is header</div>;
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
