import React from "react";
import Slider from "react-slick"; // React-Slick for the carousel
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Custom styles
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa"; // PHP added
import { SiCplusplus, SiPostgresql, SiOracle } from "react-icons/si"; // PostgreSQL, OracleSQL
import { Link } from "react-router-dom"; // Using Link for routing

function Home() {
  const languageLogos = [
    { name: "Python", icon: <FaPython size={70} color="#3776AB" /> },
    { name: "C++", icon: <SiCplusplus size={70} color="#00599C" /> },
    { name: "JavaScript", icon: <FaJsSquare size={70} color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 size={70} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={70} color="#1572B6" /> },
    { name: "C#", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/384px-Logo_C_sharp.svg.png?20221121173824" alt="C#" width={70} height={70} /> },
    { name: "PHP", icon: <FaPhp size={70} color="#777BB3" /> },
    { name: "ASP.NET", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Asp.net.svg/1200px-Asp.net.svg.png?20160501070553" alt="ASP.NET" width={70} height={70} /> },
    { name: "VB.NET", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/768px-VB.NET_Logo.svg.png?20210603083010" alt="VB.NET" width={70} height={70} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={70} color="#336791" /> },
    { name: "OracleSQL", icon: <SiOracle size={70} color="#F80000" /> },
    { name: "Microsoft SQL Server", icon: <img src="https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1035px-Microsoft_SQL_Server_Logo.svg.png?20100429075711" alt="SQL Server" width={70} height={70} /> },
    { name: "PowerShell", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell" width={70} height={70} /> },
  ];

  // Log the image paths to verify they are correct
  console.log("C# Image Path: ", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/384px-Logo_C_sharp.svg.png?20221121173824");
  console.log("ASP.NET Image Path: ", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Asp.net.svg/1200px-Asp.net.svg.png?20160501070553");
  console.log("VB.NET Image Path: ", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/768px-VB.NET_Logo.svg.png?20210603083010");
  console.log("Node.js Image Path: ", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/887px-Node.js_logo_2015.svg.png?20150315010906");
  console.log("SQL Server Image Path: ", "https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1035px-Microsoft_SQL_Server_Logo.svg.png?20100429075711");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      {/* About Me Section */}
      <section id="about-me" className="section">
        <h2>About Me</h2>
        <p>
          My name is Nicholas Reilly, and I’m a passionate Software Engineering
          Technology student at Conestoga College, expected to graduate in
          April 2027. I hold a certificate in Technology Foundations and CompTIA
          certifications (A+, Network+, Security+), which reflect my commitment
          to technical excellence. With hands-on experience in roles like being
          an ITS Support Consultant at the Region of Waterloo and Lead
          Technician at Apple, I have honed my skills in IT infrastructure,
          system optimization, and customer satisfaction. I take pride in
          creating user-friendly applications and innovative solutions. I aspire
          to leverage my skills and entrepreneurial spirit to make a meaningful
          impact in the tech industry.
        </p>
      </section>

      {/* Why Hire Me Section */}
      <section id="why-hire-me" className="section">
        <h2>Why Hire Me?</h2>
        <ul>
          <li>
            Proven experience in IT infrastructure, system optimization, and
            software development.
          </li>
          <li>
            A diverse skill set that includes Python, C++, JavaScript, HTML,
            CSS, SQL, Node.js, and more.
          </li>
          <li>
            A strong commitment to solving real-world problems with innovative
            solutions.
          </li>
          <li>
            Certifications in IT and a focus on continuous professional growth.
          </li>
        </ul>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section">
        <h2>Languages</h2>
        <Slider {...sliderSettings}>
          {languageLogos.map((language, index) => (
            <div key={index} className="carousel-item">
              <div className="icon-wrapper">{language.icon}</div>
              <p className="logo-name">{language.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Home;
