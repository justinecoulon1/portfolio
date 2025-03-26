'use client';

import styles from './project-page.module.css';
import { Link } from '@/i18n/routing';
import classNames from 'classnames';
import { notFound, useParams } from 'next/navigation';
import { Project, projectsList } from '@/projects/projects';
import Image from 'next/image';

export default function ProjectPage() {
  const { projectKey } = useParams<{ projectKey: string }>();
  const project = projectsList.find((p) => p.projectKey === projectKey);
  if (!project) {
    notFound();
  }
  return (
    <div className={styles.projectPageContainer}>
      <ProjectHeaderSection project={project} />
      {project.sections.map((section, index) => (
        <ProjectPageSection key={`${project.name}-${index}`} section={section} />
      ))}
    </div>
  );
}

function ProjectPageSection({ section }: { section: string }) {
  return <div className={styles.projectPageSection}>{section}</div>;
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
            src={'/icons/github-bgc.png'}
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
