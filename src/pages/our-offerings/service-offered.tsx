import { Banner, Footer, Header } from "@/components/common";
import ServicessOfferedSection from "@/components/services-offered/services-offered-section";

const ServiceOffered = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Service We Offer" />
      <ServicessOfferedSection />
      <Footer />
    </main>
  );
};

export default ServiceOffered;
