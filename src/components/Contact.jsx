import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Sparkles, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#e4e4e7', '#a1a1aa']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={16} />
            Let's Connect
          </div>
          <h2 className="section-title">
            Get in Touch & <span className="text-gradient">Hire Mihir</span>
          </h2>
          <p className="section-subtitle">
            Recruiting for an engineering role or architecting a high-concurrency system? Reach out directly via email, phone, or professional networks.
          </p>
        </div>

        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          
          {/* Main Contact Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem', 
            marginBottom: '2rem' 
          }}>
            
            {/* Email Card with Copy & Direct Compose */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: '1.25rem'
                }}>
                  <Mail size={22} />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Direct Email
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', wordBreak: 'break-all', marginBottom: '1.25rem' }}>
                  {personalInfo.email}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button
                  onClick={copyEmail}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                  title="Copy Email to Clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy Email"}
                </button>

                <a
                  href={`mailto:${personalInfo.email}?subject=Full-Stack%20Developer%20Opportunity`}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                >
                  <ArrowUpRight size={14} />
                  Compose
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: '1.25rem'
                }}>
                  <Phone size={22} />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Mobile / WhatsApp
                </div>

                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
                  {personalInfo.phone}
                </div>
              </div>

              <a
                href={`tel:${personalInfo.phone}`}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
              >
                <ArrowUpRight size={14} />
                Call Directly
              </a>
            </div>

            {/* Location & Relocation Card */}
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: '1.25rem'
                }}>
                  <MapPin size={22} />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Base & Relocation
                </div>

                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                  {personalInfo.location}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Open to Remote, Hybrid, or Relocation
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.55rem 0.85rem', fontSize: '0.82rem' }}
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Recruiter Availability & FAQ Strip */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Clock size={18} />
              Recruiter Quick Reference & Availability
            </h4>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem', 
              fontSize: '0.88rem' 
            }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Notice Period:</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Immediate Availability</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Role Preference:</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Full-Stack / Backend Engineer</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Work Authorization:</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Citizen / India</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Work Mode:</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Remote / Hybrid / On-site</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
