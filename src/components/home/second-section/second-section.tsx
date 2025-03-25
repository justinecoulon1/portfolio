import styles from './second-section.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import classNames from 'classnames';

export default function SecondSection() {
  const t = useTranslations('second-section');

  return (
    <div className={styles.secondSectionContainer}>
      <h2>{t('section-title')}</h2>
      <div className={styles.projectCardList}>
        <ProjectCard projectName={'Almofus'} />
        <ProjectCard projectName={'FileShareTool'} />
      </div>
    </div>
  );
}

function ProjectCard({ projectName }: { projectName: string }) {
  return (
    <div className={classNames(styles.projectCard, 'nbShadow')}>
      <div className={styles.projectCardImageContainer}>
        <Image
          className={styles.projectImage}
          src={'/icons/placeholder.png'}
          width={512}
          height={512}
          alt={'project picture'}
        />
      </div>
      <div className={styles.projectContentContainer}>
        <h3>{projectName}</h3>
        <div className={styles.projectDesc}>
          <p>Project description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias consequatur dolores doloribus
            explicabo fugit maiores minus odit pariatur perferendis quas saepe, sed sunt tempore totam vel voluptas
            voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
