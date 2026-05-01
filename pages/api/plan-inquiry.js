import sql from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, planName, planPrice, planIdeal } = req.body

  if (!name || !email || !planName) {
    return res.status(400).json({ error: 'Name, email, and plan are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const clean = (str) => (typeof str === 'string' ? str.trim().slice(0, 500) : '')

  try {
    await sql`
      INSERT INTO plan_inquiries (name, email, phone, company, plan_name, plan_price, plan_ideal)
      VALUES (
        ${clean(name)},
        ${clean(email)},
        ${clean(phone)},
        ${clean(company)},
        ${clean(planName)},
        ${clean(planPrice)},
        ${clean(planIdeal)}
      )
    `

    return res.status(200).json({ message: 'Inquiry saved successfully' })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save inquiry' })
  }
}
