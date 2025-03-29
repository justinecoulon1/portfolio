import styles from './fourth-section.module.css';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useActionState, useId } from 'react';
import { z } from 'zod';

const sendMessageSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email().trim(),
  message: z.string().min(2).max(2000).trim(),
});

type SendStateForm = {
  error: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

type SendFormData = {
  name: string;
  email: string;
  message: string;
};

export default function FourthSection() {
  const t = useTranslations('fourth-section');
  const inputId = useId();

  const handleSend = (state: SendStateForm, data: FormData): SendStateForm => {
    const result = sendMessageSchema.safeParse(Object.fromEntries(data.entries()));
    if (result.error) {
      return {
        error: result.error.flatten().fieldErrors,
      };
    }

    const sendFormData: SendFormData = result.data;
    console.log(sendFormData);

    return {
      error: null,
    };
  };

  const [formState, formAction, isPending] = useActionState(handleSend, { error: null });

  return (
    <div className={styles.fourthSectionContainer}>
      <form action={formAction} className={styles.form}>
        <h2>{t('form-title')}</h2>
        <div className={styles.firstLine}>
          <div className={styles.firstLineInputDiv}>
            <input
              id={inputId + '-name'}
              name={'name'}
              className={classNames(styles.inputs, 'nbShadow')}
              type="text"
              placeholder={t('name-input-placeholder')}
            />
            {formState.error?.name && <span>{formState.error?.name.join(', ')}</span>}
          </div>
          <div className={styles.firstLineInputDiv}>
            <input
              id={inputId + '-email'}
              name={'email'}
              className={classNames(styles.inputs, 'nbShadow')}
              type="text"
              placeholder={t('email-input-placeholder')}
            />
            {formState.error?.email && <span>{formState.error?.email.join(', ')}</span>}
          </div>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.inputDiv}>
            <textarea
              id={inputId + '-message'}
              name={'message'}
              className={classNames(styles.inputs, 'nbShadow')}
              placeholder={t('message-input-placeholder')}
            />
            {formState.error?.message && <span>{formState.error?.message.join(', ')}</span>}
          </div>
        </div>
        <div className={styles.submitFormDiv}>
          <button type="submit" className={classNames(styles.inputs, styles.submitFormButton, 'nbShadow')}>
            {t('submit-button')}
          </button>
        </div>
      </form>
    </div>
  );
}
