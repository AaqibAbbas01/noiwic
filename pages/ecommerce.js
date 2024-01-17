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
          background-image: url('/images/e5.png');
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
            color: purple; /* Text color changed to dark green */
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
            <h1>eCommerce Solutions</h1>
          </div>
        </div>
        <div className="text-background">
          <p>At the forefront of digital retail, our team delivers end-to-end eCommerce solutions. From innovative storefronts to robust backend systems, we ensure a seamless, scalable, and secure online shopping experience.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services">
        <div className="typewriter">
          <div className="text-background">
            <h2>Specialized eCommerce Services</h2>
          </div>
        </div>

        {/* Online Store Development */}
        <div className="service">
          <div className="text-background">
            <h3>Custom Online Store Development</h3>
            <p>Our team crafts bespoke online stores that reflect your brand identity, attract customers, and drive sales. Employing responsive design and intuitive UI/UX, we create shopping experiences that are both engaging and efficient.</p>
          </div>
        </div>

        {/* Shiprocket Integration */}
        <div className="service">
          <div className="text-background">
            <h3>Logistics and Courier Integration</h3>
            <p>We streamline your logistics with Shiprocket integration, offering your customers a variety of shipping options, real-time tracking, and hassle-free returns, enhancing the overall customer experience.</p>
          </div>
        </div>

        {/* Product Photoshoot and Videoshoot */}
        <div className="service">
          <div className="text-background">
            <h3>Professional Product Visualization</h3>
            <p>Our team provides professional product photoshoots and videoshoot services. High-quality visuals are crucial for online success, and we ensure your products are showcased in the best possible light.</p>
          </div>
        </div>

        {/* Payment Gateway Integration */}
        <div className="service">
          <div className="text-background">
            <h3>Secure Payment Gateway Integration</h3>
            <p>Security and convenience are key in online transactions. We integrate the most reliable payment gateways to ensure smooth and secure payment processes for your customers.</p>
          </div>
        </div>

        {/* SEO and Marketing Strategies */}
        <div className="service">
          <div className="text-background">
            <h3>eCommerce SEO and Marketing</h3>
            <p>Boost your online presence with our tailored SEO and digital marketing strategies. We help increase your visibility, drive traffic, and convert leads into loyal customers.</p>
          </div>
        </div>

      </section>

      {/* Additional sections (Mobile Responsiveness, Portfolio, Testimonials, Contact) */}
      {/* Adapt these sections to display your eCommerce-specific projects, client feedback, and contact details. */}

    </div>
  );
};


export default HomePage;