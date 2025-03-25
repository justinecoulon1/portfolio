import styles from './project-page.module.css';
import classNames from 'classnames';
import { Link } from '@/i18n/routing';

export default function ProjectPage() {
  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.buttonContainer}>
        <Link href={'/projects'} className={classNames(styles.backButton, 'nbShadow')}>
          ←
        </Link>
      </div>
    </div>
  );
}
