import styles from './long-project-card.module.css';
import Image from 'next/image';
import classNames from 'classnames';

export default function LongProjectCard() {
  return (
    <div className={classNames(styles.longProjectCard, 'nbShadow')}>
      <div className={styles.projectCardImageContainer}>
        <Image
          className={styles.projectImage}
          src={'/icons/typescript.png'}
          width={512}
          height={512}
          alt={'project picture'}
        />
      </div>
      <div className={styles.projectContentContainer}>
        <h3>Project</h3>
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
