import styles from './second-section.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import classNames from 'classnames';
import { Link } from '@/i18n/routing';
import { almofus, fileShareTool, Project } from '@/projects/projects';

export default function SecondSection() {
  const t = useTranslations('second-section');

  return (
    <div className={styles.secondSectionContainer}>
      <h2>{t('section-title')}</h2>
      <div className={styles.projectSmallCardList}>
        <Link href={'/projects/almofus'}>
          <SmallProjectCard project={almofus} />
        </Link>
        <Link href={'/projects/file-share-tool'}>
          <SmallProjectCard project={fileShareTool} />
        </Link>
      </div>
    </div>
  );
}

function SmallProjectCard({ project }: { project: Project }) {
  const { name, projectKey, bannerBackgroundColor } = project;
  const t = useTranslations(projectKey);
  return (
    <div className={classNames(styles.projectCard, 'nbShadow')}>
      <div className={styles.projectCardImageContainer} style={{ backgroundColor: bannerBackgroundColor }}>
        <Image
          className={styles.projectImage}
          src={`/icons/banners/${projectKey}.png`}
          width={512}
          height={512}
          alt={'project picture'}
        />
      </div>
      <div className={styles.projectContentContainer}>
        <h3>{name}</h3>
        <div className={styles.projectDesc}>
          <p>{t('short-desc')}</p>
        </div>
      </div>
    </div>
  );
}
