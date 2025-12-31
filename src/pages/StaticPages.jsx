import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

export const About = () => (
  <Layout>
    <SEOHead
      title="About Us - Gename.art"
      description="Learn more about Gename.art, the authentic Japanese Name Generator project."
      canonicalUrl="/about"
    />
    <div className="static-page glass-text-container">
      <h1>About Gename.art</h1>
      <p>
        Gename.art is a dedicated tool for generating authentic Japanese names.
        We understand that names are more than just sounds; in Japanese culture,
        the meaning behind the Kanji characters is just as important as the pronunciation.
      </p>
      <p>
        Our tool is designed for writers, gamers, role-players, and language learners
        who need inspiration for naming their characters or themselves.
      </p>
      <p>
        We strive for accuracy and variety, offering names ranging from traditional historical figures
        to modern contemporary styles and anime-inspired fantasy names.
      </p>
    </div>
    <style>{`
      .static-page {
        max-width: 700px;
        margin: 0 auto;
      }
      .static-page h1 {
        margin-bottom: var(--spacing-lg);
        font-size: 2rem;
      }
      .static-page p {
        margin-bottom: var(--spacing-md);
        color: var(--color-text-muted);
      }
    `}</style>
  </Layout>
);

export const Privacy = () => (
  <Layout>
    <SEOHead
      title="Privacy Policy - Gename.art"
      description="Privacy Policy for Gename.art."
      canonicalUrl="/privacy-policy"
    />
    <div className="static-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Information We Collect</h2>
      <p>
        Gename.art does not collect any personal data from its users.
        The name generation happens entirely on your device (client-side).
      </p>

      <h2>2. Cookies</h2>
      <p>
        We do not use tracking cookies. We may use local storage to remember your
        preferences (like theme or last generated settings) to improve your experience.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        Our website is hosted on a public platform. We do not use third-party analytics
        tools that track personally identifiable information.
      </p>

      <h2>4. Changes</h2>
      <p>
        We may update this privacy policy from time to time. Changes will be posted on this page.
      </p>
    </div>
    <style>{`
      .static-page {
        max-width: 700px;
        margin: 0 auto;
      }
      .static-page h1 {
        margin-bottom: var(--spacing-lg);
        font-size: 2rem;
      }
       .static-page h2 {
        margin-top: var(--spacing-lg);
        margin-bottom: var(--spacing-sm);
        font-size: 1.25rem;
      }
      .static-page p {
        margin-bottom: var(--spacing-md);
        color: var(--color-text-muted);
      }
    `}</style>
  </Layout>
);
