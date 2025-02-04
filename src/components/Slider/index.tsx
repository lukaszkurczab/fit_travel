"use client";

import React, { useState, useRef } from "react";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  step = 1,
  onChange,
}) => {
  const [position, setPosition] = useState(((value - min) / (max - min)) * 100);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const onValueChange = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    const stepWidth = (sliderRef.current.offsetWidth / (max - min)) * step;

    const newValue = Math.round(
      (e.clientX - sliderRef.current.getBoundingClientRect().left) / stepWidth
    );

    if (newValue * step < min || newValue * step > max) return;

    setPosition(((newValue * step - min) / (max - min)) * 100);
    onChange(newValue);
  };

  const addListener = () => {
    if (sliderRef.current)
      sliderRef.current.addEventListener("mousemove", onValueChange);
  };

  const removeListener = () => {
    if (sliderRef.current)
      sliderRef.current.removeEventListener("mousemove", onValueChange);
  };

  window.addEventListener("mouseup", removeListener);

  return (
    <div
      className="relative flex items-center h-8  hover:cursor-pointer"
      onMouseDown={addListener}
      ref={sliderRef}
    >
      <div className="absolute w-full h-1.5 bg-gray-300 top-1/2 -translate-y-1/2">
        <div
          className="absolute h-full bg-orange-500 opacity-50"
          style={{ width: `${position}%` }}
        />
      </div>
      <div
        className="absolute w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2"
        style={{ left: `${position}%` }}
        ref={handleRef}
      />
    </div>
  );
};

export default Slider;
