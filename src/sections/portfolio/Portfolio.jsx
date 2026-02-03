import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";
const Portfolio = () => {
  const portfolio = [
    {
      title: "Luxury Residential Home",
      image: portfolio1,
      date: "May 15, 2023",
      category: "Residential",
      description: `A stunning 5-bedroom luxury home featuring contemporary architecture, floor-to-ceiling windows, and open-concept living spaces. Built with premium materials and high-end finishes to create a modern yet cozy atmosphere.`,
    },
    {
      title: "Corporate Office Building",
      image: portfolio2,
      date: "November 30, 2022",
      category: "Commercial",
      description: `A state-of-the-art office building designed to foster innovation and collaboration. This project includes eco-friendly materials, expansive workspaces, and cutting-edge conference rooms.`,
    },
    {
      title: "Retail Shopping Complex",
      image: portfolio3,
      date: "July 12, 2024",
      category: "Retail",
      description: `A bustling multi-level shopping complex offering retail spaces for international brands. The complex features stylish interiors, escalators, and vibrant common areas, perfect for customer engagement.`,
    },
    {
      title: "Luxury Resort & Spa",
      image: portfolio4,
      date: "February 1, 2023",
      category: "Hospitality",
      description: `A 5-star luxury resort and spa set in a tropical paradise. The project includes infinity pools, private villas, and a wellness center, designed with natural materials to blend seamlessly with the surrounding environment.`,
    },
    {
      title: "High-Rise Residential Complex",
      image: portfolio5,
      date: "September 18, 2023",
      category: "Residential",
      description: `A contemporary high-rise residential building featuring 100+ modern apartments. This urban living space includes a rooftop terrace, fitness center, and private balconies with city views.`,
    },
    {
      title: "Industrial Warehouse Facility",
      image: portfolio6,
      date: "March 5, 2022",
      category: "Industrial",
      description: `A large-scale industrial warehouse designed for efficient logistics and operations. Featuring high ceilings, wide loading docks, and ample storage space, this project was built to optimize business workflows.`,
    },
  ];
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section__header">
          <h3 className="sub__headimg">Crafting Spaces, Building Dreams</h3>
          <p className="description">
            Explore our portfolio to see how we turn visions into high-quality,
            inspiring spaces, from luxury homes to commercial buildings.
          </p>
        </div>
        <div className="portfolio__container">
          {portfolio.map((port, index) => (
            <div className="flex portfolio" key={index}>
              <div className="image__container">
                <img src={port.image} alt="" />
              </div>
              <div className="details">
                <h4 className="title">{port.title}</h4>
                <p className="line__clamp__2 description">{port.description}</p>
              </div>
              <div className="flex date__category"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
