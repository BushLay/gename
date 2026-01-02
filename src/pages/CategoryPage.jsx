import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import GeneratorForm from '../components/GeneratorForm';
import NameCard from '../components/NameCard';
import { generateNames } from '../utils/nameGenerator';

const CategoryPage = ({ category, title, description, initialStyle = 'all' }) => {
    const [generatedNames, setGeneratedNames] = useState([]);

    // Auto-generate one on load? Maybe better to let user click to ensure interaction.
    // But for an SEO page, it's nice to see content. Let's start empty or pre-generate?
    // User requested "Minimalist tool-style UI". Minimalist usually means clean start.

    const handleGenerate = ({ gender, style }) => {
        const names = generateNames(gender, style, 20);
        setGeneratedNames(names);
    };

    const getInitialGender = () => {
        if (category === 'male') return 'male';
        if (category === 'female') return 'female';
        return 'neutral';
    };

    return (
        <Layout>
            <SEOHead
                title={title}
                description={description}
                canonicalUrl={`/${category}-japanese-names`}
            />

            <section className="hero-section">
                <div className="glass-text-container">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">
                        {description}
                    </p>
                </div>

                <GeneratorForm
                    onGenerate={handleGenerate}
                    initialGender={getInitialGender()}
                    initialStyle={initialStyle}
                />

                {generatedNames.length > 0 && (
                    <div className="results-area">
                        {generatedNames.map((name, index) => (
                            <NameCard key={index} name={name} />
                        ))}
                    </div>
                )}
            </section>

            <section className="content-section glass-text-container">
                <h2>About Japanese Names Generator</h2>
                <p>
                    Finding the perfect Japanese name can be challenging. Whether you are writing a story,
                    naming a character, or just exploring Japanese culture, our generator provides accurate and
                    culturally relevant names.
                </p>
                <p>
                    We use a database of authentic Kanji characters to ensure that every name generated has a
                    proper meaning and pronunciation.
                </p>
            </section>

            <style>{`
        .hero-section {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .hero-title {
          font-size: 2.25rem;
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
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--color-border);
        }
      `}</style>
        </Layout>
    );
};

export default CategoryPage;
