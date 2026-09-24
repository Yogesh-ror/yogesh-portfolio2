import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";

function Resume() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Design",
    "REST APIs",
    "Node.js",
    "AI Tools",
    "Problem Solving",
  ];

  const projects = [
    {
      title: "Gym Assistant",
      description:
        "A professional gym assistant website designed to help users explore fitness information, workouts, and useful gym-related features.",
      tech: "HTML • CSS • JavaScript • React.js",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing my skills, projects, education, resume, and contact information.",
      tech: "React.js • JavaScript • Bootstrap • CSS",
    },
    {
      title: "Amazon Clone",
      description:
        "A frontend e-commerce project inspired by Amazon, created to practice layouts, navigation, product sections, and responsive web design.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "An interactive browser game created to strengthen JavaScript fundamentals, DOM manipulation, functions, conditions, and event handling.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      title: "Calculator App",
      description:
        "A multifunctional calculator application featuring basic calculations and additional utility-focused calculation features.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <main className="resume-page">

      {/* HERO SECTION */}
      <section className="resume-hero">
        <div className="hero-content">
          <p className="hero-label">MY RESUME</p>

          <h1>
            Yogesh <span>Khanchi</span>
          </h1>

          <h2>Web Developer & React.js Developer</h2>

          <p className="hero-description">
            Passionate developer focused on creating modern, responsive and
            user-friendly websites and applications. I enjoy learning new
            technologies, solving problems and turning ideas into real
            digital experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="resume-btn primary-btn">
              View Projects
            </Link>

            <button
              className="resume-btn secondary-btn"
              onClick={() => window.print()}
            >
              Download / Print Resume
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            YK
          </div>

          <h3>Yogesh Khanchi</h3>
          <p>Web Developer</p>

          <div className="quick-info">
            <div>
              <strong>Location</strong>
              <span>Haryana, India</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>yogeshkhanchi985@gmail.com</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="resume-section about-section">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-card">
          <p>
            I am a passionate and motivated web developer interested in
            building modern digital experiences. I have been developing my
            skills in HTML, CSS, JavaScript and React.js while working on
            practical projects that improve my understanding of frontend
            development.
          </p>

          <p>
            I enjoy creating clean interfaces, responsive layouts and
            interactive applications. Along with frontend development, I am
            exploring backend technologies, APIs and modern AI tools to
            understand how complete full-stack applications are built.
          </p>

          <p>
            My goal is to continuously improve my development skills, work on
            real-world projects and eventually become a professional
            full-stack developer capable of building complete web
            applications.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="resume-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">2025</span>

              <h3>Senior Secondary Education</h3>

              <h4>Aryan Public School</h4>

              <p>
                Completed Class 12th with a non-medical background and
                developed an interest in mathematics, technology and computer
                science.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">Current</span>

              <h3>Web Development Learning</h3>

              <h4>Self-Learning & Practical Projects</h4>

              <p>
                Currently developing practical skills in JavaScript,
                React.js, frontend development, APIs and full-stack web
                development.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="resume-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-number">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="resume-section" id="projects">
        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-icon">
                  ↗
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="resume-section">
        <div className="section-heading">
          <span>05</span>
          <h2>Experience & Activities</h2>
        </div>

        <div className="experience-card">

          <div className="experience-icon">
            &lt;/&gt;
          </div>

          <div>
            <span className="experience-label">
              DEVELOPMENT EXPERIENCE
            </span>

            <h3>Frontend Development & Personal Projects</h3>

            <p>
              Hands-on experience developing websites and interactive
              applications using HTML, CSS, JavaScript and React.js. Built
              multiple projects to practice responsive design, JavaScript
              logic, component-based development and user interfaces.
            </p>

            <div className="experience-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Frontend</span>
              <span>Responsive Design</span>
            </div>
          </div>

        </div>
      </section>

      {/* LANGUAGES */}
      <section className="resume-section">
        <div className="section-heading">
          <span>06</span>
          <h2>Languages</h2>
        </div>

        <div className="languages-grid">
          <div className="language-card">
            <div>
              <h3>English</h3>
              <p>Communication & Learning</p>
            </div>

            <span>●●●○○</span>
          </div>

          <div className="language-card">
            <div>
              <h3>Hindi</h3>
              <p>Native / Fluent</p>
            </div>

            <span>●●●●●</span>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="resume-section">
        <div className="section-heading">
          <span>07</span>
          <h2>Interests</h2>
        </div>

        <div className="interest-list">
          <span>Web Development</span>
          <span>Artificial Intelligence</span>
          <span>Technology</span>
          <span>UI Design</span>
          <span>Problem Solving</span>
          <span>Learning New Technologies</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="resume-contact">
        <p>LET'S BUILD SOMETHING</p>

        <h2>
          Have a project <br />
          <span>in mind?</span>
        </h2>

        <Link to="/contact" className="contact-button">
          Contact Me →
        </Link>

        <div className="contact-details">
          <span>yogeshkhanchi985@gmail.com</span>
          <span>Haryana, India</span>
        </div>
      </section>

    </main>
  );
}

export default Resume;
