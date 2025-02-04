"use client";

import React, { useState, useEffect, useRef } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  values: [number, number];
  step?: number;
  onChange: (value: [number, number]) => void;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  values,
  step = 1,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(values ? values[0] : min);
  const [maxValue, setMaxValue] = useState(values ? values[1] : max);
  const [stepWidth, setStepWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const minRef = useRef<HTMLDivElement>(null);
  const maxRef = useRef<HTMLDivElement>(null);
  let minPos = ((minValue - min) / (max - min)) * 100;
  let maxPos = ((maxValue - min) / (max - min)) * 100;

  useEffect(() => {
    if (values) {
      setMinValue(values[0]);
      setMaxValue(values[1]);
    }
  }, [values]);

  useEffect(() => {
    if (slideRef.current) {
      setStepWidth((slideRef.current.offsetWidth / (max - min)) * step);
    }
  }, [slideRef, max, min, step]);

  const addListener = (ref: HTMLDivElement | null) => {
    if (ref === minRef.current) {
      slideRef.current?.addEventListener("mousemove", onMinChange);
      maxRef.current?.removeEventListener("mousemove", onMaxChange);
    } else if (ref === maxRef.current) {
      slideRef.current?.addEventListener("mousemove", onMaxChange);
      minRef.current?.removeEventListener("mousemove", onMinChange);
    }
  };

  const removeListener = () => {
    slideRef.current?.removeEventListener("mousemove", onMinChange);
    slideRef.current?.removeEventListener("mousemove", onMaxChange);
  };

  const onMinChange = (e: MouseEvent) => {
    const newValue = Math.round(
      (e.clientX - slideRef.current!.getBoundingClientRect().left) / stepWidth
    );
    if (newValue < maxValue) {
      setMinValue(Math.max(newValue, min));
      minPos = ((minValue - min) / (max - min)) * 100;
      onChange([Math.max(newValue, min), values[1]]);
    }
  };

  const onMaxChange = (e: MouseEvent) => {
    const newValue = Math.round(
      (e.clientX - slideRef.current!.getBoundingClientRect().left + 35) /
        stepWidth
    );
    if (newValue > minValue) {
      setMaxValue(Math.min(newValue, max));
      maxPos = ((minValue - min) / (max - min)) * 100;
      onChange([values[0], Math.min(newValue, max)]);
    }
  };

  window.addEventListener("mouseup", removeListener);

  return (
    <div className="relative flex items-center h-8" ref={slideRef}>
      <div className="absolute w-full h-1.5 bg-gray-300 top-1/2 -translate-y-1/2">
        <div
          className="absolute h-full bg-orange-400 opacity-50"
          style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
        />
      </div>
      <div
        className="absolute w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2 hover:cursor-pointer"
        style={{ left: `${minPos}%` }}
        ref={minRef}
        onMouseDown={() => addListener(minRef.current)}
      />
      <div
        className="absolute w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2 hover:cursor-pointer"
        style={{ left: `${maxPos}%` }}
        ref={maxRef}
        onMouseDown={() => addListener(maxRef.current)}
      />
    </div>
  );
};

export default RangeSlider;
