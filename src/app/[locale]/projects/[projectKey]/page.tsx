'use client';

import styles from './project-page.module.css';
import { Link } from '@/i18n/routing';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
import { Project, projectsList } from '@/projects/projects';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ProjectPage() {
  const params = useParams<{ projectKey: string }>();
  const projectKey = params?.projectKey;
  const project = projectsList.find((p) => p.projectKey === projectKey);
  if (!project) {
    notFound();
  }
  return (
    <div className={styles.projectPageContainer}>
      <ProjectHeaderSection project={project} />
      {project.sections.map((section, index) => (
        <ProjectPageSection key={`${project.name}-${index}`} section={section} project={project} />
      ))}
    </div>
  );
}

function ProjectPageSection({ section, project }: { section: string; project: Project }) {
  const t = useTranslations(project.projectKey);
  return (
    <div className={styles.projectPageSection}>
      <div className={styles.projectSectionContent}>
        <h2>{t(`${section}-title`)}</h2>
        <p>
          {t.rich(`${section}`, {
            br: () => <br />,
            dofusdb: (chunks) => (
              <a target="_blank" href="https://dofusdb.fr/">
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </div>
  );
}

function ProjectHeaderSection({ project }: { project: Project }) {
  return (
    <div className={styles.projectHeader}>
      <Link href={'/projects'} className={classNames(styles.backButton, 'nbShadow')}>
        ←
      </Link>
      <h2>{project.name}</h2>
      <Link target="_blank" href={project.githubLink} className={'nbShadow'}>
        <div className={classNames(styles.linkDiv)}>
          <Image
            className={classNames(styles.linkImage)}
            src={'/icons/github.png'}
            width={512}
            height={512}
            alt={'github'}
          />
        </div>
        <span>GitHub</span>
      </Link>
    </div>
  );
}
