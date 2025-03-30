import styles from './contact-section.module.css';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { useActionState, useId } from 'react';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';

const sendMessageSchema = z.object({
  name: z.string().min(2, { message: 'invalid_name_length' }).max(50, { message: 'invalid_name_length' }).trim(),
  email: z.string().email({ message: 'invalid_email' }).trim(),
  message: z
    .string()
    .min(2, { message: 'invalid_message_length' })
    .max(2000, { message: 'invalid_message_length' })
    .trim(),
});

type SendStateForm = {
  error: {
    name?: string[];
    email?: string[];
    message?: string[];
    sendEmail?: string;
  } | null;
};

export default function ContactSection() {
  const t = useTranslations('contact-section');
  const inputId = useId();

  const handleSend = async (state: SendStateForm, data: FormData): Promise<SendStateForm> => {
    const result = sendMessageSchema.safeParse(Object.fromEntries(data.entries()));
    if (result.error) {
      return {
        error: result.error.flatten().fieldErrors,
      };
    }
    try {
      await axios.post('/api/contact', result.data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return { error: null };
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return { error: { sendEmail: error.response.data.error } };
      }
      return { error: { sendEmail: 'email_send_failed' } };
    }
  };

  const [formState, formAction, isPending] = useActionState(handleSend, { error: null });

  return (
    <div className={styles.contactSectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{t('form-title')}</h2>
      </div>
      <form action={formAction} className={styles.form}>
        <div className={styles.firstLine}>
          <div className={styles.firstLineInputDiv}>
            <input
              id={inputId + '-name'}
              name={'name'}
              className={classNames(styles.inputs, 'nbShadow')}
              type="text"
              placeholder={t('name-input-placeholder')}
            />
            {formState.error?.name && <span>{formState.error?.name.map((code) => t(code)).join(', ')}</span>}
          </div>
          <div className={styles.firstLineInputDiv}>
            <input
              id={inputId + '-email'}
              name={'email'}
              className={classNames(styles.inputs, 'nbShadow')}
              type="text"
              placeholder={t('email-input-placeholder')}
            />
            {formState.error?.email && <span>{formState.error?.email.map((code) => t(code)).join(', ')}</span>}
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
            {formState.error?.message && <span>{formState.error?.message.map((code) => t(code)).join(', ')}</span>}
          </div>
        </div>
        <div className={styles.submitFormDiv}>
          <button
            type="submit"
            className={classNames(styles.inputs, styles.submitFormButton, 'nbShadow')}
            disabled={isPending}
          >
            {isPending ? t('submitting') : t('submit-button')}
          </button>
          {formState.error?.sendEmail && <span>{t(formState.error?.sendEmail)}</span>}
        </div>
      </form>
    </div>
  );
}
