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
        <img src='/images/cmo.jpg' alt='Nawab Khan' style={imageStyles} />
        <h1 style={multiColorText}>Nawab Khan</h1>
        <h2 style={{ ...textStyle, color: '#ddd', marginBottom: '15px' }}>CMO of Noiwic</h2>
        <p style={textStyle}>
        At the helm of Noiwic, I proudly assume the role of CMO and Founder, bringing to the table over 8 years of immersive experience in our dynamic industry.
        </p>
        <p style={textStyle}>
        With a fervent commitment to innovation, I lead a team that thrives on pushing boundaries and delivering exceptional solutions.
        </p>
        <p style={textStyle}>
        Join us on this thrilling journey as we transform concepts into triumphs at Noiwic.
        </p>
      </div>
    </div>
  );
}

export default Aaqib;
