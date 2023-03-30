import clsx from "clsx";

import styles from "./Input.module.css";

const Input = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
