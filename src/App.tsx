import React from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import About from "./about/about";
import Work from "./work/work";
import Skills from "./skills/skills";
import Footer from "./footer/footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Footer />
        </div>
    );
}
