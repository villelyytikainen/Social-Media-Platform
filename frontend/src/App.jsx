import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Chatbar from "./components/chat/Chatbar";
import "./App.css";

function App() {
    return (
        <section id="App">
            <Navbar />
            <HomePage />
            <Chatbar />
        </section>
    );
}

export default App;
