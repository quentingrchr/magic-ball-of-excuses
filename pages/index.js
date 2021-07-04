import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";

const BannerWithNoSSR = dynamic(() => import("../components/Banner/Banner"), {
  ssr: false,
});

const Page = styled.div`
  height: auto;
`;

export default function Home() {
  const [cursorType, setCursorType] = useState("default");

  const changeCursorTo = (type) => {
    setCursorType(type);
  };

  return (
    <Page>
      <Head>
        <title>Magical Ball of Excuses</title>
      </Head>
      <Cursor cursorType={cursorType} />
      <BannerWithNoSSR setCursorType={setCursorType} />
      <Footer changeCursorTo={changeCursorTo} />
    </Page>
  );
}
