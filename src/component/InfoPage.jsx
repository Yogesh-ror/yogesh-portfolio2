import { Link } from "react-router-dom";
import "./info-pages.css";

const pageContent = {
  about: {
    eyebrow: "ABOUT THE STUDIO",
    title: "About Yogesh",
    intro: "A developer building useful, responsive, and thoughtful digital experiences.",
    sections: [
      {
        title: "A practical approach",
        text: "I am Yogesh Khanchi, a web developer focused on React, JavaScript, and modern frontend development. I learn by building real projects and refining them into clear, accessible experiences.",
      },
      {
        title: "What I work on",
        text: "My work includes portfolio experiences, responsive interfaces, interactive tools, and experiments with AI. I care about readable code, useful interactions, and interfaces that feel natural to use.",
      },
      {
        title: "Let's build something",
        text: "Have an idea or a project that needs a thoughtful frontend? I am open to conversations about freelance work, collaborations, and opportunities.",
      },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "Frequently Asked Questions",
    intro: "A few quick answers about my work and how we can collaborate.",
    faqs: [
      ["What technologies do you use?", "I mainly work with HTML, CSS, JavaScript, React, Bootstrap, and Git. I also explore AI tools and backend technologies as I grow."],
      ["Are you available for freelance work?", "Yes. You can share your project idea, timeline, and requirements through the contact page."],
      ["Can you build a responsive website?", "Yes. Responsive layouts, accessible interactions, and mobile-friendly experiences are part of every project."],
      ["How can I contact you?", "Use the contact form or email yogeshkhanchi985@gmail.com directly."],
    ],
  },
  terms: {
    eyebrow: "SITE GUIDELINES",
    title: "Terms of Use",
    intro: "These simple terms explain how this portfolio website should be used.",
    sections: [
      { title: "Using this website", text: "This website is provided to showcase Yogesh Khanchi's work, skills, and experience. Please use its content for personal evaluation and legitimate professional communication." },
      { title: "Content and ownership", text: "Portfolio text, project descriptions, visual presentation, and original materials belong to Yogesh Khanchi unless otherwise stated. Please ask before reusing original content." },
      { title: "External links", text: "Some project or social links may lead to third-party websites. Those websites have their own terms and privacy policies." },
      { title: "Updates", text: "These terms may be updated as the website or its services change." },
    ],
  },
  privacy: {
    eyebrow: "YOUR PRIVACY",
    title: "Privacy Policy",
    intro: "This page explains what information is shared when you contact me through this website.",
    sections: [
      { title: "Information you provide", text: "If you use the contact form, you may provide your name, email address, subject, and message. This information is used only to understand and respond to your enquiry." },
      { title: "How information is handled", text: "The current contact form opens your email application with a prepared message. The message is sent only when you choose to send it from your email provider." },
      { title: "No unnecessary tracking", text: "This portfolio does not intentionally collect personal information for advertising or sell visitor information to third parties." },
      { title: "Contact", text: "For questions about this policy, email yogeshkhanchi985@gmail.com." },
    ],
  },
};

function InfoPage({ type }) {
  const content = pageContent[type];

  return (
    <main className="info-page">
      <div className="info-page-inner">
        <span className="info-eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p className="info-intro">{content.intro}</p>

        <div className="info-content">
          {content.sections?.map((section) => (
            <section className="info-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}

          {content.faqs?.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <Link className="info-page-link" to="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}

export default InfoPage;
