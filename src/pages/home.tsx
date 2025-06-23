import { LatestBlogs } from "@/components/blogs";
import { Footer, Header } from "@/components/common";
import {
  Hero,
  FaqSection,
  HeroBanner,
  OurClinic,
  RecoveryFlow,
  Specialities,
  WhatWeTreat,
} from "@/components/home";

const Home = () => {
  return (
    <main className="page-container">
      <Header />
      <Hero />
      <HeroBanner />
      <RecoveryFlow />
      <Specialities />
      <OurClinic />
      <WhatWeTreat />
      <LatestBlogs />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Home;
