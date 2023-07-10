import React from "react";
import styles from './Select.module.css'; // Import css modules stylesheet as styles

export interface SelectProps {
  ref?: React.RefObject<HTMLInputElement>;
}

const Select = ({ children }: React.PropsWithChildren<SelectProps>) => {
  const style = {
  }
  return <select className={styles.component} style={style}>
    {children}
  </select>
}

export default Select;