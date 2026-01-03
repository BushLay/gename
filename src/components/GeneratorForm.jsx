import React from 'react';
import { Settings, Sparkles } from 'lucide-react';

const GeneratorForm = ({ onGenerate, initialGender = 'neutral' }) => {
    const [gender, setGender] = React.useState(initialGender);

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate({ gender });
    };

    return (
        <form className="generator-form card" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label">Gender</label>
                <div className="gender-tabs">
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
                    <button
                        type="button"
                        className={`gender-tab ${gender === 'neutral' ? 'active' : ''}`}
                        onClick={() => setGender('neutral')}
                    >
                        Neutral
                    </button>
                </div>
            </div>



            <button type="submit" className="btn btn-primary submit-btn">
                <Sparkles size={20} style={{ marginRight: '8px' }} />
                Generate Names
            </button>

            <style>{`
        .generator-form {
          max-width: 500px;
          margin: 0 auto;
        }
        .gender-tabs {
          display: flex;
          background: var(--color-bg);
          padding: 4px;
          border-radius: var(--radius-md);
          gap: 4px;
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
        .submit-btn {
          width: 100%;
          margin-top: var(--spacing-sm);
        }
      `}</style>
        </form>
    );
};

export default GeneratorForm;
