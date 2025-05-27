import styles from './burger-menu-lightbox.module.css';
import classNames from 'classnames';
import { X } from 'lucide-react';
import React from 'react';
import LocalePicker from '@/components/global/locale-picker/locale-picker';
import { navLinks } from '@/components/global/header/navigation-bar';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function BurgerMenuContent({ closeMenuLightbox }: { closeMenuLightbox: () => void }) {
  const t = useTranslations('header');
  const activePage = usePathname();
  return (
    <div className={styles.burgerMenuContentContainer} onMouseDown={(e) => e.stopPropagation()}>
      <div className={styles.burgerMenuLightboxHeader}>
        <div className={styles.burgerMenuLightboxHeaderTitle}>
          <p className={styles.burgerMenuLogoText}>JUSTINE</p>
          <LocalePicker />
        </div>
        <button className={classNames('nbShadow', styles.burgerMenuLightboxCloseButton)} onClick={closeMenuLightbox}>
          <X />
        </button>
      </div>
      <div className={styles.burgerMenuLightboxMenu}>
        <ul className={styles.navUl}>
          {navLinks.map((navLink) => (
            <li key={navLink.key} className={styles.navLi}>
              <Link
                className={classNames(styles.navLink, activePage === navLink.path && styles.activeLink)}
                href={navLink.path}
                onClick={closeMenuLightbox}
              >
                <span className={styles.navText}>{t(navLink.key)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
