import React from "react";
import "./styles.scss";

interface FooterProps {
  label: string;
  onClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ label, onClick }) => {
  return (
    <footer className="footer">
      <button className="footer-button" onClick={onClick}>
        {label}
      </button>
    </footer>
  );
};

export default Footer;
