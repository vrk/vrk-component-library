import React from "react";
import styles from './Slider.module.css'; // Import css modules stylesheet as styles

export interface SliderProps {
  icon?: "size"|"brightness"|"contrast";
  min?: number;
  max?: number;
  initialValue?: number;
}

const Slider = ({
  icon = "size",
  min = 0,
  max = 100,
  initialValue = 100
}: SliderProps) => {
  const className = `${styles.component} ${styles[icon]}`;
  // TODO: Approach: Multiple classes that set the thumb image differently, toggle depending on parameter
  return <input type="range" className={className} min={min} max={max} />
}

export default Slider;