import React, { ReactNode } from "react";
import "./style.css";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
