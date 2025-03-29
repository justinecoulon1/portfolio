'use client';

import styles from './page.module.css';
import classNames from 'classnames';
import FirstSection from '@/components/home/first-section/first-section';
import ContactSection from '@/components/home/contact-section/contact-section';
import ProjectSection from '@/components/home/project-section/project-section';
import SkillsSection from '@/components/home/skills-section/skills-section';
import { useRef } from 'react';
import ResumeSection from '@/components/home/resume-section/resume-section';

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
      <div className={classNames(styles.resumeSection, styles.contentSection)}>
        <ResumeSection />
      </div>
      <div className={classNames(styles.projectSection, styles.contentSection)}>
        <ProjectSection />
      </div>
      <div className={classNames(styles.skillsSection, styles.contentSection)}>
        <SkillsSection />
      </div>
      <div className={classNames(styles.lastSection, styles.contentSection)} ref={fourthSectionRef}>
        <ContactSection />
      </div>
    </div>
  );
}
