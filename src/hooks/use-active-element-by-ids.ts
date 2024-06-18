import { useEffect, useState } from "preact/hooks"


// * it's a shitty code, if you've figured it out, 
// * then you're handsome and leave your contact somewhere, 
// * when I return to it, you'll explain it to me)))

// TODO refactoring

export const useActiveElementByIds = (arrayIds: string[]) => {

  const [isVisible, setIsVisible] = useState(arrayIds.reduce((acc, elem) => ({ ...acc, [elem]: false }), {}));

  const [active, setActive] = useState<string>(arrayIds[0]);

  let htmlElemets: HTMLElement[] = [];

  useEffect(() => {
    htmlElemets = Object.keys(isVisible).map((elem) => document.getElementById(elem));

    const handle = () => {
      if (Object.keys(isVisible).length > 0) {
        // setIsVisible(Object.keys(isVisible).reduce((acc, elem, index) => ({ ...acc, [elem]: elementIsVisibleInViewport(htmlElemets[index], index > 1 ? false : true) }), {}))
        setIsVisible(Object.keys(isVisible).reduce((acc, elem, index) => ({ ...acc, [elem]: elementIsVisibleInViewport(htmlElemets[index], true) }), {}))
      }
    };

    window.addEventListener("scroll", () => handle());

    handle();

    return () => {
      window.removeEventListener("scroll", () => handle());
    };
  }, [])

  useEffect(() => {
    Object.keys(isVisible).every((elem, index) => {
      // first
      if (index === 0 && isVisible[elem] === true) {
        setActive(elem);
        return false;
      } else
        // last
        if (index === Object.keys(isVisible).length - 1 && isVisible[elem] === true) {
          setActive(elem);
          return false;
        } else
          // other
          if (isVisible[elem] === true && isVisible[Object.keys(isVisible)[index + 1]] === false && index !== Object.keys(isVisible).length - 1 && index !== 0) {
            setActive(elem);
            return false;
          }

      return true;
    })

  }, [isVisible])

  return active;

}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};