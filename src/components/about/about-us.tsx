import React from "react";
import { motion } from "framer-motion";
import { aboutUsContent, founder, officeImage1 } from "./about-data";
import Banner from "../common/banner";

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
          className="grid md:grid-cols-2 gap-10 items-center"
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
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutUsContent.aboutFounder1}{" "}
              <span className="text-gray-800 font-bold">
                {aboutUsContent.jayasLuxeSilver}
              </span>
              {aboutUsContent.aboutFounder2}
              <span className="text-gray-800 font-bold">
                {aboutUsContent.aboutFounder3}
              </span>{" "}
              {aboutUsContent.aboutFounder4}{" "}
              <span className="text-gray-800 font-bold">
                {aboutUsContent.aboutFounder5}
              </span>
              {aboutUsContent.aboutFounder6}
              <br />
              <br />
              {aboutUsContent.aboutFounder7}{" "}
              <span className="text-gray-800 font-bold">
                hallmark 925 pure silver
              </span>{" "}
              {aboutUsContent.aboutFounder8}
            </p>
          </motion.div>
              <img
                src="/certificate-1.jpg"
                className="h-full w-full object-cover"
              />
              <img
                src="/certificate-2.jpg"
                className="h-full w-full object-cover"
              />
           
        </motion.div>
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
