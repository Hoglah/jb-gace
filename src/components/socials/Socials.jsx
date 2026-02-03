import React from "react";
import "./Socials.css";
import { socialHandles } from "../../data";

const Socials = () => {
  return (
    <div className="flex socials">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          className="flex__center icon"
          target="_blank"
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
