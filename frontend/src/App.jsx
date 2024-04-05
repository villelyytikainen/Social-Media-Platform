import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Chatbar from "./components/chat/Chatbar";
import "./App.css";

import Home from "./components/home/HomePage";


function App() {
    return (
        <section id='App'>
            <Navbar />
            <Home />
            <Chatbar />
        </section>
    );
}

export default App;
