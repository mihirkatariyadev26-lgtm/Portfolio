import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, Shield, UserCheck, Clock, FileText, Database, Sparkles, RefreshCw } from 'lucide-react';

export function RagSimulator() {
  const [query, setQuery] = useState("How does MongoDB Vector Search index handle cosine similarity?");
  const [isProcessing, setIsProcessing] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(3);
  const [simulatedResponse, setSimulatedResponse] = useState({
    answer: "In the Code Query architecture, documents are chunked with recursive overlap and converted into dense vector embeddings. MongoDB Atlas Vector Search utilizes Hierarchical Navigable Small World (HNSW) indexing configured with the 'cosine' similarity metric. When a developer queries the API, the LangChain pipeline computes the query embedding, executes an aggregation pipeline with `$vectorSearch`, and passes the top-k nearest semantic chunks directly to Gemini 1.5 Flash to synthesize an accurate, hallucination-free response with source line citations.",
    sources: [
      { doc: "ragPipeline.controller.js", similarity: "0.942" },
      { doc: "atlasVectorConfig.json", similarity: "0.897" },
      { doc: "geminiStreamService.js", similarity: "0.865" }
    ],
    tokens: 412,
    latency: "348ms"
  });

  const sampleQueries = [
    "How does MongoDB Vector Search index handle cosine similarity?",
    "Explain the recursive chunk overlap strategy in LangChain.",
    "How does Express stream tokens from Gemini 1.5 Flash?"
  ];

  const handleRunQuery = (selectedQuery) => {
    const q = selectedQuery || query;
    setQuery(q);
    setIsProcessing(true);
    setPipelineStep(1);

    setTimeout(() => {
      setPipelineStep(2);
      setTimeout(() => {
        setPipelineStep(3);
        setIsProcessing(false);

        if (q.includes("chunk overlap")) {
          setSimulatedResponse({
            answer: "LangChain's RecursiveCharacterTextSplitter was configured with a chunk size of 1000 characters and a 200-character overlap. This prevents technical context fragmentation at function and class boundaries, ensuring embeddings capture full semantic intent.",
            sources: [
              { doc: "documentSplitter.config.js", similarity: "0.961" },
              { doc: "embeddingsLoader.js", similarity: "0.912" }
            ],
            tokens: 320,
            latency: "290ms"
          });
        } else if (q.includes("stream tokens")) {
          setSimulatedResponse({
            answer: "Express exposes a dedicated streaming endpoint using Server-Sent Events (SSE). The Gemini 1.5 Flash model streams partial chunks asynchronously, which are buffered into standard HTTP response streams to minimize Time-to-First-Token (TTFT) to under 350ms.",
            sources: [
              { doc: "geminiStreamService.js", similarity: "0.978" },
              { doc: "streamRoute.js", similarity: "0.934" }
            ],
            tokens: 285,
            latency: "310ms"
          });
        } else {
          setSimulatedResponse({
            answer: "In the Code Query architecture, documents are chunked with recursive overlap and converted into dense vector embeddings. MongoDB Atlas Vector Search utilizes Hierarchical Navigable Small World (HNSW) indexing configured with the 'cosine' similarity metric. When a developer queries the API, the LangChain pipeline computes the query embedding, executes an aggregation pipeline with `$vectorSearch`, and passes the top-k nearest semantic chunks directly to Gemini 1.5 Flash to synthesize an accurate, hallucination-free response with source line citations.",
            sources: [
              { doc: "ragPipeline.controller.js", similarity: "0.942" },
              { doc: "atlasVectorConfig.json", similarity: "0.897" },
              { doc: "geminiStreamService.js", similarity: "0.865" }
            ],
            tokens: 412,
            latency: "348ms"
          });
        }
      }, 500);
    }, 450);
  };

  return (
    <div style={{
      background: '#09090b',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      overflow: 'hidden',
      marginTop: '1.5rem',
      boxShadow: '0 8px 24px rgba(0,0,0,0.7)'
    }}>
      {/* Terminal Header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#52525b' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#71717a' }}></div>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a1a1aa' }}></div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            code-query-rag-engine :: live sandbox
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#ffffff' }}>
          <Sparkles size={14} />
          Gemini 1.5 Flash + MongoDB Vector
        </div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        {/* Sample query buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {sampleQueries.map((q, i) => (
            <button
              key={i}
              onClick={() => handleRunQuery(q)}
              style={{
                background: query === q ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                border: query === q ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: query === q ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.78rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
            >
              "{q.substring(0, 38)}..."
            </button>
          ))}
        </div>

        {/* Input box */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleRunQuery()}
            style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '0.6rem 1rem',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)',
              outline: 'none'
            }}
            placeholder="Type technical query to test RAG retrieval..."
          />
          <button 
            onClick={() => handleRunQuery()}
            disabled={isProcessing}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
          >
            {isProcessing ? <RefreshCw size={16} className="animate-spin" /> : <Send size={16} />}
            Query
          </button>
        </div>

        {/* Live Pipeline Visualizer (Monochrome) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          marginBottom: '1rem',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{
            fontSize: '0.75rem',
            color: pipelineStep >= 1 ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <Database size={14} />
            1. Vector Embeddings
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: pipelineStep >= 2 ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <Sparkles size={14} />
            2. MongoDB $vectorSearch
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: pipelineStep >= 3 ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <CheckCircle2 size={14} />
            3. Gemini 1.5 Synthesis
          </div>
        </div>

        {/* Grounded Result Display */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '8px',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            <span>Synthesized Grounded Answer:</span>
            <span>Latency: <strong style={{ color: '#ffffff' }}>{simulatedResponse.latency}</strong> | TTFT Verified</span>
          </div>
          <p style={{ color: '#f4f4f5', lineHeight: 1.6, marginBottom: '0.8rem' }}>
            {simulatedResponse.answer}
          </p>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>Retrieved Vectors:</span>
            {simulatedResponse.sources.map((src, i) => (
              <span key={i} style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.72rem',
                color: '#e4e4e7'
              }}>
                📄 {src.doc} <span style={{ color: '#ffffff' }}>({src.similarity})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function VvpSimulator() {
  const [activeRole, setActiveRole] = useState("Faculty Member");
  const [eodEntry, setEodEntry] = useState("Conducted 2 lab sessions on REST API development; completed code review for 14 student repositories; submitted department weekly syllabus milestone.");
  const [eodSubmitted, setEodSubmitted] = useState(false);

  const rolesConfig = {
    "Super Admin": {
      permissions: ["College-Wide Activity Approval", "Department Budget Audit", "GTU Compliance Reports", "User Provisioning"],
      viewText: "College-Level Executive Dashboard: 6 Active Department Symposiums, 142 Faculty EOD logs submitted today (98% compliance)."
    },
    "Department Head (HOD)": {
      permissions: ["Review Faculty Daily EOD", "Authorize Department Events", "Schedule Lecture Swaps", "Generate GTU Reports"],
      viewText: "Computer Science Dept Overview: 28 Faculty logs verified. 3 Lecture swap requests approved with zero conflict."
    },
    "Faculty Member": {
      permissions: ["Mandatory Daily EOD Submission", "Timetable Management", "Department Activity Logging", "GTU Activity Recording"],
      viewText: "Daily Activity Portal: EOD cutoff scheduled for 18:00 IST. Token authenticated via JWT. Staff-only access enforced."
    }
  };

  const handleEodSubmit = (e) => {
    e.preventDefault();
    setEodSubmitted(true);
    setTimeout(() => setEodSubmitted(false), 4000);
  };

  return (
    <div style={{
      background: '#09090b',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      overflow: 'hidden',
      marginTop: '1.5rem',
      boxShadow: '0 8px 24px rgba(0,0,0,0.7)'
    }}>
      {/* Top Banner */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Shield size={16} style={{ color: '#ffffff' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
            VVP System: Role-Based Authorization & Daily EOD Pipeline
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#ffffff' }}>
          <UserCheck size={14} />
          JWT Bearer Authenticated
        </div>
      </div>

      <div style={{ padding: '1.25rem' }}>
        {/* Role Selector Tabs */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
            Select User Role to Inspect RBAC Permissions & Interface View:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {Object.keys(rolesConfig).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  background: activeRole === role ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                  border: activeRole === role ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeRole === role ? '#000000' : 'var(--text-secondary)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic RBAC Permissions View */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
              Active Session: {activeRole}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Middleware Guard: <code style={{ color: '#ffffff' }}>verifyRole(['{activeRole}'])</code>
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', color: '#e4e4e7', marginBottom: '0.75rem' }}>
            {rolesConfig[activeRole].viewText}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {rolesConfig[activeRole].permissions.map((perm, idx) => (
              <span key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                color: '#ffffff'
              }}>
                ✓ {perm}
              </span>
            ))}
          </div>
        </div>

        {/* Mandatory Daily EOD Entry Sub-Pipeline */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: '#ffffff' }}>
              <Clock size={15} style={{ color: '#ffffff' }} />
              Mandatory Daily End-of-Day (EOD) Log Form
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Auto-Audit Logging Active
            </span>
          </div>

          <form onSubmit={handleEodSubmit}>
            <textarea
              rows={2}
              value={eodEntry}
              onChange={(e) => setEodEntry(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                padding: '0.6rem',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none',
                resize: 'none',
                marginBottom: '0.6rem'
              }}
              placeholder="Enter daily activity tasks and deliverables..."
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Recorded under GTU Activity Compliance Protocol
              </span>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              >
                {eodSubmitted ? "✓ EOD Log Saved & Verified!" : "Submit EOD Entry"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
