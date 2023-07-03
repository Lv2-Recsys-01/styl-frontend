import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/reset.css";
import "antd/dist/reset.css";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <GlobalStyle />
        <Layout>
            <App />
        </Layout>
    </>,
);
