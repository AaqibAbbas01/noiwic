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
        <img src='/images/cofounder.jpg' alt='Muhammad Imad' style={imageStyles} />
        <h1 style={multiColorText}>Nawab Khan</h1>
        <h2 style={{ ...textStyle, color: '#ddd', marginBottom: '15px' }}>Co-Founder & CEO</h2>
        <p style={textStyle}>
        With over 7 years of extensive experience in the dynamic field of Information Technology, I am honored to lead Noiwic as the Co-Founder and CEO. My journey in the IT industry has been marked by a passion for innovation, a commitment to excellence, and a deep understanding of the evolving technological landscape. Throughout my career, I have had the privilege of working on diverse projects, ranging from cutting-edge web and app development to creating seamless E-commerce experiences. This rich experience has equipped me with the insights needed to navigate the complexities of the digital realm.
        </p>
        <p style={textStyle}>
        Noiwic was founded with a vision — a vision to not only provide IT services but also contribute to the community by creating meaningful job opportunities. Our commitment goes beyond delivering solutions; it extends to fostering an environment where talent thrives and individuals find purpose and growth.
        </p>
        <p style={textStyle}>
        As we embark on this journey, I am excited about the prospect of leveraging technology to not only meet our clients' needs but also to make a positive impact on employment in the IT sector. Our team at Noiwic is dedicated to pushing boundaries, fostering innovation, and creating a workplace where talents are nurtured and careers flourish. Thank you for being a part of our story. Together, let's build a future where technology transforms lives and empowers communities.
        </p>
      </div>
    </div>
  );
}

export default Aaqib;
