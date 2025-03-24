import styles from './fourth-section.module.css';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

export default function FourthSection() {
  const t = useTranslations('fourth-section');

  const formAction = () => {};

  return (
    <div className={styles.fourthSectionContainer}>
      <form action={formAction} className={styles.form}>
        <h2>{t('form-title')}</h2>
        <div className={styles.firstLine}>
          <input
            className={classNames(styles.inputs, 'nbShadow')}
            type="text"
            placeholder={t('name-input-placeholder')}
          />
          <input
            className={classNames(styles.inputs, 'nbShadow')}
            type="text"
            placeholder={t('email-input-placeholder')}
          />
        </div>
        <div className={styles.secondLine}>
          <textarea className={classNames(styles.inputs, 'nbShadow')} placeholder={t('message-input-placeholder')} />
        </div>
        <div className={styles.submitFormDiv}>
          <input
            type="submit"
            className={classNames(styles.inputs, styles.submitFormButton, 'nbShadow')}
            value={t('submit-button')}
          />
        </div>
      </form>
    </div>
  );
}
