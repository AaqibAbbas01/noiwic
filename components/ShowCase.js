import React, { useEffect, useState } from "react";
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ShowCase = () => {
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
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
          </div>
          <div className={`hero-content py ${isMobileView ? 'grid-1' : 'grid-6'}`}>
            {isMobileView ? (
              // Render the carousel in mobile view
              <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
                {showcase.map((item) => (
                  <div key={item.id}>
                    <Card data={item} />
                  </div>
                ))}
              </Carousel>
            ) : (
              // Render individual cards in non-mobile view
              showcase.map((item) => (
                <Card data={item} key={item.id} />
              ))
            )}
          </div>
          <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowCase;
