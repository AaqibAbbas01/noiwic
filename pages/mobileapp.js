import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="container">
      <style jsx>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blinkTextCursor {
          from { border-right-color: transparent; }
          to { border-right-color: black; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          text-align: center;
          background-image: url('/images/mobile.png');
          background-size: cover;
          background-position: center;
          font-family: 'Arial Black', Courier, monospace; /* Monospace font */
        }

        .section {
            margin-bottom: 50px;
            color: Red; /* Text color changed to dark green */
            font-size: 2em; /* Increased text size */
            border: 10px solid lightgreen; /* Added light green border */
            padding: 15px; /* Padding added to give space inside the border */
          }

          .text-background {
            color: black; /* Text color changed to dark green */
            font-size: 1.2em; /* Increased text size */
            background-color: rgba(144, 238, 144, 0.5); /* 50% transparent light green */
            display: inline-block; /* Makes the background only as wide as the text */
            padding: 5px; /* Padding around the text */
            border-radius: 5px; /* Optional: Adds rounded corners to the background */
          }
        .typewriter h1 {
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: .15em solid black; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: .15em; /* Adjust as needed */
          animation: 
            typewriter 3.5s steps(30, end) 1s 1 normal both,
            blinkTextCursor 500ms steps(30, end) infinite;
        }

        .section {
          margin-bottom: 50px;
        }

        .service {
          margin-bottom: 30px;
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
