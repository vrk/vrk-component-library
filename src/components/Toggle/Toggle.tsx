import React from "react";
import styles from './Toggle.module.css';

export interface ToggleProps {
  isOn: boolean;
  width?: number;
}

const Toggle = ({
  isOn = false,
  width = 50
}: ToggleProps) => {
  const style = {
    width: `${width}px`,
    height: `${width / 2}px`
  }
  return <div className={styles.component} style={style}>
    <input type="checkbox" id="switch" checked={isOn} />
    <label htmlFor="switch">toggle</label>
  </div>
}

export default Toggle;