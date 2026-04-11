import crypto from 'crypto'
import sessions from '@/lib/sessions'

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(String(a))
  const bufB = Buffer.from(String(b))
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' })
    }

    const validUser = timingSafeEqual(username, process.env.ADMIN_USERNAME)
    const validPass = timingSafeEqual(password, process.env.ADMIN_PASSWORD)

    if (!validUser || !validPass) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = crypto.randomBytes(32).toString('hex')
    sessions.set(token, { created: Date.now() })

    for (const [key, val] of sessions) {
      if (Date.now() - val.created > 24 * 60 * 60 * 1000) {
        sessions.delete(key)
      }
    }

    return res.status(200).json({ token })
  }

  if (req.method === 'GET') {
    const authHeader = req.headers.authorization
    const token = authHeader?.replace('Bearer ', '')
    const session = sessions.get(token)

    if (!session || Date.now() - session.created > 24 * 60 * 60 * 1000) {
      if (session) sessions.delete(token)
      return res.status(401).json({ valid: false })
    }

    return res.status(200).json({ valid: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
