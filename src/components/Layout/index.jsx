import React from "react";

function Header() {
    return <div>this is header</div>;
}

function Footer() {
    return <div>footer</div>;
}

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
