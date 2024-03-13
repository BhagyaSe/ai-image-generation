import styles from "./Input.module.css";

export default function Input({ value, onChange, onClick }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.text}
        placeholder="Your prompt here..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.btn} onClick={onClick}>
        Send
      </button>
    </div>
  );
}
