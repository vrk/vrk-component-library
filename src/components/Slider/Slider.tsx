import React from "react";
import styles from './Slider.module.css'; // Import css modules stylesheet as styles

export interface SliderProps {
  label: string;
}

const Slider = ({
  label,
}: SliderProps) => {
  return <input type="range" className={styles.component} />
}

export default Slider;