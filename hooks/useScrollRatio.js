import { invert } from "polished";
import { useEffect, useState } from "react";

const useScrollRatio = (total, scrollStart = 0, inverted = false, q = 4) => {
  const [ratio, setRatio] = useState(null);
  const scrollListener = () => {
    let ratio =
      (scrollStart + total - window.scrollY * q) / (total + scrollStart);

    if (ratio < 0) {
      ratio = 0;
    }
    if (inverted) {
      setRatio(Math.abs(parseFloat(ratio.toFixed(2)) - 1));
    } else {
      setRatio(parseFloat(ratio.toFixed(2)));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return function cleanupListener() {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return [ratio];
};

export default useScrollRatio;
