import { useThemeContext } from '@/components/contexts/theme-context';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>;
};

export default ThemeToggle;
