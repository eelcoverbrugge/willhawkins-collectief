import styles from "./StatementBand.module.css";

const words = ["Sympathiek", "Professioneel", "Sociaal", "Kwaliteit", "Multifunctioneel", "Flexibel"];

export default function StatementBand() {
  return (
    <div className={styles.band}>
      <div className={`container ${styles.inner}`}>
        {words.map((w, i) => (
          <span key={w} className={styles.item}>
            {w}
            {i < words.length - 1 && (
              <svg viewBox="0 0 8 8" width="8" height="8" className={styles.dot}>
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
