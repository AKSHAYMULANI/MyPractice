import styles from "./Button.module.css";

function Button({ disabled,children,onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
