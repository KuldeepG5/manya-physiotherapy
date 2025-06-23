import { Footer, Header } from "@/components/common";
import TherapyDetailSection from "@/components/therapies-offered/therapy-details-section";

const TherapyDetails = () => {

  return (
    <main className="page-container">
      <Header />
      <TherapyDetailSection />
      <Footer />
    </main>
  );
};

export default TherapyDetails;
