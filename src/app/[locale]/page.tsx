import styles from './page.module.css';
import { useLocale, useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('header');
  console.log(useLocale());
  return (
    <div className={styles.page}>
      <main className={styles.main}>{t('main-title')}</main>
    </div>
  );
}
