import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";
import { FaHandsHelping, FaTools } from "react-icons/fa";
import { FaLightbulb, FaRegClock } from "react-icons/fa6";

const About = () => {
  const keypoints = [
    {
      icon: <FaTools />,
      title: "Expert Craftsmanship",
    },
    {
      icon: <FaRegClock />,
      title: "On-Time, Within Budget",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
    },
    {
      icon: <FaHandsHelping />,
      title: "Client-Centered Approach",
    },
  ];
  return (
    <section id="about">
      <div className="overlay__div">
        <div className="container">
          <div className="about__image">
            <img src={about} alt="" />
          </div>
          <div className="section__header">
            <h3 className="title">About Us</h3>
            <h1 className="sub__heading">
              Building Your Vision, Crafting Your Future
            </h1>
            <p className="description">
              At <b>J.B & Grace,</b> we turn your ideas into reality with expert
              craftsmanship and innovative solutions. From concept to
              completion, we're dedicated to creating spaces that inspire and
              stand the test of time. Let's build a future you can be proud of
            </p>
            <div className="keypoints__container">
              {keypoints.map((keypoint, index) => (
                <div className="flex keypoint" key={index}>
                  <div className="flex__center primary icon">
                    {keypoint.icon}
                  </div>
                  <h4 className="title">{keypoint.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
