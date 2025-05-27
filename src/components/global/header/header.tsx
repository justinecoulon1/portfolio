'use client';

import styles from './header.module.css';
import ThemeToggle from '@/components/global/theme-toggle/theme-toggle';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import LocalePicker from '@/components/global/locale-picker/locale-picker';
import HeaderBurgerMenuButton from '@/components/global/burger-menu-button/header-burger-menu-button';
import NavigationBar from '@/components/global/header/navigation-bar';

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
          <div className={styles.headerLocalePickerContainer}>
            <LocalePicker />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
