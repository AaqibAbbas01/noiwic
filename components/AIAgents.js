import { Title } from "@/components/common/Title"
import { useEffect, useRef, useState, useCallback } from "react"

const features = [
  { icon: "📅", title: "Auto Reservations", desc: "AI books tables, confirms, and sends reminders automatically." },
  { icon: "🌍", title: "Multilingual", desc: "Arabic, English, Hindi for Dubai's diverse clientele." },
  { icon: "🧾", title: "Smart Menu AI", desc: "Ingredients, dietary needs, daily specials answered instantly." },
  { icon: "📊", title: "CRM Integration", desc: "Every interaction logged and synced to POS." },
  { icon: "⏰", title: "24/7 Availability", desc: "Handles late-night queries and bookings without downtime." },
  { icon: "📢", title: "Promo Broadcasts", desc: "Send personalized offers to your guest list." },
]

const chatMessages = [
  { type: "user", text: "Hi! I'd like to book a table for 4 this Saturday at 8pm." },
  { type: "bot", text: "Ahlan wa sahlan! \uD83C\uDF19 Saturday 8PM has 3 open tables. Shall I reserve a table for 4 guests in your name?" },
  { type: "user", text: "Yes please! And do you have any vegan options?" },
  { type: "bot", text: "Reservation confirmed! \uD83C\uDF89 We have 8 vegan dishes including our chef's signature Stuffed Portobello and Mezze Platter." },
]

const phoneNumber = '9818404363'
const waMessage = encodeURIComponent("Hi, I'm interested in a WhatsApp AI Agent for my restaurant.")

const ChatMockup = () => {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const intervalRef = useRef(null)
  const timeoutRefs = useRef([])

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
  }, [])

  const runSequence = useCallback(() => {
    setVisibleCount(0)
    setShowTyping(false)
    clearAllTimeouts()

    chatMessages.forEach((_, i) => {
      const showMsgDelay = (i + 1) * 2000
      const showTypingDelay = showMsgDelay - 800

      if (i > 0) {
        const t1 = setTimeout(() => setShowTyping(true), showTypingDelay)
        timeoutRefs.current.push(t1)
      }

      const t2 = setTimeout(() => {
        setShowTyping(false)
        setVisibleCount(i + 1)
      }, showMsgDelay)
      timeoutRefs.current.push(t2)
    })

    const typingEnd = setTimeout(() => setShowTyping(true), chatMessages.length * 2000 + 500)
    timeoutRefs.current.push(typingEnd)
  }, [clearAllTimeouts])

  useEffect(() => {
    runSequence()
    intervalRef.current = setInterval(runSequence, 12000)
    return () => {
      clearInterval(intervalRef.current)
      clearAllTimeouts()
    }
  }, [runSequence, clearAllTimeouts])

  return (
    <div className="chat-mockup">
      <div className="chat-header">
        <div className="chat-avatar">🤖</div>
        <div className="chat-info">
          <h4>Restaurant AI Agent</h4>
          <span>Online — Powered by NOIWIC</span>
        </div>
      </div>
      <div className="chat-body">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.type} ${i < visibleCount ? 'visible' : ''}`}
          >
            {msg.text}
          </div>
        ))}
        <div className={`typing-indicator ${showTyping ? 'visible' : ''}`}>
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  )
}

const AIAgents = () => {
  return (
    <section className="ai-agents-section section-padding">
      <div className="container">
        <div className="heading-title">
          <span className="eyebrow">AI-Powered Solutions</span>
          <Title title="AI Agents for Business" />
          <p>
            We deploy intelligent AI agents that automate customer interactions,
            bookings, and operations — 24/7, in multiple languages, with zero wait time.
          </p>
        </div>

        <div className="ai-content">
          <div>
            <div className="ai-features-grid">
              {features.map((f, i) => (
                <div className={`ai-feature-card fade-in-up stagger-${i + 1}`} key={i}>
                  <span className="feature-icon">{f.icon}</span>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="ai-cta">
              <a href={`https://wa.me/${phoneNumber}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                <button className="button-primary">Get AI Agent for Your Restaurant</button>
              </a>
            </div>
          </div>

          <ChatMockup />
        </div>
      </div>
    </section>
  )
}

export default AIAgents
