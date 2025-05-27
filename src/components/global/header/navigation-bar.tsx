import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import styles from '@/components/global/header/header.module.css';
import classNames from 'classnames';
import { JSX } from 'react';
import { Code, House, User } from 'lucide-react';

type NavLink = {
  key: string;
  path: string;
  icon: JSX.Element;
};

export const navLinks: NavLink[] = [
  { key: 'main-title', path: '/', icon: <House className={styles.navIcon} /> },
  { key: 'projects', path: '/projects', icon: <Code className={styles.navIcon} /> },
  { key: 'about', path: '/about', icon: <User className={styles.navIcon} /> },
];

export default function NavigationBar() {
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
