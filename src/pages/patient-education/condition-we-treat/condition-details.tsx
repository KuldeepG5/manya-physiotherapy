import { Footer, Header } from "@/components/common";
import ConditionDetailSection from "@/components/conditions-we-treat/condition-details-section";

const ConditionDetails = () => {
  return (
    <main className="page-container">
      <Header />
      <ConditionDetailSection />
      <Footer />
    </main>
  );
};

export default ConditionDetails;
