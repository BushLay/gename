import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = ({ onSearchSurname, onSearchGivenName }) => {
    const [surnameQuery, setSurnameQuery] = useState('');
    const [givenNameQuery, setGivenNameQuery] = useState('');
    const [gender, setGender] = useState('all');

    const handleSurnameSearch = (e) => {
        e.preventDefault();
        if (surnameQuery.trim()) {
            onSearchSurname(surnameQuery.trim());
        }
    };

    const handleGivenNameSearch = (e) => {
        e.preventDefault();
        if (givenNameQuery.trim()) {
            onSearchGivenName(givenNameQuery.trim(), gender);
        }
    };

    return (
        <div className="search-form-container">
            {/* Surname Search */}
            <form className="search-form card" onSubmit={handleSurnameSearch}>
                <h3 className="search-title">姓氏搜索 (Surname)</h3>
                <div className="search-input-group">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="输入汉字、假名或罗马字..."
                        value={surnameQuery}
                        onChange={(e) => setSurnameQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary search-btn">
                        <Search size={18} />
                        搜索
                    </button>
                </div>
            </form>

            {/* Given Name Search */}
            <form className="search-form card" onSubmit={handleGivenNameSearch}>
                <h3 className="search-title">名字搜索 (Given Name)</h3>
                <div className="gender-tabs">
                    <button
                        type="button"
                        className={`gender-tab ${gender === 'all' ? 'active' : ''}`}
                        onClick={() => setGender('all')}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={`gender-tab ${gender === 'male' ? 'active' : ''}`}
                        onClick={() => setGender('male')}
                    >
                        Male
                    </button>
                    <button
                        type="button"
                        className={`gender-tab ${gender === 'female' ? 'active' : ''}`}
                        onClick={() => setGender('female')}
                    >
                        Female
                    </button>
                </div>
                <div className="search-input-group">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="输入汉字、假名或罗马字..."
                        value={givenNameQuery}
                        onChange={(e) => setGivenNameQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary search-btn">
                        <Search size={18} />
                        搜索
                    </button>
                </div>
            </form>

            <style>{`
                .search-form-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    max-width: 600px;
                    margin: 0 auto;
                }
                .search-form {
                    padding: var(--spacing-lg);
                }
                .search-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-md);
                    color: var(--color-text-main);
                }
                .search-input-group {
                    display: flex;
                    gap: var(--spacing-sm);
                }
                .form-input {
                    flex: 1;
                    padding: 10px 14px;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    background: var(--color-bg);
                    color: var(--color-text-main);
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                }
                .search-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    white-space: nowrap;
                }
                .gender-tabs {
                    display: flex;
                    background: var(--color-bg);
                    padding: 4px;
                    border-radius: var(--radius-md);
                    gap: 4px;
                    margin-bottom: var(--spacing-md);
                }
                .gender-tab {
                    flex: 1;
                    padding: 8px;
                    border-radius: var(--radius-sm);
                    font-weight: 500;
                    color: var(--color-text-muted);
                    transition: all 0.2s;
                }
                .gender-tab.active {
                    background: white;
                    color: var(--color-primary);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .gender-tab:hover:not(.active) {
                    color: var(--color-text-main);
                    background: rgba(255,255,255,0.5);
                }
            `}</style>
        </div>
    );
};

export default SearchForm;
