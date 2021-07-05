import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
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
  const [isLandscape, setIsLandscape] = useState(null);

  useEffect(() => {}, []);

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

  useEffect(() => {
    // Init isLandscape state

    initIsLandscape();

    window.addEventListener("resize", initIsLandscape);

    // Init IsLoading state
    setIsLoading(true);

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

  const MainLayout = () => {
    return (
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
    );
  };

  return (
    <Page>
      <Head>
        <title>Magical Ball of Excuses</title>
      </Head>
      {isLandscape ? <MainLayout /> : <WrongDeviceScreen />}
    </Page>
  );
}
