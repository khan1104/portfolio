
import "../index.css"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
    return (
        <div className=" bg-white dark:bg-[#2f2f30] flex flex-col">
            <Header />
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home