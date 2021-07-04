import React, { useEffect } from "react";

import { Reveal } from "./RevealTexts.style";

function RevealTexts({ texts, index }) {
  const variants = (inverted) => {
    return {
      hidden: {
        opacity: 0,
        rotate: inverted ? 90 : -90,
        translateX: "-50%",
        transition: {
          duration: 2,
          delay: 0.5,
        },
      },
      visible: {
        opacity: 1,
        rotate: 0,
        translateX: "-50%",
        transition: {
          duration: 1,
          delay: 2.5,
        },
      },
    };
  };

  useEffect(() => {}, []);

  return (
    texts && (
      <>
        {texts.map((text, i) => {
          return (
            <Reveal
              key={i}
              variants={variants(i % 2 === 0)}
              animate={index == i ? "visible" : "hidden"}
            >
              {text}
            </Reveal>
          );
        })}
      </>
    )
  );
}

export default React.memo(RevealTexts);
