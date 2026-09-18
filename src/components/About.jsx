import React from 'react';
import { ShieldCheck, Cpu, Zap, Code2, Database, Rocket, Trophy, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const principles = [
    {
      icon: <Cpu size={26} style={{ color: '#ffffff' }} />,
      title: "Scalable MERN Architecture",
      desc: "Engineered around decoupled Express.js REST APIs, reusable React component systems, and scalable MongoDB document structures."
    },
    {
      icon: <Zap size={26} style={{ color: '#ffffff' }} />,
      title: "Real-Time & Low Latency",
      desc: "Deep experience with bi-directional Socket.io feeds, FIFO queuing, and WebRTC peer-to-peer streaming for immediate data sync."
    },
    {
      icon: <Database size={26} style={{ color: '#ffffff' }} />,
      title: "Grounded AI & Vector Search",
      desc: "Building production RAG systems with LangChain and MongoDB Vector Search to ground Large Language Models in verified documents."
    },
    {
      icon: <ShieldCheck size={26} style={{ color: '#ffffff' }} />,
      title: "Stateless Security & RBAC",
      desc: "Implementing enterprise token-based authentication (JWT) paired with multi-tier role authorization guards across API routes."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-eyebrow">
            <Rocket size={16} />
            Professional Overview
          </div>
          <h2 className="section-title">
            Engineering for <span className="text-gradient">Scale, Speed & Reliability</span>
          </h2>
          <p className="section-subtitle">
            Bridging modern frontend reactivity with bulletproof backend architectures and cutting-edge retrieval-augmented AI systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Bio Narrative Card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff' }}>
              <Code2 size={24} style={{ color: '#ffffff' }} />
              Developer Profile
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
              {personalInfo.bio}
            </p>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              borderRadius: 'var(--radius-md)', 
              padding: '1.25rem', 
              borderLeft: '4px solid #ffffff',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Why Recruiters & Engineering Teams Rely on Mihir:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} style={{ color: '#ffffff', flexShrink: 0 }} />
                  Delivers autonomous, end-to-end full-stack systems from DB schemas to production deployment.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} style={{ color: '#ffffff', flexShrink: 0 }} />
                  Strong command over streaming AI APIs, prompt grounding, and vector similarity indexing.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} style={{ color: '#ffffff', flexShrink: 0 }} />
                  Battle-tested hackathon leadership delivering under stringent deadlines at IIT Gandhinagar.
                </li>
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>Full-Stack MERN</span>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>LangChain & RAG</span>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>Real-Time Sockets</span>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>JWT Token Auth</span>
            </div>
          </div>

          {/* Core Principles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {principles.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
