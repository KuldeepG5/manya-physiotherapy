import { Footer, Header } from "@/components/common";
import ServiceDetailSection from "@/components/services-offered/service-details-section";

const ServiceDetails = () => {

  return (
    <main className="page-container">
      <Header />
      <ServiceDetailSection />
      <Footer />
    </main>
  );
};

export default ServiceDetails;
