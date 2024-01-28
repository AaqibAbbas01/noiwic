import React from "react";
import { Title, TitleLogo } from "./common/Title";


const Banner = () => {
  // Define the phone number and message
  const phoneNumber = '9818404363'; // Replace with your phone number
  const message = encodeURIComponent("Can we arrange a brief call or meeting to talk about my project objectives and how your expertise can make a valuable contribution?  Looking forward to the opportunity to connect and explore potential synergies.");

  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
              <button className='button-primary'>Enquire on WhatsApp</button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;
