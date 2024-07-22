import React, { ReactNode, useRef, useEffect, useState } from "preact/compat";

import { useMousePosition } from "../hooks/use-mouse-position";

interface GradientDivProps {
  children: ReactNode;
  className: string;
  effectColor: string;
  backgroundColor: string;
}
export const GradientDiv: React.FC<GradientDivProps> = ({
  children,
  className,
  effectColor,
  backgroundColor,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isFull = width >= 1024;

  const elemRef = useRef(null);
  const position = isFull ? useMousePosition(elemRef) : false;

  return (
    <div
      ref={elemRef}
      style={{
        backgroundImage:
          isFull && position
            ? `radial-gradient( circle at ${position.x}px ${position.y}px, ${effectColor}, ${backgroundColor} 12.5% )`
            : "none",
      }}
      className={className}
    >
      {children}
    </div>
  );
};
