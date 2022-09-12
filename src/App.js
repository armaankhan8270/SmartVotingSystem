import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
// import Header4 from "./Components/He";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";

import { AnimationOnScroll } from "react-animation-on-scroll";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AnimationOnScroll animateIn="animate__bounceIn">
        <About />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Skill />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Education />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Projects />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Contact />
      </AnimationOnScroll>
    </div>
  );
}

export default App;
