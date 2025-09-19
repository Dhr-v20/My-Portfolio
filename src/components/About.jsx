// About.jsx
import React from "react";

export default function About() {
  // Skill data (easy to update)
  const skills = [
    { name: "HTML/CSS", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "UI Design", level: "80%" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text" data-aos="fade-right">
            <h3>Creating Digital Experiences That Matter</h3>
            <p>
              Hello! I'm Alex, a passionate frontend developer with 5 years of
              experience building responsive and performant web applications. I
              specialize in turning complex problems into simple, beautiful and
              intuitive designs.
            </p>
            <p>
              My journey in web development started when I built my first
              website for a local business. Since then, I've worked with various
              startups and companies to create digital products that not only
              look great but also provide real value to users.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              through tech blogs and workshops.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills" data-aos="fade-left">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
