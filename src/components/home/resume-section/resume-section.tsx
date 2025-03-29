import styles from './resume-section.module.css';
import { useTranslations } from 'next-intl';
import { ResumeExperienceInfo, resumeExperiences } from '@/resume/resume-experiences';

export default function ResumeSection() {
  const t = useTranslations('resume-section');

  return (
    <div className={styles.resumeSectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{t('section-title')}</h2>
      </div>
      <div className={styles.resumeSectionContentContainer}>
        {resumeExperiences.map((exp) => (
          <ResumeExperienceCard key={exp.resumeExperienceKey} resumeExperienceInfo={exp} />
        ))}
      </div>
    </div>
  );
}

function ResumeExperienceCard({ resumeExperienceInfo }: { resumeExperienceInfo: ResumeExperienceInfo }) {
  const t = useTranslations(resumeExperienceInfo.resumeExperienceKey);

  return (
    <div className={styles.resumeCardSection}>
      <p className={styles.resumeExperienceDate}>
        {resumeExperienceInfo.startDate} | {resumeExperienceInfo.endDate}
      </p>
      <div className={styles.resumeExperienceInfo}>
        <h3>{t('title')}</h3>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}
