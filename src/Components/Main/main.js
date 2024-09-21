import React from "react";
import Welcome from "./welcome";
import Casual from "./casual";
import Pro from "./pro";
import PhotoGallery from "./photogallery";
import Video from "./video";
import Arena from "./arena";
import Tournament from "./tournament";
import Calendar from "./calendar";
import Contact from "./contact";

const Main = () => {
    return (
        <div className="MainSection">
            <Welcome />
            <Casual />
            <Pro />
            <PhotoGallery />
            <Video />
            <Arena />
            <Tournament />
            <Calendar />
            <Contact />
        </div>
    );
};

export default Main;


