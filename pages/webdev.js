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

      <>
     
      {/* Introduction Section */}
      <section className="section introduction">
        <div className="typewriter">
        <div className="text-background">
          <h1>Noiwic Web Development</h1>
        </div>
        </div>
        <div className="text-background">
        <p>We specialize in creating state-of-the-art websites tailored to your business needs. Our expertise spans across static and dynamic websites, WordPress, Shopify, Wix, and custom functionality, all with a focus on mobile responsiveness</p>
        </div>
         </section>

      {/* Services Overview */}
      <section className="section services">
      <div className="typewriter">
      <div className="text-background">
        <h2>Our Services</h2>
        </div>
        </div>

        {/* Static Websites */}
        <div className="service">
        <div className="text-background">
          <h3>Static Websites</h3>
          <p>Our static websites are fast, secure, and easy to maintain, ideal for small businesses and personal portfolios.</p>
        </div>
        </div>

        {/* Dynamic Websites */}
        <div className="service">
        <div className="text-background">
          <h3>Dynamic Websites</h3>
          <p>Offering interactive features, dynamic websites are perfect for sites requiring frequent updates.</p>
        </div>
        </div>

        {/* WordPress Development */}
        <div className="service">
        <div className="text-background">
          <h3>WordPress Development</h3>
          <p>Expertise in creating versatile WordPress sites, from blogs to complex business solutions.</p>
        </div>
        </div>

        {/* Shopify Development */}
        <div className="service">
        <div className="text-background">
          <h3>Shopify Development</h3>
          <p>Specializing in building e-commerce sites using Shopify, offering custom designs and functional online stores.</p>
        </div>
        </div>

        {/* Wix Websites */}
        <div className="service">
        <div className="text-background">
          <h3>Wix Websites</h3>
          <p>Capable of crafting professional and responsive websites using Wix, tailored to your brand and business needs.</p>
        </div>
        </div>

        {/* Functional Websites */}
        <div className="service">
        <div className="text-background">
          <h3>Functional Websites</h3>
          <p>Developing websites with specific functionalities to meet diverse business requirements.</p>
        </div>
        </div>
      </section>

</>


</div>
);
};

export default HomePage;