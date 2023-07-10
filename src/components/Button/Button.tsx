import React from "react";
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import logo from '../../assets/images/bento.png';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <div>
    <button className={styles.button}>{props.label}</button>
    <img src={logo}/>
  </div>
}

export default Button;