'use client';

import styles from './project-page.module.css';
import LongProjectCard from '@/components/projects/long-project-card';

export default function Project() {
  return (
    <div className={styles.projectPage}>
      <LongProjectCard />
    </div>
  );
}
