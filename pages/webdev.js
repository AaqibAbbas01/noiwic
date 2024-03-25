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
        
          h1 {
            font-size: 130%; // Increase font size for mobile screens
            line-height: 1.2; // Adjust line height for better readability
            color: #ffffff; // Example color that stands out
          }
        
          .section, .text-background, .service {
            font-size: 100%; // Adjusted font size for better readability
          }
        
          .text-background {
            padding: 10px;
          }
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
        <h1>Our Services</h1>
        </div>
        </div>

        {/* Static Websites */}
        <div className="service">
        <div className="text-background">
          <h1>Static Websites</h1>
          <p>Our static websites are fast, secure, and easy to maintain, ideal for small businesses and personal portfolios.</p>
        </div>
        </div>

        {/* Dynamic Websites */}
        <div className="service">
        <div className="text-background">
          <h1>Dynamic Websites</h1>
          <p>Offering interactive features, dynamic websites are perfect for sites requiring frequent updates.</p>
        </div>
        </div>

        {/* WordPress Development */}
        <div className="service">
        <div className="text-background">
          <h1>WordPress Development</h1>
          <p>Expertise in creating versatile WordPress sites, from blogs to complex business solutions.</p>
        </div>
        </div>

        {/* Shopify Development */}
        <div className="service">
        <div className="text-background">
          <h1>Shopify Development</h1>
          <p>Specializing in building e-commerce sites using Shopify, offering custom designs and functional online stores.</p>
        </div>
        </div>

        {/* Wix Websites */}
        <div className="service">
        <div className="text-background">
          <h1>Wix Websites</h1>
          <p>Capable of crafting professional and responsive websites using Wix, tailored to your brand and business needs.</p>
        </div>
        </div>

        {/* Functional Websites */}
        <div className="service">
        <div className="text-background">
          <h1>Functional Websites</h1>
          <p>Developing websites with specific functionalities to meet diverse business requirements.</p>
        </div>
        </div>
      </section>

</>


</div>
);
};

export default HomePage;