import React from "react";
import styles from './Button.module.css'; // Import css modules stylesheet as styles

export interface ButtonProps {
  label: string;
  topBottomPadding?: number;
  leftRightPadding?: number;
  fontSize?: number;
  color?: "yellow"|"pink"
}

const colorSets = {
  yellow: {
    face: "#84433B",
    border: "#84433B",
    background: "#FDE5B4",
    insetBottom: "#F9A806",
    insetTop: "#FFF" 
  },
  pink: {
    face: "#F15AA3",
    border: "#D4126F",
    background: "#FEE6F2",
    insetBottom: "#F2A6CC",
    insetTop: "#FFF" 
  }
}

const Button = ({
  label,
  topBottomPadding = 6,
  leftRightPadding = 20,
  fontSize = 18,
  color = "yellow"
}: ButtonProps) => {
  const colorSet = colorSets[color];

  const style = {
    fontSize: `${fontSize}px`,
    padding: `${topBottomPadding}px ${leftRightPadding}px`,
    color: colorSet.face,
    border: `1px solid ${colorSet.border}`,
    background: colorSet.background,
    boxShadow: `0px -3px 0px 0px ${colorSet.insetBottom} inset, -2px 2px 0px 0px ${colorSet.insetTop} inset`
  }
  return <div>
    <button className={styles.button} style={style}>{label}</button>
  </div>
}

export default Button;