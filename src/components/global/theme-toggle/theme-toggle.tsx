'use client';
import { useTheme } from 'next-themes';
import styles from './theme-toggle.module.css';
import classNames from 'classnames';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <label className={classNames(styles.switch, 'nbShadow')}>
      <input
        type="checkbox"
        checked={resolvedTheme === 'light'}
        onChange={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
      <span className={styles.slider}></span>
    </label>
  );
}
