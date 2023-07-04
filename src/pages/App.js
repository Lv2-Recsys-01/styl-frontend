import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Journey from "./Journey";
import EntryPage from "./EntryPage";
import MyPage from "./MyPage";
import DetailPage from "./DetailPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/collections" element={<MyPage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
