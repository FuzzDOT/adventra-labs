import { useNavigate } from 'react-router-dom';
import styles from './AnimatedLogo.module.css';

interface Props {
  scrolled: boolean;
  darkMode?: boolean;
}

export default function AnimatedLogo({ scrolled, darkMode = false }: Props) {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.logo} ${scrolled ? styles.collapsed : ''} ${darkMode ? styles.dark : ''}`}
      onClick={() => navigate('/')}
      aria-label="Adventra Labs — home"
    >
      {/* Full wordmark: "Adventra Labs" */}
      <span className={styles.full}>
        <span className={styles.wordA}>Adventra</span>
        <span className={styles.wordL}>Labs</span>
      </span>

      {/* Collapsed: "AL" — italic A, roman L */}
      <span className={styles.abbrev}>
        <span className={styles.abbrevA}>A</span>
        <span className={styles.abbrevL}>L</span>
      </span>
    </button>
  );
}
