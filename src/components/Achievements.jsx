import React from 'react';
import { Trophy, Award, GraduationCap, Calendar, BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import { achievements, education } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'linear-gradient(180deg, rgba(10, 10, 12, 0.6) 0%, transparent 100%)' }}>
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">
            <Trophy size={16} />
            Milestones & Academic Background
          </div>
          <h2 className="section-title">
            Hackathon Leadership & <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated engineering leadership under high pressure, verified full-stack credentialing, and academic foundation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Column 1: Achievements & Hackathon Highlight */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Trophy size={22} style={{ color: '#ffffff' }} />
              Honors & Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {achievements.map((ach, idx) => (
                <div 
                  key={idx} 
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    border: idx === 0 ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid var(--card-border)',
                    background: 'var(--card-bg)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', fontSize: '0.75rem' }}>
                      {ach.badge}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} />
                      {ach.date}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
                    {ach.title}
                  </h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {ach.organization}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Formal Education Timeline */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap size={22} style={{ color: '#ffffff' }} />
              Academic Journey
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    border: idx === 0 ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid var(--card-border)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', fontSize: '0.75rem' }}>
                      {edu.score}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {edu.institution}
                  </div>

                  {edu.highlights && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
                          <CheckCircle size={14} style={{ color: '#ffffff', flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
