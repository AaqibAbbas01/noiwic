import sql from '@/lib/db'
import sessions from '@/lib/sessions'

function verifyToken(token) {
  if (!token) return false
  const session = sessions.get(token)
  if (!session) return false
  if (Date.now() - session.created > 24 * 60 * 60 * 1000) {
    sessions.delete(token)
    return false
  }
  return true
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const authHeader = req.headers.authorization
  const token = authHeader?.replace('Bearer ', '')

  if (!verifyToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const contacts = await sql`
      SELECT id, name, email, budget, timeframe, project_details, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT 200
    `

    const projects = await sql`
      SELECT id, name, email, phone, project_type, budget, timeline, description, created_at
      FROM project_requests
      ORDER BY created_at DESC
      LIMIT 200
    `

    const planInquiries = await sql`
      SELECT id, name, email, phone, company, plan_name, plan_price, plan_ideal, created_at
      FROM plan_inquiries
      ORDER BY created_at DESC
      LIMIT 200
    `

    return res.status(200).json({ contacts, projects, planInquiries })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch data' })
  }
}
