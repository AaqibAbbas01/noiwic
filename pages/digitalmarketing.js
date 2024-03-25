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
            <h1>Digital Marketing Services</h1>
          </div>
        </div>
        <div className="text-background">
          <p>
            At the forefront of digital marketing, our team delivers comprehensive solutions to boost your online presence. From SEO strategies to social media campaigns, we ensure your brand shines in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services">
        <div className="typewriter">
          <div className="text-background">
            <h1>Our Digital Marketing Offerings</h1>
          </div>
        </div>

        {/* Service 1 */}
        <div className="service">
          <div className="text-background">
            <h1>Search Engine Optimization (SEO)</h1>
            <p>
              Improve your website's visibility on search engines with our tailored SEO strategies. We optimize content, keywords, and backlinks to rank higher in search results.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service">
          <div className="text-background">
            <h1>Social Media Marketing</h1>
            <p>
              Harness the power of social media to engage your audience. Our experts create compelling content and manage social media campaigns to boost brand awareness.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service">
          <div className="text-background">
            <h1>Pay-Per-Click Advertising (PPC)</h1>
            <p>
              Maximize your ROI with targeted PPC campaigns. We create and manage ads on platforms like Google Ads to drive traffic and conversions.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service">
          <div className="text-background">
            <h1>Email Marketing</h1>
            <p>
              Connect with your audience through personalized email campaigns. We design and send emails that engage and convert subscribers.
            </p>
          </div>
        </div>

        {/* Service 5 */}
        <div className="service">
          <div className="text-background">
            <h1>Content Marketing</h1>
            <p>
              Quality content is king. We create informative blog posts, articles, and videos to establish your authority in your industry.
            </p>
          </div>
        </div>

        {/* Service 6 */}
        <div className="service">
          <div className="text-background">
            <h1>Analytics and Reporting</h1>
            <p>
              Get insights into your digital marketing performance. We provide detailed reports and analytics to track your online success.
            </p>
          </div>
        </div>

      </section>

      {/* Additional sections (Mobile Responsiveness, Portfolio, Testimonials, Contact) */}
      {/* You can add more sections and details as needed for your Digital Marketing page. */}

    </div>
  );
};

export default HomePage;
