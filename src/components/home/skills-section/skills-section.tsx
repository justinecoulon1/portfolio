import styles from './skills-section.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import classNames from 'classnames';

export default function SkillsSection() {
  const t = useTranslations('skills-section');

  return (
    <div className={styles.skillsSectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{t('section-title')}</h2>
      </div>
      <div className={styles.skillList}>
        <SkillCard imageSrc={'/icons/TypeScript.png'} imageText={'TypeScript'} />
        <SkillCard imageSrc={'/icons/JavaScript.png'} imageText={'JavaScript'} />
        <SkillCard imageSrc={'/icons/Node.js.png'} imageText={'Node.js'} />
        <SkillCard imageSrc={'/icons/Nest.js.png'} imageText={'NestJs'} />
        <SkillCard whiteBackground={true} imageSrc={'/icons/Express.png'} imageText={'Express'} />
        <SkillCard imageSrc={'/icons/Java.png'} imageText={'Java'} />
        <SkillCard imageSrc={'/icons/Spring.png'} imageText={'Spring-Boot'} />
        <SkillCard imageSrc={'/icons/React.png'} imageText={'React'} />
        <SkillCard whiteBackground={true} imageSrc={'/icons/Next.js.png'} imageText={'Next'} />
        <SkillCard imageSrc={'/icons/HTML5.png'} imageText={'HTML'} />
        <SkillCard imageSrc={'/icons/CSS3.png'} imageText={'CSS'} />
        <SkillCard imageSrc={'/icons/PostgreSQL.png'} imageText={'PostgreSQL'} />
        <SkillCard imageSrc={'/icons/MongoDB.png'} imageText={'MongoDB'} />
        <SkillCard imageSrc={'/icons/Git.png'} imageText={'Git'} />
      </div>
    </div>
  );
}

function SkillCard({
  imageSrc,
  imageText,
  whiteBackground = false,
}: {
  imageSrc: string;
  imageText: string;
  whiteBackground?: boolean;
}) {
  return (
    <div className={styles.skillCardDiv}>
      <div className={classNames(styles.skillImageContainer, whiteBackground && styles.whiteBackground)}>
        <Image className={styles.skillImage} width={512} height={512} src={imageSrc} alt={'skill logo'} />
      </div>
      <p>{imageText}</p>
    </div>
  );
}
