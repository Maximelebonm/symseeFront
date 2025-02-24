import * as React from "react";
import './footerWave.css'


function FooterWave(props) {

  return (
    <svg
      id="prefix__Calque_1"
      className="vague-svg"
      data-name="Calque 1"
      viewBox="0 0 1920 326.55"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        
      </defs>
      <path
        className="vague"
        d="M-.97 21.92S168.98 62.78 470.9 66.39c304.73 3.64 929-59.1 1146.58-59.1 246.19 0 304.45 14.81 304.45 14.81v311.76H-.97V21.92z"
        fill="#29a3dd"
        strokeWidth={0}
      />
      <path
        className="vague"
        d="M1920 90.56s-575.35-75.95-816.25-75.95c-218.63 0-528.3 88.41-662.06 85.16S-1.93 61.98-1.93 61.98L0 326.55h1920V90.56z"
        strokeWidth={0}
        fill="#006aa2"
      />
      <path
        className="vague"
        d="M-2 116.71s276.98-100.1 488.2-100.1c235.35 0 565.14 95.33 798.97 95.33S1813.54 40.56 1923 42.19l-1 286.37H-2V116.71z"
        fill="#0c4a6e"
        strokeWidth={0}
      />
    </svg>
  );
}

const MemoFooterWave = React.memo(FooterWave);
export default MemoFooterWave;
