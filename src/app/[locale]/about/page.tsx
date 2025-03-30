'use client';

import styles from './about-page.module.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutPageContainer}>
        <div className={styles.aboutPageHeaderSection}></div>
        <h2>{t('title')}</h2>
        <div className={styles.aboutPagePresentationSection}>
          <p>
            {t.rich('presentation', {
              br: () => <br />,
              projects: (chunks) => <Link href="/projects">{chunks}</Link>,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
