import styles from './first-section.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { scrollToDiv } from '@/app/scroll-utils';
import { useTranslations } from 'next-intl';

export default function FirstSection() {
  const t = useTranslations('first-section');
  return (
    <div className={styles.firstSectionContainer}>
      <div className={styles.profilePictureSection}>
        <div
          onClick={() => scrollToDiv('section-three')}
          className={classNames(styles.profilePictureContainer, 'nbShadow')}
        >
          <Image
            className={styles.profilePicture}
            src={'/icons/placeholder.png'}
            width={512}
            height={512}
            alt={'profile'}
          />
        </div>
        <div className={styles.linksSection}>
          <LinksSection />
        </div>
      </div>
      <div className={styles.presentationSection}>
        <div className={styles.presentationTitle}>
          <h1>{t('section-title')}</h1>
        </div>
        <div className={styles.presentationDescription}>
          <p>DESCRIPTION HAHAHA LALALA HAHAHAL LALALALAALAL</p>
        </div>
      </div>
    </div>
  );
}

function LinksSection() {
  const t = useTranslations('first-section');
  return (
    <>
      <div className={classNames(styles.linkDiv, styles.linkedin, 'nbShadow')}>
        <Link target="_blank" href={'https://www.linkedin.com/in/justine-coulon-876381283/'}>
          <Image
            className={classNames(styles.linkImage)}
            src={'/icons/linkedin.png'}
            width={512}
            height={512}
            alt={'linkedin'}
          />
        </Link>
      </div>
      <div className={classNames(styles.linkDiv, 'nbShadow')}>
        <Link target="_blank" href={'https://github.com/justinecoulon1'}>
          <Image
            className={classNames(styles.linkImage)}
            src={'/icons/github-bgc.png'}
            width={512}
            height={512}
            alt={'github'}
          />
        </Link>
      </div>
      <div className={classNames(styles.linkDiv, styles.resumeDiv, 'nbShadow')}>
        <Link
          target="_blank"
          href={
            'https://www.dropbox.com/scl/fi/8buadqfj1tfm6sayr2csm/JustineCoulon-Resume.pdf?rlkey=mlxarusenw3iiiftmcmrhlu6m&st=v8xttm35&dl=0'
          }
        >
          <Image
            className={classNames(styles.downloadImage, styles.download)}
            src={'/icons/download.png'}
            width={512}
            height={512}
            alt={'download'}
          />
          <p>{t('resume')}</p>
        </Link>
      </div>
    </>
  );
}
