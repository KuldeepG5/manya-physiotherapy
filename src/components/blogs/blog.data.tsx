import type React from "react";

export interface IBlogData {
  id: string;
  title: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const blogData = [
  {
    id: "8cb15490-bc9c-4c7a-a54f-7c14b1914a4f",
    title: "Understanding the Basics of Physiotherapy",
    description:
      "Discover what physiotherapy is, how it works, and how it can help with pain relief, injury prevention, and long-term mobility improvement.",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "2f71b2d0-8b08-4ac4-a2c7-6bcd7a11eb35",
    title: "Top 5 Exercises to Relieve Lower Back Pain",
    description:
      "Learn simple, effective physiotherapist-approved exercises to strengthen your lower back and reduce daily pain and stiffness.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "127fa7ea-00d4-42b2-91c4-5b99499e2b7f",
    title: "How Chiropractic Care Complements Physiotherapy",
    description:
      "Explore the benefits of combining chiropractic adjustments with physiotherapy for faster recovery and better alignment.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "88d58837-43eb-40bb-8589-7a17c158b52c",
    title: "Preventing Sports Injuries with Physiotherapy",
    description:
      "A guide for athletes and active individuals on using physiotherapy to prevent common injuries and improve performance.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "b91a8a08-5e02-463e-8c80-9bb79e413d1a",
    title: "Posture Correction: Why It Matters More Than You Think",
    description:
      "Bad posture can cause more than just back pain. Learn how physiotherapy helps realign and retrain your body posture.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "6218c36e-d862-4c41-b42c-4a4e2a8d8657",
    title: "How to Recover from a Muscle Strain Effectively",
    description:
      "Step-by-step recovery plan guided by physiotherapists to heal muscle strains without complications.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "15cc1e4e-dede-4b00-b2a1-e08007a16fa1",
    title: "Ergonomics at Work: Tips from a Physiotherapist",
    description:
      "Prevent neck and back pain while working by setting up your desk and posture properly—straight from our clinic experts.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "b27ab54d-bd8b-480b-a2b6-02167825649e",
    title: "Managing Arthritis Pain with Physiotherapy",
    description:
      "Learn how personalized physiotherapy routines can reduce stiffness and pain caused by arthritis without heavy medication.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "f7744d38-8474-4ec5-82c2-7b37b1b3bb34",
    title: "Rehabilitation After Surgery: Your Road to Recovery",
    description:
      "A structured rehab program post-surgery can be life-changing. Learn how our clinic tailors physiotherapy for surgical recovery.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "4ac693f7-933f-4c1e-b6a1-1ce7869fa67c",
    title: "Children and Physiotherapy: What Parents Should Know",
    description:
      "Physiotherapy isn't just for adults. Discover how it supports child development, posture, and injury healing.",
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=1770&q=80",
    data: () => {
      return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Understanding the Basics of Physiotherapy
            </h1>
            <p className="text-sm text-gray-500">Published on June 23, 2025</p>
          </div>

          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Physiotherapy, often referred to as physical therapy, is a medical
              treatment used to restore, maintain, and improve a patient&apos;s
              mobility, function, and overall well-being. It is commonly used
              after injuries, surgeries, or as a part of long-term healthcare
              routines.
            </p>

            <p>
              The core of physiotherapy revolves around a holistic approach to
              health and well-being. It encourages development and facilitates
              recovery, enabling people to stay independent for as long as
              possible. It combines scientific research with physical techniques
              to promote movement, reduce pain, and prevent disability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              What Does a Physiotherapist Do?
            </h2>
            <p>
              A physiotherapist evaluates the patient&apos;s condition,
              identifies the underlying causes of the problem, and creates a
              personalized treatment plan. This often includes exercises, manual
              therapy, education, and advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Common Conditions Treated
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Back and neck pain</li>
              <li>Sports injuries</li>
              <li>Post-surgical rehabilitation</li>
              <li>Arthritis and joint disorders</li>
              <li>
                Neurological conditions like stroke or Parkinson&apos;s disease
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">
              Benefits of Physiotherapy
            </h2>
            <p>
              Physiotherapy helps improve strength, flexibility, coordination,
              and overall function. It can also reduce the need for surgery,
              enhance recovery time, and improve quality of life.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">
              Is Physiotherapy Right for You?
            </h2>
            <p>
              If you are experiencing chronic pain, recovering from an injury,
              or facing movement challenges, physiotherapy can provide support
              and relief. A consultation with a licensed physiotherapist can
              guide you toward the right treatment path.
            </p>

            <p>
              In conclusion, physiotherapy is a key component of modern
              healthcare that promotes healing, mobility, and independence.
              Whether young or old, active or sedentary, everyone can benefit
              from a tailored physiotherapy plan.
            </p>
          </div>
        </div>
      );
    },
  },
];
