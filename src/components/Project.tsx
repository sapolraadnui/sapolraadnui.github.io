import React from "react";
import latlong from "../assets/images/latlong.png";
import sepsis from "../assets/images/sepsis.png";
import tsunami from "../assets/images/tsunami.png";
import salted from "../assets/images/salted.png";
import cluster from "../assets/images/cluster.png";
import beauty_ai from "../assets/images/beauty_ai.png";
import world_education from "../assets/images/world_education.png";
import "../assets/styles/Project.scss";

const projects = [
  {
    title: "Weather-Based Prediction of Sidewalk Slip Risk in Winter (Hackathon)",
    link: "https://github.com/mara-sanchez1/salted", 
    image: salted,
    description:
      "Developed an end-to-end ML-based black ice risk prediction system using Python with geospatial and meteorological data, performing feature engineering and risk scoring on Vancouver sidewalk networks, and deploying an interactive web dashboard to communicate insights.",
  },
  {
    title: "LatLongHelper",
    link: "https://github.com/UBC-MDS/latlonghelper",
    image: latlong,
    description:
      "Lightweight utility for working with latitude/longitude data, simplifying coordinate validation, transformation, and geospatial preprocessing workflows.",
  },
  {
    title: "World Education Dashboard",
    link: "https://github.com/UBC-MDS/DSCI-532_2026_15_WorldEducation",
    image: world_education,
    description:
      "Dashboard for global education metrics using Python and Shiny",
  },
  {
    title: "Tsunami Prediction (MDS Datathon)",
    link: "https://github.com/sapolraadnui/MDS_Datathon_Tsunami_Prediction",
    image: tsunami,
    description:
      "Developed an end-to-end predictive pipeline for tsunami-related outcomes, focusing on robust preprocessing, model selection, and performance evaluation.",
  },
  {
    title: "NLP & LLM-Driven Product Recommendation Assistant",
    link: "https://github.com/UBC-MDS/DSCI_575_project_rleeth_sapolr",
    image: beauty_ai,
    description:
      "Context-aware product search assistant that returns relevant Amazon products based on natural language queries.",
  },
  {
    title: "Predicting Sepsis Survival Based on Clinical Records",
    link: "https://github.com/Eligoze75/Sepsis-Survival-Minimal-Clinical-Records",
    image: sepsis,
    description:
      "Built and evaluated machine learning models to predict sepsis survival using minimal clinical records, with emphasis on feature engineering, validation, and interpretability.",
  }
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Technical Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt={`${project.title} thumbnail`}
                width="100%"
              />
            </a>

            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;