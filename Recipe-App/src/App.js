import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("/data.json", { method: "GET" })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/signup">
                    <SignUp data={data} setData={setData} />
                </Route>
                <Route exact path="/login">
                    <Login data={data} setData={setData} />
                </Route>
                <Route exact path="/">
                    <Home data={data} setData={setData} />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
