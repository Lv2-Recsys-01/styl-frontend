import React, { useEffect, useState } from "react";
import "./layout.css";
import withRouter from "../../hoc/withRouter";

export function Header() {
    return (
        <div className="header">
            <div className="wrapper">this is header</div>
        </div>
    );
}

export function Footer() {
    return <div>footer</div>;
}

function Layout({ children, location }) {
    const [isDetailPage, setIsDetailPage] = useState(() => location.pathname === "/detail");
    useEffect(() => {
        setIsDetailPage(location.pathname === "/detail");
    }, [location]);

    return (
        <div className="global-container">
            {isDetailPage ? (
                <div>{children}</div>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </div>
    );
}

export default withRouter(Layout);
