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
        <h2 style={{ ...textStyle, color: '#ddd', marginBottom: '15px' }}>Founder & CTO of Noiwic</h2>
        <p style={textStyle}>
        With an illustrious career spanning over 7 years in the ever-evolving realm of Information Technology, I am both honored and thrilled to serve as the Co-Founder and CTO of Noiwic. My professional journey has been defined by an unwavering commitment to innovation, a relentless pursuit of excellence, and an innate understanding of the rapidly shifting technological landscape.
        </p>
        <p style={textStyle}>
        Throughout my tenure in the industry, I have had the privilege of spearheading an array of transformative projects. These endeavors have ranged from pioneering web and app development ventures to crafting seamless and immersive E-commerce experiences. This diverse and enriching professional odyssey has armed me with invaluable insights, enabling me to adeptly navigate the intricacies of the digital domain.
        </p>
        <p style={textStyle}>
        The inception of Noiwic was driven by a visionary purpose — not solely to deliver exceptional IT services, but also to catalyze positive change within our community. We are guided by a mission that transcends the mere provision of solutions; it extends to creating an ecosystem where talent flourishes, individuals discover their purpose, and careers ascend to new heights.
        </p>
        <p style={textStyle}>
        As we embark on this remarkable journey, I am exhilarated by the boundless potential of technology. We are poised not only to fulfill the needs of our esteemed clients but also to make a profound impact on IT sector employment. At Noiwic, our team is united by a shared commitment to shatter conventional boundaries, incubate innovation, and cultivate an environment where talent is nurtured, and aspirations are realized.
        </p>
        <p style={textStyle}>
        I extend my heartfelt gratitude for being a cherished part of our narrative. Together, let us architect a future where technology becomes an instrument of transformative change, enriching lives and empowering entire communities. Welcome to Noiwic, where the future is built, one innovation at a time.
        </p>
      </div>
    </div>
  );
}

export default Aaqib;
