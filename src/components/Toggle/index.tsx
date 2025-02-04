import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5 flex items-center bg-gray-300 rounded-full transition ${
          checked ? "bg-blue-500" : ""
        }`}
      >
        <span
          className={`absolute left-1 w-4 h-4 bg-white rounded-full transition transform ${
            checked ? "translate-x-5" : ""
          }`}
        ></span>
      </button>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
};
