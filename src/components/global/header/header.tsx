import styles from './header.module.css';
import ThemeToggle from '@/components/global/theme-toggle/theme-toggle';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.logoDiv}>Justine</div>
        <NavigationBar />
        <ThemeToggle />
      </div>
    </header>
  );
}

function NavigationBar() {
  const t = useTranslations('header');
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={'/'}>{t('main-title')}</Link>
        </li>
        <li>
          <Link href={'/projects'}>{t('projects')}</Link>
        </li>
        <li>
          <Link href={'/about'}>{t('about')}</Link>
        </li>
      </ul>
    </nav>
  );
}
