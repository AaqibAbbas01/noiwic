import sql from '@/lib/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, projectType, budget, timeline, description } = req.body

  if (!name || !email || !projectType || !description) {
    return res.status(400).json({ error: 'Name, email, project type, and description are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const clean = (str) => typeof str === 'string' ? str.trim().slice(0, 5000) : ''

  try {
    await sql`
      INSERT INTO project_requests (name, email, phone, project_type, budget, timeline, description)
      VALUES (${clean(name)}, ${clean(email)}, ${clean(phone)}, ${clean(projectType)}, ${clean(budget)}, ${clean(timeline)}, ${clean(description)})
    `

    return res.status(200).json({ message: 'Project request saved successfully' })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save project request' })
  }
}
