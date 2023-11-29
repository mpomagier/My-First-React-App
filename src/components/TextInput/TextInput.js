import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      text={props.text}
    />
  );
};

export default TextInput;
