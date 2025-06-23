import { ArrowRight } from "lucide-react";

interface ITreatData {
  id: number;
  title: string;
  dataArray: string[];
}

const ScrollCard = ({ data }: { data: ITreatData }) => {
  return (
    <div className="grid gap-4 bg-light rounded-xl p-8 border-2 border-main/20 shadow-xl">
      <h2>{data.title}</h2>
      <div className="h-48 overflow-y-scroll custom-scroll">
        <ul className="grid gap-4">
          {data.dataArray.map((item: string, index) => (
            <li key={index} className="flex-center justify-start gap-2">
              <span className="p-2 bg-main rounded-full">
                <ArrowRight className="icon text-white" />
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const WhatWeTreat = () => {
  const treatData: ITreatData[] = [
    {
      id: 1,
      title: "Conditions",
      dataArray: [
        "Lumbar Spondylosis",
        "Cervical Spondylosis",
        "Osteoarthritis",
        "Rheumatoid Arthritis",
        "Frozen Shoulder",
        "Sciatica",
        "Slip Disc",
        "Tennis Elbow",
        "Carpal Tunnel Syndrome",
        "Heel Pain (Plantar Fasciitis)",
        "Total Knee Replacement (TKR)",
        "Total Hip Replacement (THR)",
        "Spine Surgery Rehab",
        "Fracture Rehab",
        "Ligament Reconstruction Rehab (ACL/PCL)",
        "Stroke (Paralysis)",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Facial Palsy",
        "Cerebral Palsy",
        "Guillain-Barre Syndrome",
        "Developmental Delay",
        "Muscular Dystrophy",
        "Spina Bifida",
        "Torticollis",
        "ACL Tear",
        "Meniscus Injury",
        "Rotator Cuff Tear",
        "Shin Splints",
        "Runner’s Knee",
        "Age-Related Mobility Issues",
        "Balance and Fall Prevention",
        "Joint Stiffness",
        "Postural Instability",
        "Postnatal Rehabilitation",
        "Pelvic Floor Dysfunction",
        "Urinary Incontinence",
        "Prenatal Back Pain",
      ],
    },
    {
      id: 2,
      title: "Symptoms",
      dataArray: [
        "Muscle Stiffness",
        "Muscle Spasm",
        "Crepitus - Cracking Joints",
        "Numbness And Tingling",
        "Neck Pain",
        "Foot Pain",
        "Tremors",
        "Knee Pain",
        "Back Pain",
        "Joint Pain",
        "Shoulder Pain",
        "Loss Of Balance",
        "Inflammation",
        "Headache",
        "Shortness Of Breath",
        "Sprains And Strains",
      ],
    },
    {
      id: 3,
      title: "Therapies Offered",
      dataArray: [
        "Interferential Therapy (IFT)",
        "Chiropractic Therapy",
        "Ultrasound Therapy",
        "Laser Therapy",
        "Traction Therapy",
        "Wax Therapy",
        "Kinesio Taping / Taping Therapy",
        "Dry Needling Therapy",
        "Thermotherapy (Heat Therapy)",
        "Transcutaneous Electrical Nerve Stimulation (TENS) Therapy",
        "Lymphatic Drainage Massage",
        "Overhead Track Harness Therapy",
        "Tecar / Cret Therapy",
        "Manual Therapy",
        "Spinal Decompression / Traction Therapy",
        "Cupping Therapy",
        "Acupuncture",
        "Myofascial Release (MFR)",
        "Soft Tissue Mobilization",
        "Pelvic Floor Physical Therapy",
        "Cryotherapy (Cold Therapy)",
        "Chest Physiotherapy",
        "Shockwave Therapy",
        "Post-COVID Physiotherapy",
        "Shortwave Diathermy (SWD)",
      ],
    },
    {
      id: 4,
      title: "Services Offered",
      dataArray: [
        "Chiropractor Treatment",
        "Sports Physiotherapy",
        "Pediatric Physiotherapy",
        "Home Care Physiotherapy",
        "Neuro Physiotherapy - Rehab",
        "Pre And Post Surgery Rehabilitation",
        "Geriatric Physiotherapy",
        "Strength Training",
        "Advanced Physiotherapy",
        "Women's Health Physiotherapy",
        "Musculoskeletal Physiotherapy",
        "Vestibular Rehabilitation (vr)",
        "Workplace Ergonomics : Assessment & Training",
        "Therapeutic Massage",
        "Tele-physiotherapy",
        "Cardiac Rehabilitation",
        "Clinical Physiotherapy",
        "Physical Therapy",
        "Spinal Injury Rehabilitation",
      ],
    },
  ];

  return (
    <section className="section-container text-center">
      <h1 className="text-main  mb-12">What We Treat</h1>
      <p className="max-w-3xl mx-auto">
        We provide specialized physiotherapy treatments for neurological,
        orthopedic, musculoskeletal, pediatric, geriatric, and sports-related
        conditions — addressing a wide range of symptoms and recovery needs.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mt-8">
        {treatData.map((data: ITreatData) => (
          <ScrollCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeTreat;
