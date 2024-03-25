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
            <h1>Specialized eCommerce Services</h1>
          </div>
        </div>

        {/* Online Store Development */}
        <div className="service">
          <div className="text-background">
            <h1>Custom Online Store Development</h1>
            <p>Our team crafts bespoke online stores that reflect your brand identity, attract customers, and drive sales. Employing responsive design and intuitive UI/UX, we create shopping experiences that are both engaging and efficient.</p>
          </div>
        </div>

        {/* Shiprocket Integration */}
        <div className="service">
          <div className="text-background">
            <h1>Logistics and Courier Integration</h1>
            <p>We streamline your logistics with Shiprocket integration, offering your customers a variety of shipping options, real-time tracking, and hassle-free returns, enhancing the overall customer experience.</p>
          </div>
        </div>

        {/* Product Photoshoot and Videoshoot */}
        <div className="service">
          <div className="text-background">
            <h1>Professional Product Visualization</h1>
            <p>Our team provides professional product photoshoots and videoshoot services. High-quality visuals are crucial for online success, and we ensure your products are showcased in the best possible light.</p>
          </div>
        </div>

        {/* Payment Gateway Integration */}
        <div className="service">
          <div className="text-background">
            <h1>Secure Payment Gateway Integration</h1>
            <p>Security and convenience are key in online transactions. We integrate the most reliable payment gateways to ensure smooth and secure payment processes for your customers.</p>
          </div>
        </div>

        {/* SEO and Marketing Strategies */}
        <div className="service">
          <div className="text-background">
            <h1>eCommerce SEO and Marketing</h1>
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