import React, { useState } from "react";
import { Title, TitleSm } from "@/components/common/Title";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeframe: '',
    projectDetails: ''
  });

  const phoneNumber = '9818404363'; // Replace with your WhatsApp number

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Greetings,

    I am reaching out to discuss a potential project collaboration. Below are my details:
    
    - Name: ${formData.name}
    - Email: ${formData.email}
    - Proposed Budget: INR ${formData.budget}
    - Project Timeframe: ${formData.timeframe} days
    - Project Details: ${formData.projectDetails}
    
    I look forward to discussing how we can work together effectively.
    
    Best regards,
    ${formData.name}`;    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className='contact bg-top'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='CONTACT' />
          <Title title="Let's start right now!" className='title-bg' />
        </div>
        <div className='content py flex1'>
          <div className='left w-30'>
            <div className='contact-details'>
              <div className='box'>
                <FiHeadphones size={30} className='icons' />
                <h3>+91-8595900509</h3>
                <span>Call us: Monday - Sunday 9:00 - 19:00</span>
              </div>
              <div className='box'>
                <IoLocationOutline size={30} className='icons' />
                <h3>New Delhi, India</h3>
                <span>E-47, Paryavaran Complex, Sainik Farms, New Delhi - 110030</span>
              </div>
              <div className='box'>
                <FiHelpCircle size={30} className='icons' />
                <h3>noiwiconline@gmail.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
            </div>
            <ul>
              <li className='icon'>
                <AiFillInstagram size={50} />
              </li>
              <li className='icon'>
                <AiFillLinkedin size={50} />
              </li>
            </ul>
          </div>
          <div className='right w-70'>
            <TitleSm title='Make an online enquiry' />
            <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>
            <form onSubmit={handleSubmit}>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Name</span>
                  <input type='text' name='name' value={formData.name} onChange={handleChange} />
                </div>
                <div className='inputs'>
                  <span>Email</span>
                  <input type='text' name='email' value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Your budget</span>
                  <input type='text' name='budget' value={formData.budget} onChange={handleChange} />
                </div>
                <div className='inputs'>
                  <span>Timeframe</span>
                  <input type='text' name='timeframe' value={formData.timeframe} onChange={handleChange} />
                </div>
              </div>
              <div className='inputs'>
                <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                <textarea cols='30' rows='10' name='projectDetails' value={formData.projectDetails} onChange={handleChange}></textarea>
              </div>
              <button className='button-primary' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
