import { Footer, Header } from "@/components/common";
import SymptomsDetailSection from "@/components/symptoms-we-treat/symptoms-details-section";

const SymptomsDetails = () => {
  return (
    <main className="page-container">
      <Header />
      <SymptomsDetailSection />
      <Footer />
    </main>
  );
};

export default SymptomsDetails;
