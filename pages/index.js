import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState, useEffect, useLayoutEffect } from "react";
import disableScroll from "disable-scroll";

import Footer from "../components/Footer/Footer";
import Cursor from "../components/Cursor/Cursor";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import WrongDeviceScreen from "../components/WrongDeviceScreen/WrongDeviceScreen";

const BannerWithNoSSR = dynamic(() => import("../components/Banner/Banner"), {
  ssr: false,
});

const Page = styled.div`
  height: auto;
`;

export default function Home() {
  const [cursorType, setCursorType] = useState("default");
  const [isLoading, setIsLoading] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(null);

  const changeCursorTo = (type) => {
    setCursorType(type);
  };

  const initIsLandscape = () => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    if (sizes.width < sizes.height) {
      setIsLandscape(false);
    } else {
      setIsLandscape(true);
    }
  };

  useLayoutEffect(() => {
    // Init isLandscape state
    initIsLandscape();

    // Init isLoading state
    setIsLoading(true);

    // Init isTouchDevice
    setIsTouchDevice(matchMedia("(hover: none)").matches);

    //Event listeners

    return () => {
      window.removeEventListener("resize", initIsLandscape);
    };
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
      {isLandscape ? (
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
            {!isTouchDevice && <Cursor cursorType={cursorType} />}
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
      ) : (
        <WrongDeviceScreen />
      )}
    </Page>
  );
}
