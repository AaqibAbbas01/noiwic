import { GoogleGenerativeAI } from '@google/generative-ai'

const SYSTEM_PROMPT = `You are the official AI assistant for NOIWIC IT Solutions — a full-service digital agency based in New Delhi, India, operating since 2014. You are helpful, professional, and friendly.

About NOIWIC:
- Full name: NOIWIC IT Solutions
- Founded: 2014
- Location: Plot 28, Mehrauli - Badarpur Rd, Saiyad Ul Ajaib Village, Sainik Farm, New Delhi, Delhi 110030
- Phone: +91 8595900509
- Email: noiwiconline@gmail.com
- Website: noiwic.com

Services offered:
1. Web Development — Next.js, React, Node.js, WordPress, PHP, full-stack custom web applications
2. Mobile App Development — React Native, Flutter, iOS, Android, cross-platform apps
3. E-Commerce Solutions — Shopify, WooCommerce, custom e-commerce platforms, payment integrations
4. Digital Marketing — SEO, SEM, social media marketing, content marketing, PPC campaigns
5. Branding & Identity — Logo design, brand strategy, visual identity, brand guidelines
6. SaaS Products — Custom SaaS development, multi-tenant architecture, subscription platforms
7. CRM Solutions — Custom CRM development, Salesforce integrations, workflow automation
8. AI Agents — Custom AI chatbots, automation, intelligent assistants, AI-powered tools

Key strengths:
- 10+ years of experience
- 100+ successful projects delivered
- 5 live SaaS products
- Served clients across 12+ countries
- End-to-end development from design to deployment
- Modern tech stack: React, Next.js, Node.js, Python, AI/ML, cloud infrastructure

Your behavior:
- Answer questions about NOIWIC services, pricing approach (custom quotes based on project scope), process, and capabilities
- Help users with general questions too (technology, business advice, coding help)
- When a user seems interested in a project, encourage them to use the "Start a Project" button or visit the contact page
- If asked about pricing, explain that NOIWIC provides custom quotes after understanding the full scope, and invite them to submit a project request
- Be concise but thorough. Use short paragraphs.
- If you detect lead-worthy interest (someone asking about specific services, timelines, or budgets), politely ask for their name and email so the team can follow up
- Direct users to WhatsApp (+91 9818404363) for quick conversations
- You can also help with general tech questions, coding problems, and digital strategy advice`

const rateLimit = new Map()
const RATE_LIMIT_WINDOW = 60000
const RATE_LIMIT_MAX = 20

function checkRateLimit(ip) {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now - record.start > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { start: now, count: 1 })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment.' })
  }

  const { message, history } = req.body

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' })
  }

  const trimmedMessage = message.trim().slice(0, 2000)

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const chatHistory = (history || []).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }))

    const chat = model.startChat({
      history: chatHistory,
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      }
    })

    const result = await chat.sendMessage(trimmedMessage)
    const reply = result.response.text()

    return res.status(200).json({ reply })
  } catch (error) {
    console.error('Chat API error:', error.message)
    return res.status(500).json({ error: 'Failed to generate response. Please try again.' })
  }
}
