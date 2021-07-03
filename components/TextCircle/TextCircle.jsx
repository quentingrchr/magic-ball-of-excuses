import useScrollRatio from "../../hooks/useScrollRatio";
import { Bottom, Container, Letter, Top } from "./TextCircle.style";
import { colors } from "./TextCircle.data";

export default function TextCircle({ bottomText, topText }) {
  const [ratio] = useScrollRatio(window.innerHeight);

  const step = 10;
  const halfRotation = 180;

  const splitText = {
    bottom: bottomText.split("").reverse(),
    top: topText.split(""),
  };
  const radius = {
    top: step * (splitText.top.length - 1),
    bottom: step * (splitText.bottom.length - 1),
  };

  return (
    <Container style={{ opacity: ratio }}>
      <Top offsetRotate={(-1 * radius.top) / 2}>
        {splitText.top.map((letter, i) => {
          return (
            <Letter
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 * i + 1 }}
              rotate={step * i}
              key={i}
              color={colors.top[i]}
            >
              <i>{letter}</i>
            </Letter>
          );
        })}
      </Top>
      <Bottom offsetRotate={(-1 * radius.bottom) / 2 + halfRotation}>
        {splitText.bottom.map((letter, i) => {
          return (
            <Letter
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 * i + 1 }}
              rotate={step * i}
              key={i}
              color={colors.bottom[i]}
            >
              <i>{letter}</i>
            </Letter>
          );
        })}
      </Bottom>
    </Container>
  );
}
