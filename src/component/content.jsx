import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: "bi bi-filetype-html",
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "CSS",
      icon: "bi bi-filetype-css",
      level: "Advanced",
      percentage: 85,
    },
    {
      name: "JavaScript",
      icon: "bi bi-filetype-js",
      level: "Intermediate",
      percentage: 75,
    },
    {
      name: "React.js",
      icon: "bi bi-code-slash",
      level: "Intermediate",
      percentage: 70,
    },
    {
      name: "Bootstrap",
      icon: "bi bi-bootstrap",
      level: "Advanced",
      percentage: 85,
    },
    {
      name: "Git & GitHub",
      icon: "bi bi-github",
      level: "Intermediate",
      percentage: 70,
    },
  ];

  return (
    <main className="bg-dark text-light py-5" id="skills">
      <div className="container py-5">

        <section className="home-hero">
          <div className="home-hero-copy">
            <span className="home-eyebrow">WEB DEVELOPER / CREATIVE BUILDER</span>
            <h1>
              Building digital experiences with <span>clarity.</span>
            </h1>
            <p>
              I am Yogesh Khanchi, a React-focused developer turning thoughtful
              ideas into responsive, useful, and memorable web experiences.
            </p>
            <div className="home-hero-actions">
              <Link to="/projects" className="home-primary-action">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/contact" className="home-secondary-action">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="home-hero-mark" aria-hidden="true">
            <span>YK</span>
            <small>AVAILABLE<br />FOR WORK</small>
          </div>
        </section>

        {/* ================= ABOUT ME ================= */}

        <section className="mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="card bg-black text-light border-secondary shadow-lg p-4 p-md-5 about-card">

                <div className="text-center mb-4">
                  <p className="text-primary fw-semibold text-uppercase mb-2">
                    Get To Know Me
                  </p>

                  <h2 className="display-5 fw-bold">
                    About <span className="text-primary">Me</span>
                  </h2>
                </div>

                <p className="text-secondary fs-5 lh-lg">
                  Hello! I'm{" "}
                  <strong className="text-light">
                    Yogesh Khanchi
                  </strong>
                  , a passionate and motivated aspiring{" "}
                  <strong className="text-light">
                    Full-Stack Web Developer
                  </strong>{" "}
                  with a strong interest in creating modern, responsive,
                  and interactive websites and applications.
                </p>

                <p className="text-secondary fs-5 lh-lg">
                  I started my journey in web development by learning the
                  fundamentals of{" "}
                  <strong className="text-light">
                    HTML, CSS, and JavaScript
                  </strong>
                  . As I progressed, I became interested in how different
                  technologies work together to create complete web
                  experiences. I am currently expanding my knowledge of{" "}
                  <strong className="text-light">
                    React.js, Bootstrap, Git, and GitHub
                  </strong>{" "}
                  while continuously improving my JavaScript and
                  problem-solving skills.
                </p>

                <p className="text-secondary fs-5 lh-lg">
                  I enjoy learning by building real-world projects rather
                  than only studying theory. Some of the projects I have
                  worked on include a{" "}
                  <strong className="text-light">
                    portfolio website, Gym Assistant, Amazon-style
                    e-commerce interface, and Rock Paper Scissors game
                  </strong>
                  . These projects have helped me understand responsive
                  design, JavaScript logic, user interfaces, and
                  component-based development.
                </p>

                <p className="text-secondary fs-5 lh-lg">
                  My goal is to become a skilled{" "}
                  <strong className="text-light">
                    Full-Stack Developer
                  </strong>{" "}
                  who can build complete web applications from frontend
                  to backend. I enjoy exploring new technologies and
                  learning how they can be used to create useful and
                  user-friendly digital products.
                </p>

                <p className="text-secondary fs-5 lh-lg mb-0">
                  I believe that consistency and continuous learning are
                  important for growth. Every project gives me an
                  opportunity to learn something new, solve problems,
                  and improve my development skills. I am currently
                  focused on strengthening my fundamentals, building
                  more projects, and preparing myself for professional
                  software development.
                </p>

              </div>
            </div>
          </div>
        </section>


        {/* ================= SKILLS ================= */}

        <section>

          <div className="text-center mb-5">
            <p className="text-primary fw-semibold text-uppercase mb-2">
              My Expertise
            </p>

            <h1 className="display-4 fw-bold">
              Skills &{" "}
              <span className="text-primary">
                Technologies
              </span>
            </h1>

            <p
              className="text-secondary fs-5 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              I build modern, responsive and interactive web experiences
              using modern web technologies.
            </p>
          </div>


          {/* Skill Cards */}

          <div className="row g-4">

            {skills.map((skill, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div className="card bg-black text-light border-secondary h-100 p-3 shadow-lg skill-card">

                  {/* Icon + Name */}

                  <div className="d-flex align-items-center mb-3">

                    <div
                      className="d-flex align-items-center justify-content-center bg-primary rounded-3 me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i className={`${skill.icon} fs-3`}></i>
                    </div>

                    <div>
                      <h4 className="mb-1">
                        {skill.name}
                      </h4>

                      <small className="text-secondary">
                        {skill.level}
                      </small>
                    </div>

                  </div>


                  {/* Percentage */}

                  <div className="d-flex justify-content-between mb-2">

                    <span className="text-secondary">
                      Proficiency
                    </span>

                    <span className="text-primary fw-bold">
                      {skill.percentage}%
                    </span>

                  </div>


                  {/* Progress Bar */}

                  <div
                    className="progress"
                    style={{ height: "8px" }}
                  >

                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>

                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* Bottom Button */}

          <div className="text-center mt-5 pt-4">

            <p className="text-secondary mb-3">
              Always learning. Always building. Always improving.
            </p>

            <Link to="/projects" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-code-slash me-2"></i>
              View My Projects
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Skills;