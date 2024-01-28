import React, { useState, useEffect } from 'react';

const Aaqib = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    // Set the initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6e8efb, #000000, #808080)',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontFamily: '"Segoe UI", Arial, sans-serif',
  };

  const contentStyles = {
    width: isMobile ? '90%' : '60%',
    maxWidth: '700px',
    borderRadius: '15px',
    padding: isMobile ? '20px' : '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: isMobile ? '20px' : 'auto',
  };

  const imageStyles = {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    objectFit: 'cover',
    border: '5px solid white',
    marginBottom: '30px',
  };

  const textStyle = {
    color: 'white',
    letterSpacing: '0.05em',
    lineHeight: '1.6',
  };

  const multiColorText = {
    ...textStyle,
    background: '-webkit-linear-gradient(45deg, #ff89e9, #85d7ff, #ffdf85, #8aff80)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2em',
    marginBottom: '20px',
  };

  return (
    <div style={pageStyles}>
      <div style={contentStyles}>
        <img src='/images/ceo.jpg' alt='Aaqib Abbas' style={imageStyles} />
        <h1 style={multiColorText}>Aaqib Abbas</h1>
        <h2 style={{ ...textStyle, color: '#ddd', marginBottom: '15px' }}>CEO of Noiwic</h2>
        <p style={textStyle}>
          Aaqib Abbas, the CEO of Noiwic, has been a prominent figure in the IT industry for over 8 years. His journey began with a solid academic foundation from Delhi Technological University, where he honed his skills in technology and leadership.
        </p>
        <p style={textStyle}>
          Under his stewardship, Noiwic has flourished, diversifying into various domains and establishing a reputation for innovation and excellence. Aaqib's leadership is characterized by a forward-thinking mindset, driving the company towards cutting-edge technological advancements.
        </p>
        <p style={textStyle}>
          Beyond his professional pursuits, Aaqib is passionate about mentoring young talent, fostering a culture of continuous learning and development. His contributions extend beyond Noiwic, impacting the broader tech community through various initiatives and collaborations.
        </p>
      </div>
    </div>
  );
}

export default Aaqib;
