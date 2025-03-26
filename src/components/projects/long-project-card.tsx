import styles from './long-project-card.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { Project } from '@/projects/projects';

export default function LongProjectCard({ project }: { project: Project }) {
  const { name, projectKey, bannerBackgroundColor } = project;
  const t = useTranslations(projectKey);

  return (
    <div className={classNames(styles.longProjectCard, 'nbShadow')}>
      <div className={styles.projectCardImageContainer} style={{ backgroundColor: bannerBackgroundColor }}>
        <Image
          className={styles.projectImage}
          src={`/icons/logos/${projectKey}.png`}
          width={512}
          height={512}
          alt={'project picture'}
        />
      </div>
      <div className={styles.projectContentContainer}>
        <h3>{name}</h3>
        <div className={styles.projectDesc}>
          <p>{t('long-desc')}</p>
        </div>
      </div>
    </div>
  );
}
