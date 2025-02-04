import React from "react";
import "./styles.scss";

interface FormProps {
  label: string;
  onClick: () => void;
}

const Form: React.FC<FormProps> = ({ label, onClick }) => {
  return (
    <form className="form">
      <button type="button" className="form-button" onClick={onClick}>
        {label}
      </button>
    </form>
  );
};

export default Form;
