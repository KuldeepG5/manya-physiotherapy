import { Banner, Footer, Header } from "@/components/common";
import TherapiesOfferedSection from "@/components/therapies-offered/therapies-offered-section";

const TherapiesOffered = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Therapies We Offer" />
      <TherapiesOfferedSection />
      <Footer />
    </main>
  );
};

export default TherapiesOffered;
