import Footer from "./Footer"
import Header from "./Header"
import ParticleCanvas from "../ParticleCanvas"
import ProjectModal from "../ProjectModal"
import ChatBot from "../ChatBot"
import ModalContext from "@/lib/ModalContext"
import { useEffect, useState, useCallback } from "react"

const Layout = (props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 768) return

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    const dot = document.createElement('div')
    dot.className = 'custom-cursor-dot'
    document.body.appendChild(cursor)
    document.body.appendChild(dot)

    let mx = 0, my = 0, cx = 0, cy = 0
    const onMove = (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
    document.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      cx += (mx - cx) * 0.15
      cy += (my - cy) * 0.15
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      cursor.remove()
      dot.remove()
    }
  }, [])

  return (
    <ModalContext.Provider value={openModal}>
      <ParticleCanvas />
      <div className="scanline-overlay" />
      <Header onOpenModal={openModal} />
      <main style={{ position: 'relative', zIndex: 1 }}>{props.children}</main>
      <Footer />
      <ProjectModal isOpen={modalOpen} onClose={closeModal} />
      <ChatBot />
    </ModalContext.Provider>
  )
}

export default Layout
