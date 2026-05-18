import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path) => location.pathname === path ? 'is-active' : '';

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand">
          <img src="/pknb-logo.png" alt="PKNB Consult Logo" />
        </Link>
        <div className={`nav__links ${isOpen ? 'is-open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className={isActive('/services')} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/industries" className={isActive('/industries')} onClick={() => setIsOpen(false)}>Industries</Link>
          <Link to="/projects" className={isActive('/projects')} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/insights" className={isActive('/insights')} onClick={() => setIsOpen(false)}>Insights</Link>
          <Link to="/shop" className={isActive('/shop')} onClick={() => setIsOpen(false)}>Shop</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ marginRight: '1rem' }}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>
          <Link to="/shop" className="nav__cta">Book an Assessment</Link>
        </div>
        <button className="nav__toggle" aria-label="Menu" onClick={toggleMenu}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </nav>
  );
}

