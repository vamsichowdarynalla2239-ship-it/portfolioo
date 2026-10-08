import React from 'react';

// The 8-point rounded Starburst doodle in luminous gold/accent
export const CobaltStarburst = ({ className = "w-16 h-16", color = "#C9A84C" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke={color} strokeWidth="7" strokeLinecap="round">
      <line x1="50" y1="10" x2="50" y2="90" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="22" y1="22" x2="78" y2="78" />
      <line x1="78" y1="22" x2="22" y2="78" />
    </g>
  </svg>
);

