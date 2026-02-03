import React from "react";
import "./Footer.css";
import Logo from "../../components/Logo/Logo";

const Footer = () => {
  const footer = [
    {
      title: "Company",
      routes: [
        {
          name: "About Us",
          href: "#",
        },
        {
          name: "Our Team",
          href: "#",
        },
        {
          name: "Careers",
          href: "#",
        },
        {
          name: "Contact Us",
          href: "#",
        },
      ],
    },
    {
      title: "Services",
      routes: [
        {
          name: "Residential Construction",
          href: "#",
        },
        {
          name: "Commercial Projects",
          href: "#",
        },
        {
          name: "Renovation & Remodeling",
          href: "#",
        },
        {
          name: "Project Management",
          href: "#",
        },
      ],
    },
    {
      title: "Resources",
      routes: [
        {
          name: "Blog",
          href: "#",
        },
        {
          name: "Case Studies",
          href: "#",
        },
        {
          name: "FAQs",
          href: "#",
        },
        {
          name: "Privacy Policy",
          href: "#",
        },
      ],
    },
  ];
  return (
    <footer id="footer">
      <div className="overlay__di">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
              Our mission is to build lasting spaces taht inspire and
              uplift,combining quality craftmanship with innovative solutions to
              meet the evolving needs of our clients and communities.
            </p>
          </div>

          {footer.map((foot, index) => (
            <div className="column" key={index}>
              <h4 className="title">{foot.title}</h4>
              {foot.routes.map((route, index) => (
                <a href={route.href} className="route" key={index}>
                  {route.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright &copy; J.B & Grace - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
