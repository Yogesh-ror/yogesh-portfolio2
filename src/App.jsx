import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Content from './component/content'
import Footer from './component/footer'
import Resume from './component/resume'
import Certificates from './component/certificate'
import Projects from './component/project'
import Contact from './component/contact'
import InfoPage from './component/InfoPage'
import AdminDashboard from './component/AdminDashboard'


function App() {
  return (
    <>
      <Navbar className="navbar" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content className="main" />
              <Footer className="footer" />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Content className="main" />
              <Footer className="footer" />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<InfoPage type="about" />} />
        <Route path="/faq" element={<InfoPage type="faq" />} />
        <Route path="/terms" element={<InfoPage type="terms" />} />
        <Route path="/privacy" element={<InfoPage type="privacy" />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
