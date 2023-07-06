import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./togglerouter.css";

function ToggleRouter() {
    const navigate = useNavigate();
    const location = useLocation();

    const onRouteBtnClick = (route) => {
        navigate(`/${route}`);
    };

    const isActiveRoute = (route) => {
        return location.pathname === `/${route}` || (location.pathname === "/" && route === "Journey");
    };

    return (
        <div className="wrapper">
            <button
                className={`route-btn route-btn-journey ${isActiveRoute("Journey") ? "active" : ""}`}
                onClick={() => onRouteBtnClick("Journey")}
            >
                JOURNEY
            </button>
            <button
                className={`route-btn route-btn-collection ${isActiveRoute("collections") ? "active" : ""}`}
                onClick={() => onRouteBtnClick("collections")}
            >
                COLLECTIONS
            </button>
        </div>
    );
}

export default ToggleRouter;
