import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/themeConfig";
import GlobalReset from "../styles/reset";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      {pageLoading ? (
        <div style={{ color: "red", fontSize: "500px" }}>Loading</div>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

export default MyApp;
