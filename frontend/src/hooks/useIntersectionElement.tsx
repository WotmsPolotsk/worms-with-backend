import { useState, useEffect } from "react";

interface IntersectionElementProps {
  ref: React.RefObject<any>;
}

export const useIntersectionElement = ({ ref }: IntersectionElementProps) => {
  const [isShowed, setIsShowed] = useState(false);

  const onEntry = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsShowed(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onEntry, { threshold: [0.5] });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { isShowed };
};
