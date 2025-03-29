import styles from './resume-section.module.css';
import { useTranslations } from 'next-intl';

export default function ResumeSection() {
  const t = useTranslations('resume-section');

  return (
    <div className={styles.resumeSectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{t('section-title')}</h2>
      </div>
      <div className={styles.resumeSectionContainer}></div>
    </div>
  );
}
