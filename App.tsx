import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./Logo.png";
import {
  faLaptopCode,
  faMobileAlt,
  faDesktop,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

interface Service {
  name: string;
  description: string;
  icon: any;
}

const services: Service[] = [
  {
    name: "Website Development",
    description: "Create stunning websites tailored to your needs.",
    icon: faLaptopCode,
  },
  {
    name: "App Development",
    description: "Build innovative mobile and web applications.",
    icon: faMobileAlt,
  },
  {
    name: "Windows/Mac Software",
    description: "Develop custom software solutions for your desktop.",
    icon: faDesktop,
  },
  {
    name: "Digital Marketing Services",
    description: "Boost your online visibility and reach your target audience.",
    icon: faBullhorn,
  },
];

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
  <li className="service-item">
    <FontAwesomeIcon icon={service.icon} className="service-icon" />
    <strong style={{ color: "rgb(34, 33, 33)" }}>{service.name}</strong>
    <p className="service-description">{service.description}</p>
  </li>
);

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={isScrolled ? "scrolled" : ""}>
        <nav>
          <h1>
            <img src={logo} alt="Techbinderz Logo" />
            Techbinderz
          </h1>
          <div className="hamburger" onClick={toggleNav}>
            <div />
            <div />
            <div />
          </div>
          <ul className={`header-links ${isNavOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services" onClick={() => toggleNav()}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <p>Welcome to XYZ, your one-stop solution for:</p>
      <ul className="service-list" id="services">
        {services.map((service) => (
          <ServiceItem key={service.name} service={service} />
        ))}
      </ul>
      <footer>
        <p>&copy; 2024 Techbinderz. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
