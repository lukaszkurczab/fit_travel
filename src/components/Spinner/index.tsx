import React from "react";
import "./styles.scss";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = "#007bff" }) => {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "transparent",
      }}
    ></div>
  );
};

export default Spinner;
