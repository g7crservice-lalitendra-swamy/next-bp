// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import  styles from './page.module.css'
import { Button } from 'antd';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Next.js Best Practices</h1>
      <p className={styles.paragraph}>
        Welcome to the ultimate guide for writing clean, scalable, and efficient Next applications. 
        Learn industry-standard best practices, patterns, and techniques to improve your Next codebase.
      </p>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>What You&apos;ll Learn:</h3>
        <ul className={styles.list}>
          <li>Component structure and reusability</li>
          <li>State management best practices</li>
          <li>Performance optimization techniques</li>
          <li>Folder structure and project organization</li>
          <li>Best practices for hooks and context API</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link href="/best-practices">
          <Button type="primary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
