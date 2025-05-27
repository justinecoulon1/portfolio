'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './header-burger-menu-button.module.css';
import { Menu } from 'lucide-react';
import BurgerMenuLightbox from '@/components/global/burger-menu-lightbox/burger-menu-lightbox';
import BurgerMenuContent from '@/components/global/burger-menu-lightbox/burger-menu-lightbox-content';

export default function HeaderBurgerMenuButton() {
  const [isLightboxOpened, setLightboxOpened] = useState(false);
  const handleCloseLightbox = () => {
    setLightboxOpened(false);
  };

  const handleOpenLightbox = () => {
    setLightboxOpened(true);
  };

  return (
    <>
      <BurgerMenuLightbox isLightboxOpened={isLightboxOpened} closeLightbox={handleCloseLightbox}>
        <BurgerMenuContent closeMenuLightbox={handleCloseLightbox} />
      </BurgerMenuLightbox>
      <button className={classNames('nbShadow', styles.headerBurgerMenu)} onClick={() => handleOpenLightbox()}>
        <Menu />
      </button>
    </>
  );
}
