import React from 'react';
import Image from 'next/image';
import { Title, TitleSm } from '@/components/common/Title';
import { HiOutlineArrowRight } from 'react-icons/hi';

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
            color: white;
            font-family: 'Arial', sans-serif;
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

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .section {
              font-size: 1.2em; /* Adjust font size for smaller screens */
              padding: 15px; /* Adjust padding for smaller screens */
            }
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
            <h2>Our Digital Marketing Offerings</h2>
          </div>
        </div>

        {/* Service 1 */}
        <div className="service">
          <div className="text-background">
            <h3>Search Engine Optimization (SEO)</h3>
            <p>
              Improve your website's visibility on search engines with our tailored SEO strategies. We optimize content, keywords, and backlinks to rank higher in search results.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service">
          <div className="text-background">
            <h3>Social Media Marketing</h3>
            <p>
              Harness the power of social media to engage your audience. Our experts create compelling content and manage social media campaigns to boost brand awareness.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service">
          <div className="text-background">
            <h3>Pay-Per-Click Advertising (PPC)</h3>
            <p>
              Maximize your ROI with targeted PPC campaigns. We create and manage ads on platforms like Google Ads to drive traffic and conversions.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service">
          <div className="text-background">
            <h3>Email Marketing</h3>
            <p>
              Connect with your audience through personalized email campaigns. We design and send emails that engage and convert subscribers.
            </p>
          </div>
        </div>

        {/* Service 5 */}
        <div className="service">
          <div className="text-background">
            <h3>Content Marketing</h3>
            <p>
              Quality content is king. We create informative blog posts, articles, and videos to establish your authority in your industry.
            </p>
          </div>
        </div>

        {/* Service 6 */}
        <div className="service">
          <div className="text-background">
            <h3>Analytics and Reporting</h3>
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
