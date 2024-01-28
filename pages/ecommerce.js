import React from 'react';
import Image from 'next/image';

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