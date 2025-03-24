'use client';

import styles from './page.module.css';
import classNames from 'classnames';
import FirstSection from '@/components/home/first-section/first-section';
import FourthSection from '@/components/home/fourth-section/fourth-section';
import SecondSection from '@/components/home/second-section/second-section';
import ThirdSection from '@/components/home/third-section/third-section';

export default function Home() {
  return (
    <>
      <div className={classNames(styles.firstSection, styles.contentSection)}>
        <FirstSection />
      </div>
      <div id={'section-two'} className={classNames(styles.secondSection, styles.contentSection)}>
        <SecondSection />
      </div>
      <div id={'section-three'} className={classNames(styles.thirdSection, styles.contentSection)}>
        <ThirdSection />
      </div>
      <div id={'section-four'} className={classNames(styles.fourthSection, styles.contentSection)}>
        <FourthSection />
      </div>
    </>
  );
}
