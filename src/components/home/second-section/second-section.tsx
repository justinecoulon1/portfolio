import styles from './second-section.module.css';
import { useTranslations } from 'next-intl';

export default function SecondSection() {
  const t = useTranslations('second-section');

  return (
    <div className={styles.secondSectionContainer}>
      <h2>Featured Projects</h2>
    </div>
  );
}
