import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
import ProjectCardVideo from "./ProjectCardVideo";
import weather from "../resources/img/weather.png";
import ecomerce from "../resources/img/ecomerce.png";
import lms from "../resources/img/student.png";
import bank from "../resources/img/bank.png";
import coal from "../resources/video/coal.mp4";
import dos from "../resources/video/dos.mp4";
import excel from "../resources/video/excel.mp4";
import dld from "../resources/video/dld.mp4";
import firstYear from "../resources/video/firstYear.mp4";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false, // Animation triggers every time you scroll back to the element
      offset: 50, // Offset from the original trigger point (optional)
    });
    AOS.refresh(); // Refresh AOS to detect changes if any
  }, []);

  return (
    <div className="all-projects p-10" id="projects">
      <div>
        <h3 className="text-center text-4xl  py-20">Projects</h3>
      </div>
      <div className="flex justify-evenly flex-wrap project-card-container">
        <ProjectCard
          title={"Weather Analysis"}
          description={
            "This app analyses past weather data and shows graphs of all data present in a specific interval of time. This uses SQL DBMS."
          }
          img={weather}
          animation="fade-up"
        />
        <ProjectCard
          title={"Ecomerce App"}
          description={
            "This is a MERN project with authentication and encryption with API integration. It has all functionalities required for admin and user."
          }
          img={ecomerce}
          animation="fade-right"
        />
        <ProjectCard
          title={"Bank App"}
          description={
            "This is an HTML, CSS, and JavaScript app with a Flask backend which includes complete CRUD and all banking functionalities."
          }
          img={bank}
          animation="fade-left"
        />
        <ProjectCard
          title={"LMS App"}
          description={
            "This is a .NET app which includes all functionalities of an LMS for university departments. It includes subject registration, attendance, and much more..."
          }
          img={lms}
          animation="fade-up"
        />
        <ProjectCardVideo
          title={"Coal Text Display"}
          description={
            "This is an Assembly Language project which uses Arduino Uno, ESP32, and more components to show content on button click from mobile to screen using WiFi."
          }
          vid={coal}
          animation="fade-up"
        />
        <ProjectCardVideo
          title={"Dos Shell"}
          description={
            "This is Dos Shell (the first OS). It is written in C++ using all types of data structures like arrays, lists, vectors, stacks, and various trees."
          }
          vid={dos}
          animation="fade-right"
        />
        <ProjectCardVideo
          title={"Excel CLI"}
          description={
            "This project uses all concepts and various types of data structures and algorithms in C++."
          }
          vid={excel}
          animation="fade-left"
        />
        <ProjectCardVideo
          title={"Dice Electric"}
          description={
            "This project uses ICs, lights, and more components to make an electric dice, where different lights indicate different numbers."
          }
          vid={dld}
          animation="fade-up"
        />
        <ProjectCardVideo
          title={"Four Projects"}
          description={
            "This video includes four projects written in C++ and C#, including CLI and GUI offline applications."
          }
          vid={firstYear}
          animation="fade-up"
        />
      </div>
    </div>
  );
};

export default Projects;
