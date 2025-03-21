'use client';

import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/global/theme-toggle/theme-toggle';

export default function Home() {
  const t = useTranslations('header');
  return (
    <div className={styles.page}>
      <ThemeToggle />
      <main className={styles.main}>{t('main-title')}</main>
    </div>
  );
}
