import React from "react";
import "./styles.scss";

interface SidebarProps {
  items: string[];
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li
            key={index}
            className="sidebar-item"
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
