import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [checking, setChecking] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)

  const [activeTab, setActiveTab] = useState('contacts')
  const [contacts, setContacts] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataError, setDataError] = useState('')
  const [expandedRow, setExpandedRow] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem('admin_token')
    if (!token) {
      setChecking(false)
      return
    }
    fetch('/api/admin/login', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setAuthenticated(true)
        else sessionStorage.removeItem('admin_token')
      })
      .catch(() => sessionStorage.removeItem('admin_token'))
      .finally(() => setChecking(false))
  }, [])

  const fetchData = useCallback(async () => {
    const token = sessionStorage.getItem('admin_token')
    if (!token) return
    setLoading(true)
    setDataError('')
    try {
      const res = await fetch('/api/admin/data', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.status === 401) {
        sessionStorage.removeItem('admin_token')
        setAuthenticated(false)
        return
      }
      const data = await res.json()
      setContacts(data.contacts || [])
      setProjects(data.projects || [])
    } catch {
      setDataError('Failed to load data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) fetchData()
  }, [authenticated, fetchData])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoggingIn(true)
    setLoginError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()

      if (!res.ok) {
        setLoginError(data.error || 'Login failed')
        setLoggingIn(false)
        return
      }

      sessionStorage.setItem('admin_token', data.token)
      setAuthenticated(true)
      setPassword('')
    } catch {
      setLoginError('Connection error')
    } finally {
      setLoggingIn(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    setAuthenticated(false)
    setContacts([])
    setProjects([])
  }

  const formatDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })
  }

  if (checking) {
    return (
      <>
        <Head><title>Admin — NOIWIC</title></Head>
        <div className="admin-loading">
          <div className="admin-spinner" />
        </div>
      </>
    )
  }

  if (!authenticated) {
    return (
      <>
        <Head><title>Admin Login — NOIWIC</title></Head>
        <div className="admin-login-page">
          <div className="admin-login-card">
            <div className="bracket-tl" />
            <div className="bracket-br" />
            <div className="admin-login-logo">N</div>
            <h1>Admin Panel</h1>
            <p>Sign in to access the dashboard</p>
            <form onSubmit={handleLogin}>
              <div className="admin-field">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  placeholder="Enter username"
                />
              </div>
              <div className="admin-field">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter password"
                />
              </div>
              {loginError && <p className="admin-error">{loginError}</p>}
              <button className="button-primary" type="submit" disabled={loggingIn} style={{ width: '100%' }}>
                {loggingIn ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }

  const currentData = activeTab === 'contacts' ? contacts : projects

  return (
    <>
      <Head><title>Admin Dashboard — NOIWIC</title></Head>
      <div className="admin-dashboard">
        <div className="admin-header">
          <div className="admin-header-left">
            <h1>Dashboard</h1>
            <span className="admin-badge">NOIWIC Admin</span>
          </div>
          <div className="admin-header-right">
            <button className="admin-refresh" onClick={fetchData} disabled={loading} title="Refresh">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
            </button>
            <button className="admin-logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="admin-stats">
          <div className="admin-stat-card">
            <span className="admin-stat-number">{contacts.length}</span>
            <span className="admin-stat-label">Contact Queries</span>
          </div>
          <div className="admin-stat-card">
            <span className="admin-stat-number">{projects.length}</span>
            <span className="admin-stat-label">Project Requests</span>
          </div>
          <div className="admin-stat-card">
            <span className="admin-stat-number">{contacts.length + projects.length}</span>
            <span className="admin-stat-label">Total Leads</span>
          </div>
        </div>

        <div className="admin-tabs">
          <button className={activeTab === 'contacts' ? 'active' : ''} onClick={() => { setActiveTab('contacts'); setExpandedRow(null) }}>
            Contact Submissions ({contacts.length})
          </button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => { setActiveTab('projects'); setExpandedRow(null) }}>
            Project Requests ({projects.length})
          </button>
        </div>

        {dataError && <p className="admin-error" style={{ margin: '16px 0' }}>{dataError}</p>}

        {loading ? (
          <div className="admin-table-loading">Loading data...</div>
        ) : currentData.length === 0 ? (
          <div className="admin-empty">No {activeTab === 'contacts' ? 'contact submissions' : 'project requests'} yet.</div>
        ) : (
          <div className="admin-table-wrap">
            {activeTab === 'contacts' ? (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Budget</th>
                    <th>Timeframe</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, i) => (
                    <>
                      <tr key={c.id} className={expandedRow === c.id ? 'expanded' : ''} onClick={() => setExpandedRow(expandedRow === c.id ? null : c.id)}>
                        <td>{i + 1}</td>
                        <td>{c.name}</td>
                        <td><a href={`mailto:${c.email}`}>{c.email}</a></td>
                        <td>{c.budget || '—'}</td>
                        <td>{c.timeframe ? `${c.timeframe} days` : '—'}</td>
                        <td>{formatDate(c.created_at)}</td>
                      </tr>
                      {expandedRow === c.id && (
                        <tr key={`${c.id}-detail`} className="admin-detail-row">
                          <td colSpan="6">
                            <div className="admin-detail-content">
                              <strong>Project Details:</strong>
                              <p>{c.project_details}</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Type</th>
                    <th>Budget</th>
                    <th>Timeline</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <>
                      <tr key={p.id} className={expandedRow === p.id ? 'expanded' : ''} onClick={() => setExpandedRow(expandedRow === p.id ? null : p.id)}>
                        <td>{i + 1}</td>
                        <td>{p.name}</td>
                        <td><a href={`mailto:${p.email}`}>{p.email}</a></td>
                        <td>{p.phone || '—'}</td>
                        <td><span className="admin-type-badge">{p.project_type}</span></td>
                        <td>{p.budget || '—'}</td>
                        <td>{p.timeline || '—'}</td>
                        <td>{formatDate(p.created_at)}</td>
                      </tr>
                      {expandedRow === p.id && (
                        <tr key={`${p.id}-detail`} className="admin-detail-row">
                          <td colSpan="8">
                            <div className="admin-detail-content">
                              <strong>Description:</strong>
                              <p>{p.description}</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default AdminPage
