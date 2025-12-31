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
            <div className="name-header">
                <div className="kanji-display">
                    {name.kanji}
                    <button
                        className="copy-btn-mini"
                        onClick={() => handleCopy(name.kanji, 'kanji')}
                        title="Copy Kanji"
                    >
                        {copiedField === 'kanji' ? <Check size={16} color="green" /> : <Copy size={16} />}
                    </button>
                </div>
                <div className="kana-display">{name.kana}</div>
            </div>

            <div className="name-details">
                <div className="detail-row">
                    <span className="detail-label">Romaji</span>
                    <div className="detail-value">
                        {name.romaji}
                        <button
                            className="copy-btn-inline"
                            onClick={() => handleCopy(name.romaji, 'romaji')}
                        >
                            {copiedField === 'romaji' ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Meaning</span>
                    <div className="detail-value">
                        {name.meaning}
                        <button
                            className="copy-btn-inline"
                            onClick={() => handleCopy(name.meaning, 'meaning')}
                        >
                            {copiedField === 'meaning' ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .name-card {
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .kanji-display {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-family-japanese);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .kana-display {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          font-family: var(--font-family-japanese);
          margin-bottom: var(--spacing-md);
        }
        .name-details {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          text-align: left;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
          font-size: 0.95rem;
        }
        .detail-row:last-child {
          margin-bottom: 0;
        }
        .detail-label {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .detail-value {
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .copy-btn-mini {
          opacity: 0.2;
          transition: opacity 0.2s;
          padding: 4px;
          border-radius: 4px;
        }
        .kanji-display:hover .copy-btn-mini {
          opacity: 1;
        }
        .copy-btn-inline {
           opacity: 0.4;
           padding: 2px;
           cursor: pointer;
        }
        .copy-btn-inline:hover {
           opacity: 1;
           color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default NameCard;
