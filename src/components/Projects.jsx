import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Terminal, Shield, Cpu, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { RagSimulator, VvpSimulator } from './ProjectSimulator';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedDemo, setExpandedDemo] = useState({
    'code-query': true,
    'vvp-activity-management': true
  });

  const toggleDemo = (projectId) => {
    setExpandedDemo(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return p.featured;
    if (activeFilter === 'ai') return p.category.includes('AI');
    if (activeFilter === 'realtime') return p.category.includes('Real-Time') || p.category.includes('Systems');
    return true;
  });

  return (
    <section id="projects" className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 12, 0.6) 100%)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={16} />
            Portfolio Highlights
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore live production MERN applications, grounded RAG systems, and distributed real-time platforms with verified live links.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'featured', label: '⭐ Flagship Systems' },
              { id: 'ai', label: '🤖 AI & RAG' },
              { id: 'realtime', label: '⚡ Real-Time & Cloud' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  background: activeFilter === f.id ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                  border: activeFilter === f.id ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: activeFilter === f.id ? '#000000' : 'var(--text-secondary)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredProjects.map((project) => {
            const isFlagship = project.featured;

            return (
              <div 
                key={project.id} 
                className="glass-card"
                style={{
                  padding: isFlagship ? '2.5rem' : '2rem',
                  border: isFlagship ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid var(--card-border)',
                  boxShadow: isFlagship ? '0 15px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.06)' : 'var(--shadow-sm)',
                  position: 'relative'
                }}
              >
                {/* Highlight Top Accent */}
                {isFlagship && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '5%',
                    right: '5%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
                    opacity: 0.8
                  }} />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                      <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#ffffff' }}>
                        {project.highlightBadge}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {project.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: isFlagship ? '1.85rem' : '1.45rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem' }}>
                      {project.tagline}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.55rem 0.95rem', fontSize: '0.82rem' }}
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={15} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem', fontWeight: 700 }}
                        title="Open Live Deployed Project"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        padding: '0.3rem 0.65rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#f4f4f5'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>

                {/* Bullet Points */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: isFlagship ? '1.5rem' : '0.5rem'
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Key Architectural Contributions:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        <CheckCircle2 size={17} style={{ color: '#ffffff', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Live URL Link Display */}
                {project.liveUrl && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.65rem 1rem',
                    marginBottom: '1rem',
                    fontSize: '0.82rem'
                  }}>
                    <span style={{ color: 'var(--text-muted)' }}>
                      Live Production URL:
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: '#ffffff',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        wordBreak: 'break-all',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {project.liveUrl}
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}

                {/* Interactive Simulator / Sandbox Toggle for Flagship Projects */}
                {project.id === 'code-query' && (
                  <div style={{ marginTop: '1rem' }}>
                    <button
                      onClick={() => toggleDemo('code-query')}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', width: '100%', justifyContent: 'space-between' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                        <Terminal size={16} />
                        {expandedDemo['code-query'] ? "Hide Interactive RAG Sandbox" : "Launch Interactive RAG Query Sandbox"}
                      </span>
                      {expandedDemo['code-query'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedDemo['code-query'] && <RagSimulator />}
                  </div>
                )}

                {project.id === 'vvp-activity-management' && (
                  <div style={{ marginTop: '1rem' }}>
                    <button
                      onClick={() => toggleDemo('vvp-activity-management')}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', width: '100%', justifyContent: 'space-between' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                        <Shield size={16} />
                        {expandedDemo['vvp-activity-management'] ? "Hide Multi-Tier RBAC & EOD Simulator" : "Launch Multi-Tier RBAC & EOD Simulator"}
                      </span>
                      {expandedDemo['vvp-activity-management'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedDemo['vvp-activity-management'] && <VvpSimulator />}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
