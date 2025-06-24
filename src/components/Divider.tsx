// src/components/Divider.tsx
import React from "react";

interface DividerProps {
  className?: string;
  color?: string;
  thickness?: string;
  spacing?: string;
  withText?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const Divider = ({
  className = '',
  color = 'border-gray-200',
  thickness = 'border-t',
  spacing = 'my-6',
  withText,
  textAlign = 'center',
}: DividerProps) => {
  if (withText) {
    return (
      <div className={`relative ${spacing} ${className}`}>
        <div className="absolute inset-0 flex items-center">
          <div className={`w-full ${thickness} ${color}`}></div>
        </div>
        <div className={`relative flex justify-${textAlign}`}>
          <span className={`px-3 bg-white text-gray-500 text-sm ${textAlign === 'center' ? 'mx-auto' : ''}`}>
            {withText}
          </span>
        </div>
      </div>
    );
  }

  return <hr className={`${thickness} ${color} ${spacing} ${className}`} />;
};

export default Divider;