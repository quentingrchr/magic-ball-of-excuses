import styled from "styled-components";
import { motion } from "framer-motion";
import { opacify } from "polished";
const Star1 = () => {
  return (
    <svg
      width="210"
      height="534"
      viewBox="0 0 210 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M105 0L116.863 237.037C117.022 240.227 119.321 242.904 122.45 243.545L203.508 260.142C210.969 261.67 210.969 272.33 203.508 273.858L122.45 290.455C119.321 291.096 117.022 293.773 116.863 296.963L105 534L93.1373 296.963C92.9776 293.773 90.6791 291.096 87.5502 290.455L6.49162 273.858C-0.969469 272.33 -0.969466 261.67 6.49163 260.142L87.5502 243.545C90.6791 242.904 92.9776 240.227 93.1373 237.037L105 0Z"
        fill="#CF523E"
      />
    </svg>
  );
};
const Star2 = () => {
  return (
    <svg
      width="212"
      height="212"
      viewBox="0 0 212 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M103.015 3.48498C103.379 -0.112159 108.621 -0.11213 108.985 3.48501L117.887 91.43C118.031 92.8479 119.152 93.9691 120.57 94.1126L208.515 103.015C212.112 103.379 212.112 108.621 208.515 108.985L120.57 117.887C119.152 118.031 118.031 119.152 117.887 120.57L108.985 208.515C108.621 212.112 103.379 212.112 103.015 208.515L94.1126 120.57C93.9691 119.152 92.8479 118.031 91.43 117.887L3.48498 108.985C-0.112159 108.621 -0.11213 103.379 3.48501 103.015L91.43 94.1126C92.8479 93.9691 93.9691 92.8479 94.1126 91.43L103.015 3.48498Z"
        fill="#CF523E"
      />
    </svg>
  );
};
const Star3 = () => {
  return (
    <svg
      width="422"
      height="234"
      viewBox="0 0 422 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M208.039 3.3018C208.582 -0.0592609 213.418 -0.0592412 213.961 3.30182L230.013 102.503C230.237 103.885 231.388 104.929 232.785 105.017L422 117L232.785 128.983C231.388 129.071 230.237 130.115 230.013 131.497L213.961 230.698C213.418 234.059 208.582 234.059 208.039 230.698L191.987 131.497C191.763 130.115 190.612 129.071 189.215 128.983L0 117L189.215 105.017C190.612 104.929 191.763 103.885 191.987 102.503L208.039 3.3018Z"
        fill="#CF523E"
      />
    </svg>
  );
};

const Stars = [<Star1 key={1} />, <Star2 key={2} />, <Star3 key={3} />];

const StarContainer = styled(motion.div)`
  position: absolute;
  z-index: 6;
  height: ${(p) => p.height};
  top: ${(p) => p.y};
  left: ${(p) => p.x};
  svg {
    height: 100%;
    path {
      fill: ${(p) => p.theme.colors[p.color]};
    }
  }
`;

export default function Star({ variant, delay, ...rest }) {
  if (variant === undefined) {
    return null;
  }

  return (
    <StarContainer
      animate={{ scale: [0, 1], rotate: [45, 0] }}
      transition={{ duration: 0.5, delay }}
      {...rest}
    >
      {Stars[variant]}
    </StarContainer>
  );
}
