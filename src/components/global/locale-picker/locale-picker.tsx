import classNames from 'classnames';
import styles from './locale-picker.module.css';
import { useCallback } from 'react';
import { Locales, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'use-intl';
import { useParams } from 'next/navigation';

export default function LocalePicker() {
  const currentLocale = useLocale() as Locales;
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const changeLocale = useCallback(
    (newLocale: Locales) => {
      // @ts-expect-error expected type error on params
      router.replace({ pathname, params }, { locale: newLocale });
    },
    [params, pathname, router],
  );

  return (
    <div className={classNames(styles.localePickerContainer, 'nbShadow')}>
      {Object.values(Locales).map((locale) => (
        <div
          key={locale}
          className={classNames(styles.option, locale === currentLocale && styles.selected)}
          onClick={() => changeLocale(locale)}
        >
          <span className={styles.span}>{locale.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}
