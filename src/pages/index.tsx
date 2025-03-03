import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>Welcome to Flashift API Docs</h1>
        <p className={styles.heroSubtitle}>Seamless integration with Flashift's powerful API</p>
        <div className={styles.buttons}>
          <a className="button button--primary button--lg" href="/docs/intro">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Flashift API Docs"
      description="Comprehensive documentation for Flashift's API">
      <HomepageHeader />
      <main>
        {/* Add more sections or components here */}
      </main>
    </Layout>
  );
}
