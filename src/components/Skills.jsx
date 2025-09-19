// Skills.jsx
import React from "react";

export default function Skills() {
  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      delay: "100",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
       
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      delay: "200",
      skills: [
        { name: "Git", icon: "fab fa-git" },
        { name: "npm", icon: "fab fa-npm" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
      ],
    },
    {
      title: "Soft Skills",
      icon: "fas fa-lightbulb",
      delay: "300",
      skills: [
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Teamwork", icon: "fas fa-users" },
        { name: "Problem Solving", icon: "fas fa-brain" },
        { name: "Time Management", icon: "fas fa-clock" },
        { name: "Creativity", icon: "fas fa-pen-fancy" },
        { name: "Project Management", icon: "fas fa-tasks" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>My Skills</h2>
        </div>

        {/* Skill Categories */}
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={category.delay}
              key={index}
            >
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    <i className={skill.icon}></i> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
