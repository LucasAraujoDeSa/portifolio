import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about";
import { Container } from "../components/container";
import { NavBar } from "../components/navbar";
import { Experiences } from "../components/experiences";
import { Skills } from "../components/skills";
import { Contacts } from "../components/contacts";
import { Social } from "../components/social";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lucas de Sa</title>
        <meta name="Lucas de Sa" content="Lucas de Sa Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Container>
        <About />
        <Experiences />
        <Skills />
        <Contacts />
      </Container>
      <Footer />

      <Social />
    </div>
  );
};

export default Home;
