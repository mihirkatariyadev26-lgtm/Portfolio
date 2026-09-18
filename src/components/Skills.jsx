import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Cloud, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return <Layout size={19} style={{ color: '#ffffff' }} />;
      case 1: return <Server size={19} style={{ color: '#ffffff' }} />;
      case 2: return <Database size={19} style={{ color: '#ffffff' }} />;
      case 3: return <Cloud size={19} style={{ color: '#ffffff' }} />;
      case 4: return <Sparkles size={19} style={{ color: '#ffffff' }} />;
      default: return <Cpu size={19} style={{ color: '#ffffff' }} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu size={16} />
            Technical Proficiency
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A modern, production-focused full-stack toolkit centered around the MERN stack, real-time architectures, and applied AI systems.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: selectedCategory === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                border: selectedCategory === idx ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.12)',
                color: selectedCategory === idx ? '#000000' : 'var(--text-secondary)',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <span style={{ color: selectedCategory === idx ? '#000000' : '#ffffff', display: 'flex', alignItems: 'center' }}>
                {getCategoryIcon(idx)}
              </span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                {getCategoryIcon(selectedCategory)}
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 700 }}>
                {skillsCategories[selectedCategory].category}
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {skillsCategories[selectedCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {skillsCategories[selectedCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                    {skill.name}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar (Monochrome Platinum Gradient) */}
                <div style={{
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ffffff, #a1a1aa)',
                    borderRadius: '3px'
                  }} />
                </div>

                {/* Skill Tag Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
