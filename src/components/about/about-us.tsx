import React from "react";
import { motion } from "framer-motion";
import { aboutUsContent, founder, officeImage1 } from "./about-data";
import Banner from "../common/banner";
import { certificateImages } from "./about-data";
const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      <Banner title="About us" />

      <section className="bg-gradient-to-r from-white via-gray-50 to-white py-16 px-4 md:px-20">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {aboutUsContent.welcomeToJayas}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutUsContent.aboutUs1}
              <br />
              <br />
              {aboutUsContent.aboutUs2}
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={officeImage1}
              alt="Manya Physiotherapy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-light py-16 px-4 md:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {aboutUsContent.ourPhilosophy}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {aboutUsContent.ourPhilosophy1}
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16 px-4 md:px-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {aboutUsContent.whyChooseJayas}
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg list-disc list-inside">
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading1}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer1}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading2}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer2}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading3}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer3}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChoosejayasHeading4}
              </span>
              {aboutUsContent.whyChooseJayasAnswer4}
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-20 bg-light">
        <motion.div
          className="grid sm:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={founder}
              alt="Manya Physiotherapy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {aboutUsContent.meetOurFounder}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              <strong> Dr. Kuldeep Gupta (PT)</strong>, the visionary behind{" "}
              <strong>Manya Physiotherapy Clinic</strong>, is a licensed
              physiotherapist with a deep commitment to patient wellness and
              recovery. With a background in{" "}
              <strong>
                Master of Physiotherapy (MPT) in 2009 from Rajiv Gandhi
                University of Medical Sciences(RGUHS), Bangalore and years of
                hands-on experience.
              </strong>{" "}
              He is also having experience in working with Jehangir Apollo
              hospital, Pune, Sager Apollo hospital, Bangalore, Hosmat hospital,
              Bangalore, Vydehi Medical College, Bangalore, Manipal hospital,
              Bangalore. He has also completed Fellowship in Advanced
              NeuroMyoSkeletal techniques from Mumbai with he is leaned lot of
              advance treatment of TMJ, Foot, Migraine, Spine, Joint Arthritis,
              Shoulder issue and Biomechanical imbalance of body. During this
              journey of practice he studied lot of advanced certified courses
              related to physiotherapy and health care like
              <strong>
                {" "}
                Advance Manual Therapy, Neuro Development Therapy(NDT), K-CAT,
                D-CAT, Dry needling, Cupping therapy, Advanced Foot Rehab,
                Myofascial Release, Janda approach for shoulder complex,
                Therapeutic taping and joining Continuing Medical Education(CME)
              </strong>
              on various topics. He has treated a wide range of musculoskeletal,
              neurological conditions and Bio-mechanical problems. Dr. Kuldeep
              gupta goal is to provide high-quality; affordable physiotherapy
              services that help individuals regain mobility, relieve pain, and
              return to their daily activities with confidence Her compassionate
              approach, clinical expertise, and focus on long-term healing have
              made the clinic a trusted name in the community. Manya
              Physiotherapy Clinic is built on a foundation of care, trust, and
              excellence in physiotherapy and rehabilitation.
            </p>
          </motion.div>
        </motion.div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-10">
          Certificates
        </h2>
        <div className="mt-10 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificateImages.map((src) => (
            <img
              key={src + Math.random()}
              src={src}
              alt="Certificate"
              className="h-full w-full object-cover pointer-events-none"
              draggable={false}
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {aboutUsContent.visitUs}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>{aboutUsContent.visitUs1}</strong>
            {aboutUsContent.visitUs2}
            <br />
            {aboutUsContent.visitUs3}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
