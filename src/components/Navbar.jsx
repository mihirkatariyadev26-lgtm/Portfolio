import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Hackathon & Edu', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '0.8rem 0' : '1.3rem 0',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(0, 0, 0, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Clean Text-Only Name (Brand Monogram Removed) */}
        <a 
          href="#hero" 
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column'
          }}
        >
          <div style={{ 
            fontWeight: 800, 
            fontSize: '1.25rem', 
            color: '#ffffff', 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading)'
          }}>
            {personalInfo.name}
          </div>
          <div style={{ 
            fontSize: '0.78rem', 
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem',
            marginTop: '0.1rem' 
          }}>
            <span className="status-dot"></span>
            Full-Stack Developer
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: activeSection === link.id ? '#ffffff' : 'var(--text-muted)',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '0.25rem 0'
              }}
            >
              {link.name}
              {activeSection === link.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#ffffff',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }} />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-nav">
          <button 
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            title="View & Download Resume PDF"
          >
            <FileText size={15} />
            Resume
          </button>

          <a 
            href="#contact" 
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.3rem', fontSize: '0.85rem' }}
          >
            <Send size={15} />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '10px',
            padding: '0.5rem',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.98)',
          backdropFilter: 'blur(25px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.9)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: activeSection === link.id ? '#ffffff' : 'var(--text-muted)',
                padding: '0.5rem 0'
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="btn btn-secondary" 
              style={{ flex: 1, fontSize: '0.85rem', padding: '0.65rem' }}
            >
              <FileText size={16} />
              Resume
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary" 
              style={{ flex: 1, fontSize: '0.85rem', padding: '0.65rem' }}
            >
              <Send size={16} />
              Hire Me
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
