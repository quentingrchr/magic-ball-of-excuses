import { useEffect, useState } from "react";

import { FooterContainer, FooterItem } from "./Footer.style";
import { DRIBBBLE, GITHUB, DEFAULT } from "../Cursor/Cursor.type";

export default function Footer({ changeCursorTo }) {
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    changeCursorTo(cursorType);
  }, [cursorType]);
  return (
    <FooterContainer
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.3, delay: 2.7 }}
    >
      <FooterItem
        onMouseEnter={() => {
          setCursorType(DRIBBBLE);
        }}
        onMouseLeave={() => {
          setCursorType(DEFAULT);
        }}
      >
        <a href="https://dribbble.com/michaelccraw" target="_blank">
          Design by <span>michaelccraw</span>
        </a>
      </FooterItem>
      <FooterItem
        onMouseEnter={() => {
          setCursorType(GITHUB);
        }}
        onMouseLeave={() => {
          setCursorType(DEFAULT);
        }}
      >
        <a href="https://github.com/quentingrchr" target="_blank">
          Made by <span>@quentingrchr</span>
        </a>
      </FooterItem>
    </FooterContainer>
  );
}
