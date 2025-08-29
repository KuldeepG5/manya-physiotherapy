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
        "Achilles tendon rupture",
        "ACL Tear",
        "Age-Related Mobility Issues",
        "Ankle bone spur",
        "ankle fracture",
        "ankle instability",
        "ankle sprain",
        "ankylosing spondylitis",
        "Arthritis",
        "Asthma",
        "Back Pain",
        "Balance and Fall Prevention",
        "bell's palsy",
        "biceps tendonitis",
        "bursitis",
        "Carpal Tunnel Syndrome",
        "Cauda equina syndrome",
        "Cerebral Palsy",
        "Cervical myelopathy",
        "Cervical Spondylosis",
        "Cervicogenic headache",
        "Chondromalacia patella",
        "Coccdynia",
        "Congenital hemiparesis",
        "Cubital tunnel syndrome",
        "Deep vein thrombosis",
        "Degenerative disc diseases",
        "diabetic neuropathy",
        "elbow fracture",
        "Erb’s palsy",
        "Facial Palsy",
        "Fibromyalgia",
        "Flat foot",
        "foot drop",
        "Forearm fracture",
        "Frozen Shoulder",
        "ganglion cyst",
        "gastronomies tendinitis",
        "Genu valgus/varum",
        "golfer's elbow",
        "Guillain-Barre Syndrome",
        "hallux valgus",
        "hammer toe",
        "hamstring strain",
        "hand fracture",
        "Heel Pain (Plantar Fasciitis)",
        "hemiplegia",
        "hip fracture",
        "hip impingment syndrome",
        "Huntington’s diseases",
        "klumple's paralysis",
        "knee bursitis",
        "knee fracture",
        "laminectomy surgery",
        "Ligament Reconstruction Rehab (ACL/PCL)",
        "Lumbar Spondylosis",
        "lumber Disc buldge",
        "lumber spondylolisthesis",
        "lymphedema",
        "medial collateral ligament",
        "Median nerve injury",
        "Meniscus Injury",
        "metatarsalgia",
        "migraine",
        "Morton’s neuroma",
        "motor neuron diseases",
        "Multiple Sclerosis",
        "Muscular Dystrophy",
        "myasthenia gravis",
        "myositis ossifiation",
        "Osteoarthritis",
        "Parkinson’s Disease",
        "patellar fracture",
        "Pelvic Floor Dysfunction",
        "pelvic organ prolapse",
        "peripheral artery diseases",
        "piriformis syndrome",
        "planter fasciitis",
        "popliteal cyst",
        "Postural Instability",
        "quadriplegia",
        "Radial nerve injury",
        "retrolisthesis",
        "Rheumatoid Arthritis",
        "Rotator Cuff injury",
        "Rotator Cuff Tear",
        "Runner’s Knee",
        "Sacralisation",
        "Sciatica",
        "scoliosis",
        "Shin Splints",
        "shoulder and arm fracture",
        "shoulder dislocation",
        "Shoulder impingement",
        "Slip Disc",
        "Spina Bifida",
        "spinal cord injury",
        "spinal stenosis",
        "Spine Surgery Rehab",
        "Stroke (Paralysis)",
        "supraspinatus tendinitis",
        "tail bone pain",
        "tarsal tunnel syndrome",
        "Tendinitis",
        "Tennis Elbow",
        "tmj disorder",
        "Torticollis",
        "Total Hip Replacement (THR)",
        "Total Knee Replacement (TKR)",
        "transverse myelitis",
        "trigger finger",
        "trochantric bursitis",
        "ulnar nerve syndrome",
        "Urinary Incontinence",
        "varicose vein",
        "vertigo",
        "wrist drop",
        "wrist fracture",
      ],
    },

    {
      id: 2,
      title: "Symptoms",
      dataArray: [
        "Headache/ Migraine",
        "Neck Pain",
        "Loss Of Balance",
        "Shoulder Pain",
        "Knee Pain",
        "Back Pain",
        "Body weakness",
        "Joint Pain",
        "Foot Pain",
        "Muscle Stiffness",
        "Muscle Spasm",
        "Muscles cramp",
        "Crepitus - Cracking Joints",
        "Numbness And Tingling",
        "Tremors",
        "Muscle swelling",
        "Shortness Of Breath",
        "Sprains And Strains",
        "Unable to walk",
      ],
    },
    {
      id: 3,
      title: "Therapies Offered",
      dataArray: [
        "Kinetic chain activation and release",
        "Craniosacral therapy",
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
        "Manual Therapy",
        "Cupping Therapy",
        "Acupuncture",
        "Myofascial Release (MFR)",
        "Soft Tissue Mobilization",
        "Pelvic Floor Physical Therapy",
        "Cryotherapy (Cold Therapy)",
        "Chest Physiotherapy",
        "Post-COVID Physiotherapy",
        "Shortwave Diathermy (SWD)",
      ],
    },
    {
      id: 4,
      title: "Services Offered",
      dataArray: [
        "Tele-physiotherapy",
        "Sports Physiotherapy",
        "Paediatric Physiotherapy",
        "Postural correction",
        "Gait correction",
        "Home Care Physiotherapy",
        "Neuro Physiotherapy – Rehab",
        "Emotional Healing",
        "Pre And Post Surgery Rehabilitation",
        "Geriatric Physiotherapy",
        "Strength Training",
        "Foot correction physiotherapy",
        "Advanced Physiotherapy",
        "Women's Health Physiotherapy",
        "Musculoskeletal Physiotherapy",
        "Vestibular Rehabilitation",
        "Workplace Ergonomics : Assessment & Training",
        "Therapeutic Massage",
        "Cardiac Rehabilitation",
        "Chest physiotherapy",
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
