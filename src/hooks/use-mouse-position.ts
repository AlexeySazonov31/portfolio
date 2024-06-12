import { RefObject, useEffect, useState } from "preact/compat";

export const useMousePosition = (elemRef: RefObject<HTMLDivElement>) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, yByWindow: 0 });
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const updateMousePosition = (event: any) => {
      const rect = elemRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y, yByWindow: event.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const updateScrollPosition = () => {
      const y = window.scrollY;
      setScrollTop(y);
    };
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", () => updateScrollPosition);
    };
  }, [])

  useEffect(() => {
    setMousePosition({ ...mousePosition, y: scrollTop + mousePosition.yByWindow })
  }, [scrollTop])

  return ({ x: mousePosition.x, y: mousePosition.y });
};