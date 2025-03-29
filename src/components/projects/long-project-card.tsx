import styles from './long-project-card.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Project } from '@/projects/projects';

export default function LongProjectCard({ project }: { project: Project }) {
  const { name, projectKey, bannerBackgroundColor } = project;
  const t = useTranslations(projectKey);
  const tCard = useTranslations('long-project-card');
  const tProjectStatus = useTranslations('project-status');

  return (
    <div className={classNames(styles.longProjectCard, 'nbShadow')} style={{ backgroundColor: bannerBackgroundColor }}>
      <div className={styles.projectCardImageContainer}>
        <Image
          className={styles.projectImage}
          src={`/icons/logos/${projectKey}.png`}
          width={512}
          height={512}
          alt={'project picture'}
        />
      </div>
      <div className={styles.projectContentContainer}>
        <div className={styles.projectCardHeaderDiv}>
          <h3>{name}</h3>
          <div className={styles.projectStatus}>{tProjectStatus(project.status)}</div>
        </div>
        <div className={styles.projectDesc}>
          <p>{t('long-desc')}</p>
        </div>
        <div className={styles.projectTechnologies}>
          <p>
            <b>{tCard('project-technologies')}</b>
            {project.technologies.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
