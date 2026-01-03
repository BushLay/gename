import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const AdvancedGeneratorForm = ({ onGenerate }) => {
    const [gender, setGender] = useState('male');
    const [givenNameQuery, setGivenNameQuery] = useState('');
    const [givenNameMatchMode, setGivenNameMatchMode] = useState('startsWith');
    const [familyNameQuery, setFamilyNameQuery] = useState('');
    const [familyNameMatchMode, setFamilyNameMatchMode] = useState('startsWith');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate({
            gender,
            givenNameQuery: givenNameQuery.trim(),
            givenNameMatchMode,
            familyNameQuery: familyNameQuery.trim(),
            familyNameMatchMode
        });
    };

    return (
        <form className="advanced-generator-form card" onSubmit={handleSubmit}>
            {/* Gender Selection - Required */}
            <div className="form-group">
                <div className="form-label-row">
                    <label className="form-label">Gender</label>
                    <span className="tag tag-required">Required</span>
                </div>
                <div className="gender-tabs">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
                        />
                        <span>Male</span>
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                        />
                        <span>Female</span>
                    </label>
                </div>
            </div>

            {/* Given Name Filter - Optional */}
            <div className="form-group">
                <div className="form-label-row">
                    <label className="form-label">Given name</label>
                    <span className="tag tag-optional">Optional</span>
                </div>
                <div className="filter-row">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Any"
                        value={givenNameQuery}
                        onChange={(e) => setGivenNameQuery(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={givenNameMatchMode}
                        onChange={(e) => setGivenNameMatchMode(e.target.value)}
                    >
                        <option value="startsWith">starts with</option>
                        <option value="contains">contains</option>
                    </select>
                </div>
            </div>

            {/* Family Name Filter - Optional */}
            <div className="form-group">
                <div className="form-label-row">
                    <label className="form-label">Family name</label>
                    <span className="tag tag-optional">Optional</span>
                </div>
                <div className="filter-row">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Any"
                        value={familyNameQuery}
                        onChange={(e) => setFamilyNameQuery(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={familyNameMatchMode}
                        onChange={(e) => setFamilyNameMatchMode(e.target.value)}
                    >
                        <option value="startsWith">starts with</option>
                        <option value="contains">contains</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
                <Sparkles size={20} style={{ marginRight: '8px' }} />
                Generate Names
            </button>

            <style>{`
                .advanced-generator-form {
                    max-width: 550px;
                    margin: 0 auto;
                }
                .form-group {
                    margin-bottom: var(--spacing-md);
                }
                .form-label-row {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-sm);
                    margin-bottom: var(--spacing-xs);
                }
                .form-label {
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                .tag {
                    font-size: 0.75rem;
                    padding: 2px 8px;
                    border-radius: var(--radius-sm);
                    font-weight: 600;
                }
                .tag-required {
                    background: #fee2e2;
                    color: #dc2626;
                }
                .tag-optional {
                    background: #dcfce7;
                    color: #16a34a;
                }
                .gender-tabs {
                    display: flex;
                    gap: var(--spacing-md);
                    padding: var(--spacing-sm) 0;
                }
                .radio-label {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                    color: var(--color-text-main);
                }
                .radio-label input[type="radio"] {
                    width: 16px;
                    height: 16px;
                    accent-color: var(--color-primary);
                }
                .filter-row {
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
                .form-select {
                    padding: 10px 14px;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    font-size: 0.95rem;
                    background: var(--color-bg);
                    color: var(--color-text-main);
                    cursor: pointer;
                    min-width: 130px;
                }
                .form-select:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                .submit-btn {
                    width: 100%;
                    margin-top: var(--spacing-md);
                }
            `}</style>
        </form>
    );
};

export default AdvancedGeneratorForm;
