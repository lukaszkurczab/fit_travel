import React from "react";
import "./styles.scss";

interface AlertProps {
  message: string;
  type: "success" | "error" | "warning";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Alert;
