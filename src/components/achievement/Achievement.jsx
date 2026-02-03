import React, { useEffect, useState } from "react";
import "./Achievement.css";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const Achievement = () => {
  const [project, setProject] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProject(100);
      setSatisfaction(78);
      setExperience(5);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className="achivements">
      <div className="achievement__card">
        <h3 className="title">Completed Over</h3>
        <div className="flex">
          <ReactOdometer value={project} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Projects Across Diverse Sectors </p>
      </div>

      <div className="achievement__card">
        <h3 className="title">Achieved</h3>
        <div className="flex">
          <ReactOdometer value={satisfaction} className="heading" />
          <h1 className="heading">%</h1>
        </div>
        <p>Client Satisfaction Rate </p>
      </div>

      <div className="achievement__card">
        <h3 className="title">Over</h3>
        <div className="flex">
          <ReactOdometer value={experience} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Years of Experience</p>
      </div>
    </div>
  );
};

export default Achievement;
