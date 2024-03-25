import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        // ... (Keep your existing keyframes)

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px; // Increased padding
          text-align: center;
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          color: white;
          font-family: 'Arial', sans-serif;
        }

        h1 {
          font-weight: bold; // Make h1 bold
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Adding text shadow
          margin-bottom: 1rem; // Add some space after the h1
        }

        .section {
          padding: 20px 0; // Add padding to sections
        }

        .text-background {
          padding: 15px; // Increased padding for better readability
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          backdrop-filter: blur(5px);
        }

        .service {
          padding: 10px; // Add padding to service sections
          margin-bottom: 15px; // Add some margin to the bottom of service sections
          transition: transform 0.3s ease-in-out;
        }

        .service:hover {
          transform: scale(1.05);
        }

        // Media queries for mobile responsiveness
        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          h1, .section, .text-background, .service {
            font-size: 90%; // Reduce font size for tablet screens
          }

          .text-background {
            padding: 10px; // Slightly reduce padding for tablet screens
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 10px;
          }

          h1, .section, .text-background, .service {
            font-size: 80%; // Reduce font size for mobile screens
          }

          .text-background {
            padding: 8px; // Slightly reduce padding for mobile screens
          }
        }
      `}</style>

      {/* Introduction Section */}
      <section className="section introduction">
        <div className="typewriter">
          <div className="text-background">
            <h1>Mobile App Development</h1>
          </div>
        </div>
        <div className="text-background">
          <p>We specialize in creating innovative mobile applications tailored to your business needs. Our expertise includes iOS, Android, cross-platform, and hybrid app development, focusing on user experience and functionality.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services">
        <div className="typewriter">
          <div className="text-background">
            <h2>Our Mobile App Services</h2>
          </div>
        </div>

        {/* iOS App Development */}
        <div className="service">
          <div className="text-background">
            <h3>iOS App Development</h3>
            <p>Developing high-quality iOS applications with a focus on design, usability, and performance.</p>
          </div>
        </div>

        {/* Android App Development */}
        <div className="service">
          <div className="text-background">
            <h3>Android App Development</h3>
            <p>Crafting Android apps that offer seamless user experiences, optimized for a wide range of devices.</p>
          </div>
        </div>

        {/* Cross-platform Development */}
        <div className="service">
          <div className="text-background">
            <h3>Cross-platform Development</h3>
            <p>Building cross-platform mobile applications that ensure consistency and functionality across iOS and Android.</p>
          </div>
        </div>

        {/* Hybrid App Development */}
        <div className="service">
          <div className="text-background">
            <h3>Hybrid App Development</h3>
            <p>Creating hybrid apps that combine the best of web and native mobile technologies.</p>
          </div>
        </div>
      </section>

      {/* Additional sections (Mobile Responsiveness, Portfolio, Testimonials, Contact) */}
      {/* These sections can be adapted or expanded based on the specific content related to mobile app development */}

    </div>
  );
};

export default HomePage;
