import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Journey from "./Journey";
import EntryPage from "./EntryPage";
import MyPage from "./MyPage";

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
    {
        path: "/",
        element: <EntryPage />,
    },
    {
        path: "/journey",
        element: <Journey />,
    },
    {
        path: "/collections",
        element: <MyPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;