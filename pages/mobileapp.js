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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          text-align: center;
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          color: white; /* Changed text color to white for better contrast */
          font-family: 'Arial', sans-serif; /* Updated font family */
        }

        .section {
          margin-bottom: 50px;
          font-size: 1.5em; /* Adjusted text size */
          padding: 20px; /* Adjusted padding */
        }

        .text-background {
          font-size: 1em; 
          background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
          display: inline-block;
          padding: 10px;
          border-radius: 10px; /* Rounded corners */
          backdrop-filter: blur(5px); /* Added blur effect */
        }

        .typewriter h1, h2, h3 {
          overflow: hidden; 
          white-space: nowrap; 
          margin: 0 auto; 
          letter-spacing: .15em;
          animation: typewriter 3.5s steps(30, end) 1s 1 normal both,
          blinkTextCursor 500ms steps(30, end) infinite;
        }

        .service {
          margin-bottom: 30px;
          transition: transform 0.3s ease-in-out; /* Added smooth transition for hover */
        }

        .service:hover {
          transform: scale(1.05); /* Slightly enlarges the service block on hover */
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
