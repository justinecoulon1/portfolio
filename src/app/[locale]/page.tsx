'use client';

import styles from './page.module.css';
import classNames from 'classnames';
import FirstSection from '@/components/home/first-section/first-section';
import FourthSection from '@/components/home/fourth-section/fourth-section';
import SecondSection from '@/components/home/second-section/second-section';
import ThirdSection from '@/components/home/third-section/third-section';
import { useRef } from 'react';

export default function Home() {
  const fourthSectionRef = useRef<HTMLDivElement>(null);
  const scrollToFourthSection = () => {
    if (fourthSectionRef.current) {
      fourthSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.homePageContainer}>
      <div className={classNames(styles.firstSection, styles.contentSection)}>
        <FirstSection onProfilePictureClick={scrollToFourthSection} />
      </div>
      <div className={classNames(styles.secondSection, styles.contentSection)}>
        <SecondSection />
      </div>
      <div className={classNames(styles.thirdSection, styles.contentSection)}>
        <ThirdSection />
      </div>
      <div className={classNames(styles.fourthSection, styles.contentSection)} ref={fourthSectionRef}>
        <FourthSection />
      </div>
    </div>
  );
}
