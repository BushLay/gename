import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import AdvancedGeneratorForm from '../components/AdvancedGeneratorForm';
import NameCard from '../components/NameCard';
import { generateNamesWithFilter } from '../utils/nameGenerator';
import { Info } from 'lucide-react';

const Home = () => {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [filterInfo, setFilterInfo] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const handleGenerate = async (options) => {
    const result = await generateNamesWithFilter(options, 20);
    setGeneratedNames(result.names);
    setFilterInfo(result.filterInfo);
    setNoResults(result.names.length === 0);
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

        <AdvancedGeneratorForm onGenerate={handleGenerate} />

        {noResults && filterInfo && (
          <div className="no-results-message">
            No names found matching your criteria.
            {filterInfo.matchedSurnames === 0 && <div>No matching family names found.</div>}
            {filterInfo.matchedGivenNames === 0 && <div>No matching given names found.</div>}
          </div>
        )}

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
          Our Japanese name generator combines authentic Japanese surnames and given names to create meaningful combinations.
          Whether you need a name for a fictional character, a pen name, or simply want to explore Japanese culture, this Japanese name generator provides instant, authentic results.
        </p>

        {/* <div className="features-grid">
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
        </div> */}
      </section>

      <section className="content-section glass-text-container">
        <h2>What is a Japanese Name Generator?</h2>
        <p>
          A Japanese name generator is an online tool designed to create authentic Japanese names by combining traditional surnames (family names) and given names (first names). Unlike random name generators, a quality Japanese name generator uses real Kanji characters with meaningful combinations that native Japanese speakers would recognize and appreciate.
        </p>
        <p>
          Our Japanese name generator draws from a curated database of thousands of real Japanese names, ensuring that every generated name is culturally appropriate and linguistically correct. Each name includes the original Kanji writing, Hiragana readings.
        </p>
        <p>
          Whether you're a writer creating manga characters, a game developer building a Japanese-themed world, or someone interested in Japanese culture, this Japanese name generator provides the perfect starting point for finding meaningful and authentic names.
        </p>
      </section>

      <section className="content-section glass-text-container">
        <h2>Why Use Our Japanese Name Generator?</h2>
        <p>
          Choosing the right Japanese name requires understanding of Japanese language, culture. Our Japanese name generator simplifies this process while maintaining cultural authenticity. Here's why thousands of users trust our tool:
        </p>
        <ul className="benefits-list">
          <li><strong>Cultural Accuracy:</strong> Every name in our Japanese name generator follows authentic Japanese naming patterns and uses real Kanji with appropriate meanings.</li>
          <li><strong>Multiple Categories:</strong> Generate traditional names suitable for historical settings, modern names for contemporary stories, or anime-inspired names for creative projects.</li>
          <li><strong>Complete Information:</strong> Each generated name includes Kanji, Hiragana, Katakana, Romaji, and detailed meaning breakdown.</li>
          <li><strong>Gender Options:</strong> Select male, female to match your specific requirements.</li>
          <li><strong>Instant Results:</strong> Generate 20 unique names with a single click, saving hours of manual research.</li>
        </ul>
        <p>
          This Japanese name generator is completely free to use and requires no registration. Start generating beautiful Japanese names instantly!
        </p>
      </section>



      <section className="content-section glass-text-container">
        <h2>Understanding Japanese Naming Conventions</h2>
        <p>
          To fully appreciate the names created by our Japanese name generator, it's helpful to understand Japanese naming traditions:
        </p>
        <h3>Surname First</h3>
        <p>
          Unlike Western names, Japanese names place the family name (surname) before the given name. For example, in "Tanaka Yuki," Tanaka is the surname and Yuki is the given name. Our Japanese name generator follows this traditional order.
        </p>
        <h3>Kanji Meanings</h3>
        <p>
          Each Kanji character carries specific meanings, and parents carefully select characters with positive connotations for their children. A single name might combine Kanji meaning "beautiful" (美), "wisdom" (智), or "prosperity" (繁). The Japanese name generator displays these meanings for every generated name.
        </p>
        <h3>Reading Variations</h3>
        <p>
          Japanese Kanji can have multiple readings (pronunciations). The same character might be read differently depending on context or personal preference. Our tool provides both the standard reading and common variations when applicable.
        </p>
      </section>

      <section className="content-section glass-text-container">
        <h2>How to Choose the Perfect Japanese Name</h2>
        <p>
          Using our Japanese name generator is just the first step. Here are tips for selecting the ideal name from your generated results:
        </p>
        <ul className="tips-list">
          <li>Consider the character's personality and background when reviewing name meanings.</li>
          <li>Check how the name sounds when spoken aloud – Japanese names have natural rhythm and flow.</li>
          <li>Research the Kanji meanings to ensure they align with your character's story arc.</li>
          <li>For authentic feel, verify that the surname and given name pairing feels natural.</li>
          <li>Use this Japanese name generator multiple times to explore different style combinations.</li>
        </ul>
      </section>

      <section className="content-section glass-text-container faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Is this Japanese name generator free to use?</h3>
          <p>Yes! Our Japanese name generator is completely free with no hidden fees or registration required. Generate unlimited names for personal or commercial projects.</p>
        </div>

        <div className="faq-item">
          <h3>Are the generated names culturally appropriate?</h3>
          <p>Absolutely. All names in our database are real Japanese names or follow authentic Japanese naming patterns, ensuring cultural accuracy and respect.</p>
        </div>

        <div className="faq-item">
          <h3>Can I use these names for my novel, game, or manga?</h3>
          <p>Yes! Names generated by our Japanese name generator can be used freely for creative works including novels, games, manga, films, and other projects.</p>
        </div>

        <div className="faq-item">
          <h3>How accurate are the Kanji meanings?</h3>
          <p>Each name is verified for accurate Kanji meanings and readings. Our Japanese name generator uses authoritative sources to ensure linguistic correctness.</p>
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
          width: 100%;
        }
        .no-results-message {
          margin-top: var(--spacing-lg);
          padding: var(--spacing-lg);
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: var(--radius-md);
          color: #991b1b;
          text-align: center;
        }
        @media (max-width: 1024px) {
          .results-area {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .results-area {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .results-area {
            grid-template-columns: 1fr;
          }
        }
        .content-section {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--spacing-xl) var(--spacing-xl);
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
        .content-section h3 {
          font-size: 1.25rem;
          margin-top: var(--spacing-lg);
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-main);
        }
        .benefits-list,
        .tips-list {
          list-style: none;
          padding: 0;
          margin: var(--spacing-md) 0;
        }
        .benefits-list li,
        .tips-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .benefits-list li::before,
        .tips-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: 700;
        }
        .faq-section {
          padding-bottom: var(--spacing-xl);
        }
        .faq-item {
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.5);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--color-primary);
        }
        .faq-item h3 {
          font-size: 1.1rem;
          margin-top: 0;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-main);
        }
        .faq-item p {
          margin: 0;
          font-size: 0.95rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
