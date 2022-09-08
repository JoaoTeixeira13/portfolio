import "./App.css";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import AboutMe from "./about/about";
import Work from "./work/work";
import Skills from "./skills/skills";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <AboutMe />
            <Work />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
