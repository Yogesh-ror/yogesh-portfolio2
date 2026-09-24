import { useEffect, useState } from "react";
import "./admin.css";

const tokenKey = "portfolio_admin_token";

function AdminDashboard() {
  const [token, setToken] = useState(() => sessionStorage.getItem(tokenKey));
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const logout = () => {
    sessionStorage.removeItem(tokenKey);
    setToken(null);
    setContacts([]);
  };

  const loadContacts = async (authToken = token) => {
    if (!authToken) return;
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/contacts", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const result = await response.json();

      if (response.status === 401) {
        logout();
        throw new Error("Your session has expired. Please sign in again.");
      }
      if (!response.ok) throw new Error(result.message || "Unable to load requests.");

      setContacts(result.contacts);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, [token]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to sign in.");

      sessionStorage.setItem(tokenKey, result.token);
      setToken(result.token);
      setCredentials({ username: "", password: "" });
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact request?")) return;

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json();
      if (response.status === 401) return logout();
      if (!response.ok) throw new Error(result.message || "Unable to delete request.");

      setContacts((current) => current.filter((contact) => contact._id !== id));
    } catch (error) {
      setStatus(error.message);
    }
  };

  if (!token) {
    return (
      <main className="admin-shell">
        <section className="admin-login-panel">
          <p className="admin-kicker">Private workspace</p>
          <h1>Admin login</h1>
          <p className="admin-muted">Sign in to view messages sent through your portfolio.</p>
          <form onSubmit={handleLogin} className="admin-login-form">
            <label>
              Username
              <input
                value={credentials.username}
                onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
                autoComplete="username"
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={credentials.password}
                onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
                autoComplete="current-password"
                required
              />
            </label>
            <button className="btn admin-primary-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          {status && <p className="admin-error" role="alert">{status}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <div className="admin-dashboard-header">
        <div>
          <p className="admin-kicker">Admin workspace</p>
          <h1>Contact requests</h1>
          <p className="admin-muted">Messages submitted from your portfolio.</p>
        </div>
        <div className="admin-actions">
          <button className="btn admin-secondary-button" onClick={() => loadContacts()} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
          <button className="btn admin-danger-button" onClick={logout}>Log out</button>
        </div>
      </div>

      {status && <p className="admin-error" role="alert">{status}</p>}
      <div className="admin-summary">{contacts.length} {contacts.length === 1 ? "request" : "requests"}</div>

      <section className="admin-requests" aria-live="polite">
        {loading && !contacts.length ? <p className="admin-muted">Loading requests...</p> : null}
        {!loading && !contacts.length ? <p className="admin-muted">No contact requests yet.</p> : null}
        {contacts.map((contact) => (
          <article className="admin-request" key={contact._id}>
            <div className="admin-request-heading">
              <div>
                <h2>{contact.subject}</h2>
                <p className="admin-request-meta">{contact.name} · {contact.email}</p>
              </div>
              <time dateTime={contact.createdAt}>{new Date(contact.createdAt).toLocaleString()}</time>
            </div>
            <p className="admin-request-message">{contact.message}</p>
            <button className="btn admin-delete-button" onClick={() => deleteContact(contact._id)}>Delete</button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AdminDashboard;
