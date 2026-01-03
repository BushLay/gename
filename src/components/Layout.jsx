import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Layout.css';
import logoImg from '../assets/logo.png';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="layout">
            <header className="site-header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="Logo" />
                        <span className="logo-text">Gename.art</span>
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Generate Names</Link>
                        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>

            <footer className="site-footer">
                <div className="container footer-content">
                    <div className="footer-links">
                        <Link to="/about">About</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Gename.art. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
