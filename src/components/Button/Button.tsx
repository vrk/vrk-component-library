import React from "react";
import styles from './Button.module.css'; // Import css modules stylesheet as styles

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <div>
    <button className={styles.button}>{props.label}</button>
  </div>
}

export default Button;