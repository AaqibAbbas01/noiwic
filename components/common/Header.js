import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Header = ({ onOpenModal }) => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <TitleLogo title='NOIWIC' className='logomin' />
          </Link>
        </div>
        <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(false)}>
          <Link href='/agency' className={activeLink === "/agency" ? "activeLink" : ""}>
            Agency
          </Link>
          <Link href='/services' className={activeLink === "/services" ? "activeLink" : ""}>
            Services
          </Link>
          <Link href='/showcase' className={activeLink === "/showcase" ? "activeLink" : ""}>
            Showcase
          </Link>
          <Link href='/ai-agents' className={activeLink === "/ai-agents" ? "activeLink" : ""}>
            AI Agents
          </Link>
          <Link href='/contact' className={activeLink === "/contact" ? "activeLink" : ""}>
            Contact
          </Link>
          <span className="nav-cta">
            <button className='button-primary' onClick={onOpenModal}>Start a Project</button>
          </span>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Header
