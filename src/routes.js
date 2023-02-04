import React from "react";


// Components
const Home = React.lazy(() => import("./views/home"));



const routes = [
    {
        name: "root",
        path: "/",
        element: <Home />
    }
];

export default routes;
