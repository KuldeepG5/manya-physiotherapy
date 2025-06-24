import { Banner, Footer, Header } from "@/components/common";
import SymptomsWeTreatSection from "@/components/symptoms-we-treat/symptoms-we-treat-section";

const SymptomsWeTreat = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Symptoms We Treat" />
      <SymptomsWeTreatSection />
      <Footer />
    </main>
  );
};

export default SymptomsWeTreat;
