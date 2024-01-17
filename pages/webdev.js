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
          background-image: url('/images/webdev.png');
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

      {/* Mobile Responsiveness */}
      <section className="section mobileResponsive">
      <div className="text-background">
        <h2>Mobile Responsiveness</h2>
        <p>Ensuring optimal viewing experience across all devices, enhancing user engagement and accessibility.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio">
      <div className="text-background">
        <h2>Our Portfolio</h2>
        <p>Explore our previous projects, showcasing our expertise and creativity.</p>
        </div>
        {/* Placeholder for portfolio items */}
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
      <div className="text-background">
        <h2>Client Testimonials</h2>
        <p>Hear from our satisfied clients and their experience working with us.</p>
        </div>
        {/* Placeholder for testimonials */}
        </section>

{/* Contact Information */}
<section className="section contact">
<div className="text-background">
    <h2>Contact Us</h2>
    <p>If you're interested in our services or have any questions, please reach out to us.</p>
    </div>
    {/* Placeholder for contact form or contact details */}
</section>

</>


</div>
);
};

export default HomePage;