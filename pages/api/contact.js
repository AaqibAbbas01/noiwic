import sql from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, budget, timeframe, projectDetails } = req.body

  if (!name || !email || !projectDetails) {
    return res.status(400).json({ error: 'Name, email, and project details are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const clean = (str) => typeof str === 'string' ? str.trim().slice(0, 5000) : ''

  try {
    await sql`
      INSERT INTO contact_submissions (name, email, budget, timeframe, project_details)
      VALUES (${clean(name)}, ${clean(email)}, ${clean(budget)}, ${clean(timeframe)}, ${clean(projectDetails)})
    `

    return res.status(200).json({ message: 'Submission saved successfully' })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}
