import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: '1rem' }}>
              <img src="/pknb-logo.png" alt="PKNB Consult Logo" />
            </Link>
            <p className="footer__tag">Industrial intelligence. Sustainable performance.</p>
            <p className="footer__about">Independent engineering &amp; energy consultancy. Accra, Ghana — serving industries across Africa.</p>
          </div>
          <div>
            <h5>Practice</h5>
            <ul>
              <li><Link to="/services/industrial-intelligence">Industrial Intelligence</Link></li>
              <li><Link to="/services/energy-accountability">Energy Accountability</Link></li>
              <li><Link to="/services/operational-efficiency">Operational Efficiency</Link></li>
              <li><Link to="/services/mep-engineering">MEP Engineering</Link></li>
              <li><Link to="/services/epc-solutions">EPC Solutions</Link></li>
              <li><Link to="/services/workforce-development">Workforce Development</Link></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:info@pknbconsult.com">info@pknbconsult.com</a></li>
              <li><a href="tel:+233241307209">+233 24 130 7209</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="https://wa.me/233241307209" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} PKNB Consult — All rights reserved</span>
          <span>Accra · Ghana</span>
        </div>
      </div>
    </footer>
  );
}
