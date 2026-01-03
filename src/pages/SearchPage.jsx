import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import SearchForm from '../components/SearchForm';
import { searchSurnames, searchGivenNames } from '../utils/nameSearch';

const SearchPage = () => {
    const [surnameResults, setSurnameResults] = useState([]);
    const [givenNameResults, setGivenNameResults] = useState([]);
    const [surnameSearched, setSurnameSearched] = useState(false);
    const [givenNameSearched, setGivenNameSearched] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSurnameSearch = async (query) => {
        setLoading(true);
        const results = await searchSurnames(query);
        setSurnameResults(results);
        setSurnameSearched(true);
        setLoading(false);
    };

    const handleGivenNameSearch = async (query, gender) => {
        setLoading(true);
        const results = await searchGivenNames(query, gender);
        setGivenNameResults(results);
        setGivenNameSearched(true);
        setLoading(false);
    };

    const renderResults = (results, type, searched) => {
        if (!searched) return null;

        if (results.length === 0) {
            return (
                <div className="no-results">
                    没有找到匹配的{type === 'surname' ? '姓氏' : '名字'}
                </div>
            );
        }

        return (
            <div className="search-results">
                <h3 className="results-title">
                    {type === 'surname' ? '姓氏' : '名字'}搜索结果 ({results.length})
                </h3>
                <div className="results-grid">
                    {results.map((item, index) => (
                        <div key={index} className="result-card">
                            <div className="result-kanji">{item.kanji}</div>
                            <div className="result-kana">{item.kana}</div>
                            <div className="result-romaji">{item.romaji}</div>
                            {item.gender && (
                                <div className={`result-gender ${item.gender}`}>
                                    {item.gender === 'male' ? '♂' : '♀'}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <Layout>
            <SEOHead
                title="Search Japanese Names - Find Names by Kanji or Romaji"
                description="Search for Japanese surnames and given names by kanji, kana, or romaji. Find the perfect name for your characters or projects."
                canonicalUrl="/search"
            />

            <section className="hero-section">
                <div className="glass-text-container">
                    <h1 className="hero-title">姓名搜索</h1>
                    <p className="hero-subtitle">
                        输入汉字、假名或罗马字搜索日本姓名
                    </p>
                </div>

                <SearchForm
                    onSearchSurname={handleSurnameSearch}
                    onSearchGivenName={handleGivenNameSearch}
                />

                {loading && <div className="loading">搜索中...</div>}

                {renderResults(surnameResults, 'surname', surnameSearched)}
                {renderResults(givenNameResults, 'givenName', givenNameSearched)}
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
                .loading {
                    margin-top: var(--spacing-lg);
                    color: var(--color-text-muted);
                }
                .no-results {
                    margin-top: var(--spacing-lg);
                    padding: var(--spacing-lg);
                    background: var(--color-bg);
                    border-radius: var(--radius-md);
                    color: var(--color-text-muted);
                }
                .search-results {
                    margin-top: var(--spacing-xl);
                    text-align: left;
                }
                .results-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-md);
                    color: var(--color-text-main);
                }
                .results-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: var(--spacing-md);
                }
                .result-card {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    padding: var(--spacing-md);
                    text-align: center;
                    position: relative;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .result-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .result-kanji {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-text-main);
                    margin-bottom: 4px;
                }
                .result-kana {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                }
                .result-romaji {
                    font-size: 0.85rem;
                    color: var(--color-primary);
                    margin-top: 4px;
                }
                .result-gender {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    font-size: 0.9rem;
                }
                .result-gender.male {
                    color: #3b82f6;
                }
                .result-gender.female {
                    color: #ec4899;
                }
            `}</style>
        </Layout>
    );
};

export default SearchPage;
