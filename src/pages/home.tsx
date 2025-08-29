import { LatestBlogs } from "@/components/blogs";
import { Footer, Header } from "@/components/common";
import {
  Hero,
  HeroBanner,
  OurClinic,
  RecoveryFlow,
  Specialities,
  WhatWeTreat,
  FounderSection,
} from "@/components/home";

const Home = () => {
  return (
    <main className="page-container">
      <Header />
      <Hero />
      <HeroBanner />
      <FounderSection />
      <RecoveryFlow />
      <Specialities />
      <OurClinic />
      <WhatWeTreat />
      <LatestBlogs />
      <Footer />
    </main>
  );
};

export default Home;
