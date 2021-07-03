import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Footer from "../components/Footer/Footer";

const BannerWithNoSSR = dynamic(() => import("../components/Banner/Banner"), {
  ssr: false,
});

const Page = styled.div`
  height: auto;
`;

export default function Home() {
  return (
    <Page>
      <BannerWithNoSSR />
      <Footer />
    </Page>
  );
}
