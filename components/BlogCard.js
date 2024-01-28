import React, { useEffect, useState } from "react";
import { Card } from "./common/Card";
import { blogdata } from "@/assets/data/dummydata";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BlogCard = () => {
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
    <>
      <div className={`container blog-card grid-1 py ${isMobileView ? 'mobile-view' : ''}`}>
        {isMobileView ? (
          // Render the carousel in mobile view
          <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
            {blogdata.map((item) => (
              <div key={item.id}>
                <Card data={item} path='blogs' />
              </div>
            ))}
          </Carousel>
        ) : (
          // Render individual cards in non-mobile view
          blogdata.map((item) => (
            <Card data={item} key={item.id} path='blogs' />
          ))
        )}
      </div>
    </>
  );
}

export default BlogCard;
