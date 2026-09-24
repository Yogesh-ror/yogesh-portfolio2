import React, { useState } from "react";        
import "./certificate.css"; 

const certificates = [
  {
    title: "Python Using AI Workshop",
    issuer: "AI for Techies",
    image: "/certificates/aicertificate.jpg",
    date: "August 9, 2026",
  },
  {
    title: "AI Discoveries - Module 1",
    issuer: "Code.org",
    image: "/certificates/mdoule1.png",
    date: "2026",
  },
  {
    title: "Creating Apps with Devices",
    issuer: "Code.org",
    image: "/certificates/creatingapps.png",
    date: "2026",
  },
  {
    title: "Exploring Generative AI",
    issuer: "Code.org",
    image: "/certificates/exploringai.png",
    date: "2026",
  },
  {
    title: "AI and Machine Learning",
    issuer: "Code.org",
    image: "/certificates/learning.png",
    date: "2026",
  },
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">

        {/* Heading */}
        <div className="certificates-heading text-center">
          <span className="section-tag">MY ACHIEVEMENTS</span>

          <h2>
            Certificates & <span>Achievements</span>
          </h2>

          <p>
            A collection of certificates and professional learning achievements
            that demonstrate my interest in technology, artificial intelligence,
            programming, and continuous learning.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="row g-4">
          {certificates.map((certificate, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={index}
            >
              <div className="certificate-card">

                {/* Image */}
                <div
                  className="certificate-image-container"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />

                  <div className="view-overlay">
                    <span>🔍 View Certificate</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="certificate-content">
                  <span className="certificate-number">
                    Certificate {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p className="issuer">
                    <strong>Issued by:</strong> {certificate.issuer}
                  </p>

                  <p className="certificate-date">
                    📅 {certificate.date}
                  </p>

                  <button
                    className="view-certificate-btn"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    View Certificate →
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="modal-content-certificate"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-certificate"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <div className="modal-title">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer}</p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;