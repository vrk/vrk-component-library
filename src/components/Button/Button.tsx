import React from "react";
import "./Button.css";
import logo from '../../assets/images/bento.png';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <div>
    <button className="Button">{props.label}</button>
    <img src={logo}/>
  </div>
}

export default Button;