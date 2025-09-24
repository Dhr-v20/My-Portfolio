// Experience.jsx
import React from "react";
import ExperienceAnimation from "../assets/experience.json";
import Lottie from "lottie-react";

export default function Experience() {
  // Work experience data
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "TechInnovate Solutions",
      date: "Jan 2021 - Present",
      icon: "far fa-calendar-alt",
      delay: "100",
      side: "fade-right",
      tasks: [
        "Led frontend development for multiple client projects",
        "Implemented responsive designs and optimized performance",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      role: "Frontend Developer",
      company: "DigitalCreations Agency",
      date: "Mar 2018 - Dec 2020",
      icon: "far fa-calendar-alt",
      delay: "200",
      side: "fade-left",
      tasks: [
        "Developed interactive web applications using React and Vue",
        "Collaborated with designers to implement UI/UX best practices",
        "Improved website performance by 40% through optimization",
      ],
    },
    {
      role: "Web Developer",
      company: "WebSolutions Inc.",
      date: "Jun 2016 - Feb 2018",
      icon: "far fa-calendar-alt",
      delay: "300",
      side: "fade-right",
      tasks: [
        "Built and maintained websites for various clients",
        "Transformed design mockups into responsive web pages",
        "Implemented SEO best practices to improve search rankings",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className="timeline-item"
              data-aos={exp.side}
              data-aos-delay={exp.delay}
              key={index}
            >
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <div className="date">
                  <i className={exp.icon}></i> {exp.date}
                </div>
                <p>{exp.company}</p>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

            {/*  Animation */}
          <div className="Experience-animation" data-aos="fade-left">
            <Lottie
              animationData={ExperienceAnimation}
              loop
              autoplay
              style={{ width: "100%", height: "400px" }}
            />
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>

      </div>
    </section>
  );
}
