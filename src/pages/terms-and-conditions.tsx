import { Banner, Footer, Header } from "@/components/common";
import { appConfig } from "@/constants/app-config";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Terms and Conditions" />
      <section className="px-4 py-10 max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-7 space-y-6">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by Manya Physiotherapy Clinic ("we", "our", "us"), whether in person or via our website, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold">2. Medical Disclaimer</h2>
        <p>
          All treatment plans and advice provided by our clinic are based on the assessment by our licensed physiotherapists. While we strive for accurate and personalized care, results may vary for each patient. No guarantees are made regarding the outcome of treatment.
        </p>

        <h2 className="text-xl font-semibold">3. Appointments and Cancellations</h2>
        <p>
          Patients are encouraged to arrive on time for appointments. Cancellations should be made at least 24 hours in advance. Failure to do so may result in cancellation charges or loss of appointment priority.
        </p>

        <h2 className="text-xl font-semibold">4. Payment Policy</h2>
        <p>
          Payment for services must be made at the time of the appointment unless other arrangements have been made in advance. We accept cash, UPI, and other available payment methods as displayed at the clinic.
        </p>

        <h2 className="text-xl font-semibold">5. Health Information</h2>
        <p>
          You agree to provide accurate and complete health information to ensure safe and effective treatment. We do not take responsibility for issues that arise due to omitted or inaccurate patient history.
        </p>

        <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
        <p>
          All content on our website, including images, logos, descriptions, and educational material, is the property of Manya Physiotherapy Clinic and may not be copied, distributed, or reproduced without written consent.
        </p>

        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
        <p>
          Manya Physiotherapy Clinic shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Your use of the clinic and its offerings is at your own risk.
        </p>

        <h2 className="text-xl font-semibold">8. Privacy</h2>
        <p>
          All patient data is handled according to our <Link to="/privacy-policy" className="text-blue-600">Privacy Policy</Link>. By using our services, you consent to the collection and use of your information as outlined in that policy.
        </p>

        <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
        <p>
          Manya Physiotherapy Clinic reserves the right to update or modify these terms at any time. Continued use of our services after changes indicates your acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>
          For any questions or concerns regarding these terms, please contact us at <strong>{appConfig.gmail}</strong> or visit our clinic at <strong>{appConfig.location}</strong>.
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
