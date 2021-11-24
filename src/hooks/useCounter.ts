import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
const MAXIMUN_COUNT = 10;
//? Inicio

export const useCounter = ({ maxCount = 1 }) => {
  //? props
  const [counter, setCounter] = useState(1);
  //? useRef
  const counterElement = useRef<any>(null);
  const tl = useRef(gsap.timeline());
  //? effect
  useEffect(() => {
    if (counter < maxCount) return;
    tl.current.play(0);
  }, [counter]);
  useLayoutEffect(() => {
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);
  //? funciones
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };
  return { handleClick, counterElement, counter };
};
