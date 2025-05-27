import styles from './burger-menu-lightbox.module.css';
import classNames from 'classnames';
import { X } from 'lucide-react';
import React from 'react';

export default function BurgerMenuContent({ closeMenuLightbox }: { closeMenuLightbox: () => void }) {
  return (
    <div className={styles.burgerMenuContentContainer} onMouseDown={(e) => e.stopPropagation()}>
      <div className={styles.burgerMenuLightboxHeader}>
        <p className={styles.burgerMenuLogoText}>JUSTINE</p>
        <button className={classNames('nbShadow', styles.burgerMenuLightboxCloseButton)} onClick={closeMenuLightbox}>
          <X />
        </button>
      </div>
      <div className={styles.burgerMenuLightboxMenu}></div>
    </div>
  );
}
