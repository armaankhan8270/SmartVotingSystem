import React, { useEffect } from "react";

const Navbar = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const skills = () => {
    window.scrollTo({
      top: 1600,
      behavior: "smooth",
    });
  };
  const Education = () => {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  };
  const Projects = () => {
    window.scrollTo({
      top: 3200,
      behavior: "smooth",
    });
  };
  const contactus = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    console.log(window.scroll);
  }, [window.scroll]);
  return (
    <div className="bg-tarnparent text-2xl flex h-16 shadow-xl ">
      <h1 className="text-2xl ml-44 mr-36  pt-4">👨‍💻 Armaan</h1>
      <div className="flex gap-10 text-[20.5px] pt-4 font-bold w-[753px]">
        <h1>Home</h1>
        <h1 onClick={goToTop}>About</h1>
        <h1 onClick={skills}>Skils</h1>
        <h1 onClick={Education}>Education</h1>
        <h1 onClick={Projects}>Projects</h1>
        <h1>Experience</h1>
        <h1 onClick={contactus}>Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
