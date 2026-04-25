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
    title: "Weather-Based Prediction of Sidewalk Slip Risk in Winter",
    link: "https://github.com/mara-sanchez1/salted", 
    image: salted,
    description: (
      <>
        Built an end-to-end machine learning system to predict winter sidewalk slip risk in Vancouver using geospatial and meteorological data, with feature engineering, risk scoring, and an interactive dashboard for visualization (
        <a href="https://salted.streamlit.app/" target="_blank" rel="noreferrer">View dashboard</a>
        ).
      </>
    ),
  },
  {
    title: "LatLongHelper",
    link: "https://github.com/UBC-MDS/latlonghelper",
    image: latlong,
    description:
      "Developed a lightweight Python package for validating, transforming, and preprocessing latitude-longitude data, enabling cleaner and more reliable geospatial analysis workflows.",
  },
  {
    title: "World Education Dashboard",
    link: "https://github.com/UBC-MDS/DSCI-532_2026_15_WorldEducation",
    image: world_education,
    description: (
      <>
        Designed an interactive dashboard to explore global education indicators through maps and comparison plots, enabling analysis of access, attainment, and outcomes across countries (
        <a href="https://sapolraadnui-worldeducation.share.connect.posit.cloud/" target="_blank" rel="noreferrer">View dashboard</a>
        ).
      </>
    ),
  },
  {
    title: "Tsunami Prediction",
    link: "https://github.com/sapolraadnui/MDS_Datathon_Tsunami_Prediction",
    image: tsunami,
    description:
      "Built a predictive modeling pipeline for tsunami-related outcomes using structured disaster data, with robust preprocessing, model comparison, and evaluation of key risk factors.",
  },
  {
    title: "ContextCart: AI-Powered Product Search",
    link: "https://github.com/UBC-MDS/DSCI_575_project_rleeth_sapolr",
    image: beauty_ai,
    description: (
      <>
        Created a context-aware product search assistant that uses NLP and LLM-based reasoning to interpret natural language queries and return relevant Amazon beauty products (
        <a href="https://dsci-575-project-rleeth-sapolr.streamlit.app/" target="_blank" rel="noreferrer">Try the app</a>
        ).
      </>
    ),
  },
  {
    title: "Predicting Sepsis Survival from Clinical Records",
    link: "https://github.com/Eligoze75/Sepsis-Survival-Minimal-Clinical-Records",
    image: sepsis,
    description:
      "Developed machine learning models to predict sepsis survival from minimal clinical records, focusing on feature engineering, model validation, and interpretable clinical insights.",
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