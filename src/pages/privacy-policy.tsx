import { Banner, Footer, Header } from "@/components/common";
import { appConfig } from "@/constants/app-config";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="page-container">
      <Header />

      <Banner title="Privacy Policy" />

      <div className="privacy-container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="privacy-header"
          role="banner"
        >
          <h1>Privacy Policy</h1>
          <p>Effective Date: June 25, 2025</p>
        </motion.div>

        {/* Policy Content Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="privacy-content"
        >
          <h2>Introduction</h2>
          <p>
            This Privacy Policy outlines how Manya Physiotherapy Clinic ("we",
            "our", or "the Clinic") collects, uses, and protects the personal
            and medical information of patients and visitors through our
            website, mobile applications, and in-person services. By using our
            services, you agree to the practices described in this policy.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of data:</p>
          <ul className="list-disc list-inside">
            <li>
              Personal identification details (name, age, gender, contact
              information)
            </li>
            <li>Medical history and treatment records</li>
            <li>Appointment details and feedback</li>
            <li>
              Device and usage information (if using our website or digital
              tools)
            </li>
          </ul>

          <h2 className="mt-8">How We Use Your Information</h2>
          <p>Your data is used to:</p>
          <ul className="list-disc list-inside">
            <li>Deliver personalized physiotherapy treatment and advice</li>
            <li>Schedule and manage appointments</li>
            <li>Improve clinic operations and patient experience</li>
            <li>Communicate important health updates or reminders</li>
            <li>Comply with medical regulations and legal obligations</li>
          </ul>

          <h2 className="mt-8">Data Sharing & Third-Party Services</h2>
          <p>
            We do not sell or rent your information. Data may be shared only
            with:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Medical professionals involved in your care (with your consent)
            </li>
            <li>
              Laboratories, diagnostic centers, or referral clinics as required
            </li>
            <li>Authorized government bodies when mandated by law</li>
          </ul>

          <h2 className="mt-8">Data Security</h2>
          <p>
            We implement strict administrative, physical, and technical measures
            to protect your data from unauthorized access, misuse, or
            disclosure. This includes encrypted data storage and limited access
            to sensitive records.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Request access to your personal or medical data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your records (where applicable)</li>
            <li>Withdraw consent for non-essential communications</li>
          </ul>

          <h2 className="mt-8">Data Retention</h2>
          <p>
            We retain medical records and personal information for the duration
            of your treatment and as required by Indian medical record-keeping
            regulations.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are available for individuals of all ages, but parental
            or guardian consent is required for the treatment of children under
            18 years of age.
          </p>

          <h2>Policy Updates</h2>
          <p>
            This privacy policy may be updated periodically to reflect changes
            in our practices or legal obligations. Continued use of our services
            implies your acceptance of the revised policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any questions, concerns, or requests regarding your data, please
            contact us at: <strong>{appConfig.gmail}</strong> or visit our
            clinic at <strong>{appConfig.location}</strong>.
          </p>
        </motion.section>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="privacy-footer"
          role="contentinfo"
        ></motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
