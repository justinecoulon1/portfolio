'use client';

import styles from './header.module.css';
import ThemeToggle from '@/components/global/theme-toggle/theme-toggle';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import classNames from 'classnames';
import Image from 'next/image';
import LocalePicker from '@/components/global/locale-picker/locale-picker';

type NavLink = {
  key: string;
  path: string;
};

const navLinks: NavLink[] = [
  { key: 'main-title', path: '/' },
  { key: 'projects', path: '/projects' },
  { key: 'about', path: '/about' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <Link href={'/'} className={styles.logoDiv}>
          <Image className={styles.logo} src={'/icons/placeholder.png'} width={512} height={512} alt={'profile'} />
          Justine
        </Link>
        <NavigationBar />
        <div className={styles.pickersDiv}>
          <LocalePicker />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function NavigationBar() {
  const t = useTranslations('header');
  const activePage = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.key}>
            <Link className={classNames(activePage === navLink.path && styles.activeLink)} href={navLink.path}>
              <span>{t(navLink.key)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
