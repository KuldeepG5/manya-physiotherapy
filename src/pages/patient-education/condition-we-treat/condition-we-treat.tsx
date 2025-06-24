import { Banner, Footer, Header } from "@/components/common";
import ConditionsSection from "@/components/conditions-we-treat/conditions-section";

const ConditionsWeTreat = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Conditions We Treat" />
      <ConditionsSection />
      <Footer />
    </main>
  );
};

export default ConditionsWeTreat;
