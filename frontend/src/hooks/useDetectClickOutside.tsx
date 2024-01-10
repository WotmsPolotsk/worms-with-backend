import { RefObject, useEffect, useState } from "react";

export function useDetectClickOutside(ref: RefObject<any>) {
  const [isClickOutside, setIsClickOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current) {
        setIsClickOutside(!ref.current.contains(event.target));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    isClickOutside,
  };
}
