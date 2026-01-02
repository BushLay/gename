import React from 'react';
import { Copy, Check } from 'lucide-react';

const NameCard = ({ name }) => {
  const [copiedField, setCopiedField] = React.useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div className="name-card card">
      <div className="card-header">
        <div className="romaji-text">
          {name.romaji}
        </div>
        <button
          className="copy-btn"
          onClick={() => handleCopy(`${name.romaji} ${name.kanji}`, 'all')}
          title="Copy Name"
        >
          {copiedField === 'all' ? <Check size={16} color="green" /> : <Copy size={16} />}
        </button>
      </div>

      <div className="japanese-text">
        {name.kanji} <span className="kana-text">({name.kana})</span>
      </div>

      <style>{`
        .name-card {
          text-align: left;
          position: relative;
          padding: var(--spacing-md);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .name-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-color: var(--color-primary);
        }
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2px;
        }
        .romaji-text {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--color-text-main);
            line-height: 1.3;
        }
        .copy-btn {
            opacity: 0.3;
            transition: opacity 0.2s;
            cursor: pointer;
            padding: 2px;
            display: flex;
            align-items: center;
        }
        .name-card:hover .copy-btn {
            opacity: 1;
        }
        .copy-btn:hover {
            color: var(--color-primary);
        }
        .japanese-text {
            font-size: 0.9rem;
            color: var(--color-text-main);
            font-family: var(--font-family-japanese);
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .kana-text {
            color: var(--color-text-muted);
            font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
};

export default NameCard;
