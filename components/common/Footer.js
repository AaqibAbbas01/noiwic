import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const phoneNumber = '8595900509'; // Replace with your phone number
const message = encodeURIComponent("Can we arrange a brief call or meeting to talk about my project objectives and how your expertise can make a valuable contribution?  Looking forward to the opportunity to connect and explore potential synergies.");


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='NOIWIC' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+91 8595900509</h3>
              <br />
              <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
              <button className='button-primary'>Enquire on WhatsApp</button>
            </a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/webdev'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/mobileapp'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/digitalmarketing'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/ecommerce'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.instagram.com/noiwicitsolutions/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/noiwic/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 NOIWIC IT Solutions</span>
            </div>
            <div className='connect'>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
