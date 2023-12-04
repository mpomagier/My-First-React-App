import styles from "./ColumnForm.module.scss";
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";
import { useState } from "react";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon }, props.columnId);
    setTitle("");
    setIcon("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.inputText}>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span className={styles.inputText}>Icon:</span>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />

      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
