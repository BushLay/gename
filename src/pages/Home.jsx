import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import GeneratorForm from '../components/GeneratorForm';
import NameCard from '../components/NameCard';
import { generateNames } from '../utils/nameGenerator';
import { Info } from 'lucide-react';

const Home = () => {
  const [generatedNames, setGeneratedNames] = useState([]);

  const handleGenerate = ({ gender, style }) => {
    const names = generateNames(gender, style, 1);
    setGeneratedNames(names);
  };

  return (
    <Layout>
      <SEOHead
        title="Japanese Name Generator - Create Authentic Names"
        description="Generate authentic Japanese names with Kanji, Hiragana, Katakana, and Romaji. Perfect for characters, babies, and creative writing. Free and easy to use."
        canonicalUrl="/"
      />

      <section className="hero-section">
        <div className="glass-text-container">
          <h1 className="hero-title">Japanese Name Generator</h1>
          <p className="hero-subtitle">
            Create authentic Japanese names with Kanji, meaning, and pronunciation instantly.
          </p>
        </div>

        <GeneratorForm onGenerate={handleGenerate} />

        {generatedNames.length > 0 && (
          <div className="results-area">
            {generatedNames.map((name, index) => (
              <NameCard key={index} name={name} />
            ))}
          </div>
        )}
      </section>

      <section className="content-section glass-text-container">
        <h2>How It Works</h2>
        <p>
          Our generator combines authentic Japanese surnames and given names to create meaningful combinations.
          Choose from different styles like <strong>Traditional</strong>, <strong>Modern</strong>, or <strong>Anime-inspired</strong> names.
          Each result comes with the correct Kanji (Japanese characters), Romaji (English spelling), and the meaning behind the name.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <Info size={24} className="feature-icon" />
            <h3>Authentic Kanji</h3>
            <p>Real Japanese characters with proper meanings.</p>
          </div>
          <div className="feature-item">
            <Info size={24} className="feature-icon" />
            <h3>Various Styles</h3>
            <p>From samurai history to modern anime aesthetics.</p>
          </div>
          <div className="feature-item">
            <Info size={24} className="feature-icon" />
            <h3>Full Meaning</h3>
            <p>Understand the significance of every name generated.</p>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-sm);
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto var(--spacing-lg);
        }
        .results-area {
          margin-top: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          align-items: center;
        }
        .content-section {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--spacing-xl) 0;
          border-top: 1px solid var(--color-border);
        }
        .content-section h2 {
          font-size: 1.75rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-text-main);
        }
        .content-section p {
          margin-bottom: var(--spacing-md);
          color: var(--color-text-muted);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
        }
        .feature-item {
          text-align: center;
          padding: var(--spacing-md);
          background: var(--color-bg);
          border-radius: var(--radius-md);
        }
        .feature-icon {
          color: var(--color-primary);
          margin-bottom: var(--spacing-sm);
        }
        .feature-item h3 {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-xs);
        }
        .feature-item p {
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
