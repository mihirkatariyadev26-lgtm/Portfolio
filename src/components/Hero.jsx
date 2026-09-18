import React from 'react';
import { ArrowRight, FileText, Sparkles, Terminal, Shield, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Hero3D from './Hero3D';
import { personalInfo, metrics } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden'
      }}
    >
      {/* 3D Visual Effects Canvas (Monochrome) */}
      <Hero3D />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Status Badge */}
          <div style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            <div className="badge" style={{ 
              background: 'rgba(255, 255, 255, 0.06)', 
              border: '1px solid rgba(255, 255, 255, 0.18)', 
              padding: '0.45rem 1rem', 
              fontSize: '0.85rem' 
            }}>
              <span className="status-dot"></span>
              <span style={{ color: '#ffffff' }}>Available for Full-Stack Opportunities</span>
              <span style={{ opacity: 0.35 }}>|</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Rajkot, India</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.03em', 
            marginBottom: '1.25rem',
            lineHeight: 1.15
          }}>
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            <br />
            <span style={{ color: '#ffffff', fontSize: '0.85em' }}>
              Full-Stack & Intelligent Systems Engineer
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.7, 
            marginBottom: '2rem',
            maxWidth: '720px'
          }}>
            Dedicated <strong style={{ color: '#ffffff' }}>MERN Stack Developer</strong> building production-grade web applications, low-latency real-time communication architectures, and <strong style={{ color: '#ffffff' }}>RAG-powered AI solutions</strong>.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', alignItems: 'center' }}>
            <a 
              href="#projects" 
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '0.85rem 1.8rem' }}
            >
              Explore Flagship Projects
              <ArrowRight size={18} />
            </a>

            <button 
              onClick={onOpenResume}
              className="btn btn-secondary"
              style={{ fontSize: '1rem', padding: '0.85rem 1.8rem' }}
            >
              <FileText size={18} />
              View Resume
            </button>

            <div style={{ display: 'flex', gap: '0.6rem', marginLeft: '0.5rem' }}>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ padding: '0.85rem', borderRadius: '50%' }}
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={19} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ padding: '0.85rem', borderRadius: '50%' }}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={19} />
              </a>
            </div>
          </div>

          {/* Metrics Strip */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              background: 'rgba(14, 14, 16, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              maxWidth: '780px'
            }}
          >
            {metrics.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <div style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 800, 
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff'
                }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
