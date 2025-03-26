'use client';

import styles from './projects-page.module.css';
import LongProjectCard from '@/components/projects/long-project-card';
import { projectsList } from '@/projects/projects';
import { Link } from '@/i18n/routing';

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      {projectsList.map((project) => (
        <Link key={project.projectKey} href={`/projects/${project.projectKey}`}>
          <LongProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
}
