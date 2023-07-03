import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/reset.css";
import "antd/dist/reset.css";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <App />
            </Layout>
        </ThemeProvider>
        ,
    </>,
);
