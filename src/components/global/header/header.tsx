'use client';

import styles from './header.module.css';
import ThemeToggle from '@/components/global/theme-toggle/theme-toggle';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import classNames from 'classnames';
import Image from 'next/image';
import LocalePicker from '@/components/global/locale-picker/locale-picker';
import { Code, House, User } from 'lucide-react';
import { JSX } from 'react';
import HeaderBurgerMenuButton from '@/components/global/burger-menu-button/header-burger-menu-button';

type NavLink = {
  key: string;
  path: string;
  icon: JSX.Element;
};

const navLinks: NavLink[] = [
  { key: 'main-title', path: '/', icon: <House className={styles.navIcon} /> },
  { key: 'projects', path: '/projects', icon: <Code className={styles.navIcon} /> },
  { key: 'about', path: '/about', icon: <User className={styles.navIcon} /> },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.headerLeftDiv}>
          <div className={styles.headerMenuDiv}>
            <HeaderBurgerMenuButton />
          </div>
          <Link href={'/'} className={styles.logoDiv}>
            <Image className={styles.logo} src={'/icons/placeholder.png'} width={512} height={512} alt={'profile'} />
            <p className={styles.logoText}>Justine</p>
          </Link>
        </div>

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
      <ul className={styles.navUl}>
        {navLinks.map((navLink) => (
          <li key={navLink.key} className={styles.navLi}>
            <Link
              className={classNames(styles.navLink, activePage === navLink.path && styles.activeLink)}
              href={navLink.path}
            >
              <span className={styles.navText}>{t(navLink.key)}</span>
              <span className={styles.navIconDiv}>{navLink.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
