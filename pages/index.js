import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import disableScroll from "disable-scroll";

import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const BannerWithNoSSR = dynamic(() => import("../components/Banner/Banner"), {
  ssr: false,
});

const Page = styled.div`
  height: auto;
`;

export default function Home() {
  const [cursorType, setCursorType] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  const changeCursorTo = (type) => {
    setCursorType(type);
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isLoading]);

  return (
    <Page>
      <Head>
        <title>Magical Ball of Excuses</title>
      </Head>
      <>
        <LoadingScreen
          completeLoading={() => {
            setIsLoading(false);
          }}
          from={0}
          to={100}
          isLoading={isLoading}
        />
        <>
          <Cursor cursorType={cursorType} />
          <BannerWithNoSSR
            setCursorType={setCursorType}
            isLoading={isLoading}
            lockScroll={() => {
              setIsScrollLocked(true);
            }}
          />
          {!isLoading && <Footer changeCursorTo={changeCursorTo} />}
        </>
      </>
    </Page>
  );
}
