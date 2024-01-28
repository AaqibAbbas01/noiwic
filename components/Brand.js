import React, { useEffect, useState } from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Brand = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check the window width when the component mounts
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Add an event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className='brand'>
      <div className='container'>
        <div className='heading-title'>
          <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
        </div>
        {isMobileView ? (
          // Render the carousel in mobile view
          <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} />
              </div>
            ))}
          </Carousel>
        ) : (
          // Render a grid in non-mobile view
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Brand;
