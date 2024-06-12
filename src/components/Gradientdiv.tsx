import React, { ReactNode, useRef } from "preact/compat";

import { useMousePosition } from "../hooks/use-mouse-position";

interface GradientDivProps {
  children: ReactNode;
  className: string;
  effectColor: string;
  backgroundColor: string;
}
export const GradientDiv: React.FC<GradientDivProps> = ({ children, className, effectColor, backgroundColor }) => {
  const elemRef = useRef(null);
  const position = useMousePosition(elemRef);
  return (
    <div
      ref={elemRef}
      style={{
        backgroundImage: `radial-gradient( circle at ${position.x}px ${position.y}px, ${effectColor}, ${backgroundColor} 45% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
