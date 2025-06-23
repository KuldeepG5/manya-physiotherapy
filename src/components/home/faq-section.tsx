import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface IFAQ {
  id: number;
  title: string;
  desc: string;
}

const faqsData: IFAQ[] = [
  {
    id: 1,
    title: "What services does Manya Physiotherapy Clinic offer?",
    desc: "We provide physiotherapy, chiropractic care, sports injury treatment, posture correction, and rehabilitation programs.",
  },
  {
    id: 2,
    title: "Do I need a referral to visit Manya Physiotherapy Clinic?",
    desc: "No referral is required. You can book an appointment directly with us.",
  },
  {
    id: 3,
    title: "How long is each physiotherapy session?",
    desc: "Each session typically lasts between 30 to 60 minutes, depending on your treatment plan.",
  },
  {
    id: 4,
    title: "Is chiropractic care safe?",
    desc: "Yes, chiropractic care is safe when performed by a licensed and experienced professional, like our specialists at Manya Clinic.",
  },
  {
    id: 5,
    title: "Do you accept insurance?",
    desc: "Yes, we work with most major insurance providers. Please bring your insurance details when you visit.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="section-container text-center">
      <h1 className="text-main mb-12">Frequently Asked Questions</h1>
      <p className="max-w-3xl mx-auto mb-8">
        Some frequently asked questions regarding physiotherapy and chiropractic
        services. For more FAQs, feel free to contact us directly.
      </p>
      <div className="space-y-4">
        {faqsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-lg text-center"
          >
            <button
              className="w-full px-4 py-4 text-left font-medium cursor-pointer rounded-none shadow-none border-b border-light"
              onClick={() => toggleFAQ(index)}
            > 
              {item.title}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 py-2">{item.desc}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
