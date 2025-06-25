import type React from "react";

export interface IServiceData {
  id: string;
  name: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const servicesData: IServiceData[] = [
  /* ───────────────────────────  SPORTS PHYSIOTHERAPY  ────────────────────────── */
  {
    id: "svc-sports-physio",
    name: "Sports Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/therapist-taping-athlete-knee_23-2147954676.jpg",
    description:
      "Injury prevention, treatment and performance enhancement for athletes of all levels.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Sports Physiotherapy?</h2>
        <p>
          Sports Physiotherapy focuses on preventing, diagnosing and
          rehabilitating sports-related injuries while optimising athletic
          performance. It is suitable for professional athletes, fitness enthusiasts, and anyone engaging in regular physical activity.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists use acute-injury management, biomechanical analysis,
          sport-specific strengthening, taping and return-to-play protocols
          tailored to each athlete. Treatment may include manual therapy, exercise prescription, and education on injury prevention.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Athletes of all ages, weekend warriors, and individuals recovering from sports injuries or looking to enhance their performance.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Speeds up injury recovery</li>
          <li>Enhances strength, flexibility and performance</li>
          <li>Reduces risk of re-injury</li>
          <li>Improves movement efficiency and biomechanics</li>
          <li>Provides education on safe training practices</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a thorough assessment, a personalised treatment plan, and ongoing support to help you return to your sport safely and confidently.
        </p>
      </div>
    ),
  },

  /* ──────────────────────────  PEDIATRIC PHYSIOTHERAPY  ───────────────────────── */
  {
    id: "svc-peds-physio",
    name: "Pediatric Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-helping-child-walk_23-2148912444.jpg",
    description:
      "Fun, age-appropriate therapy helping children reach motor-development milestones.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Pediatric Physiotherapy?</h2>
        <p>
          Specialised care for infants, toddlers and adolescents addressing
          developmental delays, neurological conditions and musculoskeletal
          issues through playful, engaging exercise. Therapy is designed to be fun and motivating for children.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Children with delayed milestones, cerebral palsy, muscular dystrophy, post-injury rehabilitation, or other movement disorders.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves gross-motor skills and coordination</li>
          <li>Enhances strength and balance</li>
          <li>Boosts confidence in movement</li>
          <li>Promotes independence in daily activities</li>
          <li>Supports social and emotional development</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Sessions are interactive and family-centered, with regular progress reviews and home exercise guidance.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────  HOME-CARE PHYSIOTHERAPY  ──────────────────────── */
  {
    id: "svc-home-physio",
    name: "Home Care Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/physio-home-visit_23-2149212483.jpg",
    description:
      "Professional physiotherapy delivered in the comfort of a patient’s home.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Home Care Physiotherapy?</h2>
        <p>
          Tailored rehabilitation sessions for patients who are elderly,
          post-surgical or have mobility constraints, performed in their own
          living space. This service ensures continuity of care and convenience for those unable to travel.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Elderly individuals, patients recovering from surgery, or anyone with limited mobility or chronic conditions.
        </p>
        <h3 className="text-lg font-semibold">Advantages</h3>
        <ul className="list-disc list-inside">
          <li>Convenience and comfort</li>
          <li>Reduced fall risk during travel</li>
          <li>Personalised exercise within real-life environment</li>
          <li>Family involvement in care</li>
          <li>Improved adherence to therapy</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          A physiotherapist will visit your home, assess your needs, and design a program that fits your environment and goals.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────  NEURO PHYSIO / REHAB  ──────────────────────────── */
  {
    id: "svc-neuro-rehab",
    name: "Neuro Physiotherapy / Rehabilitation",
    image:
      "https://img.freepik.com/free-photo/physical-therapy-post-stroke_23-2149212471.jpg",
    description:
      "Restores movement and function after stroke, spinal cord or other neurological conditions.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Neuro Physiotherapy?</h2>
        <p>
          Uses neuroplasticity-based exercises, gait and balance training,
          functional re-education and assistive technologies to maximise
          independence. Therapy is tailored to each patient’s unique neurological condition.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Individuals recovering from stroke, spinal cord injury, traumatic brain injury, Parkinson’s disease, or multiple sclerosis.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves motor control and strength</li>
          <li>Enhances balance and reduces falls</li>
          <li>Boosts quality of life and self-care ability</li>
          <li>Promotes independence in daily activities</li>
          <li>Reduces spasticity and muscle tightness</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a comprehensive assessment, goal setting, and a progressive rehabilitation plan with regular monitoring.
        </p>
      </div>
    ),
  },

  /* ─────────────────────  PRE & POST-SURGICAL PHYSIO / REHAB  ─────────────────── */
  {
    id: "svc-surgical-rehab",
    name: "Pre and Post Surgical Physiotherapy / Rehabilitation",
    image:
      "https://img.freepik.com/free-photo/physio-knee-replacement-rehab_23-2149212460.jpg",
    description:
      "Optimises outcomes before and after orthopaedic, cardiac or abdominal surgery.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Why Pre & Post-Surgical Physio?</h2>
        <p>
          Pre-hab strengthens key muscles and educates patients; post-op rehab
          restores range, strength and function while minimising complications. Early intervention can lead to better surgical outcomes.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Patients scheduled for or recovering from orthopaedic, cardiac, or abdominal surgery.
        </p>
        <h3 className="text-lg font-semibold">Key Goals</h3>
        <ul className="list-disc list-inside">
          <li>Faster recovery timelines</li>
          <li>Reduced pain and swelling</li>
          <li>Safe return to daily or sport activities</li>
          <li>Improved surgical outcomes</li>
          <li>Education on post-surgical care</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          You will receive a personalised plan before and after surgery, with close monitoring and support throughout your recovery.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────  GERIATRIC PHYSIOTHERAPY  ──────────────────────── */
  {
    id: "svc-geriatric-physio",
    name: "Geriatric Physiotherapy / Rehabilitation",
    image:
      "https://img.freepik.com/free-photo/physiotherapy-elderly-balance_23-2149212450.jpg",
    description:
      "Maintains mobility, strength and independence for older adults.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Geriatric Physiotherapy?</h2>
        <p>
          Focuses on age-related conditions such as arthritis, osteoporosis,
          balance deficits and post-fracture recovery with gentle strength,
          flexibility and fall-prevention training. Therapy is adapted to the needs and abilities of older adults.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Seniors experiencing pain, weakness, balance issues, or recovering from injury or surgery.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves mobility and confidence</li>
          <li>Reduces pain and risk of falls</li>
          <li>Enhances daily-living independence</li>
          <li>Promotes social engagement and activity</li>
          <li>Supports healthy aging</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a gentle, supportive approach with exercises and education tailored to your goals and health status.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────────  STRENGTH TRAINING  ─────────────────────────── */
  {
    id: "svc-strength",
    name: "Strength Training",
    image:
      "https://img.freepik.com/free-photo/personal-trainer-rehab_23-2149212440.jpg",
    description:
      "Progressive resistance programs designed by physiotherapists for safe strength gains.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Physio-Led Strength Training?
        </h2>
        <p>
          Evidence-based resistance exercise plans tailored to an individual’s
          goals, injury history and movement patterns, overseen by a
          physiotherapist to ensure correct form. Programs are safe and progressive for all fitness levels.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Anyone looking to build strength, recover from injury, or improve overall fitness under professional supervision.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Increases muscle strength & bone density</li>
          <li>Enhances athletic performance</li>
          <li>Reduces injury risk</li>
          <li>Improves posture and functional movement</li>
          <li>Boosts metabolism and energy levels</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a personalised assessment, a structured program, and ongoing feedback to help you reach your strength goals safely.
        </p>
      </div>
    ),
  },

  /* ────────────────────────────  ADVANCE PHYSIOTHERAPY  ───────────────────────── */
  {
    id: "svc-advance-physio",
    name: "Advance Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/laser-therapy-advance-physio_23-2149212431.jpg",
    description:
      "Cutting-edge modalities such as laser, shockwave and dry needling for rapid recovery.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Advance Physiotherapy?</h2>
        <p>
          Integrates modern evidence-based technologies—laser therapy,
          shockwave, dry needling, electrotherapy—with manual skills and
          exercise for faster, more complete rehabilitation. These modalities are used to target pain, inflammation, and tissue healing.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Individuals with chronic pain, sports injuries, or those not responding to conventional therapy.
        </p>
        <h3 className="text-lg font-semibold">Key Advantages</h3>
        <ul className="list-disc list-inside">
          <li>Accelerated pain relief</li>
          <li>Enhanced tissue healing</li>
          <li>Improved long-term outcomes</li>
          <li>Minimally invasive treatment options</li>
          <li>Reduces reliance on medication</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Your physiotherapist will select the most appropriate modalities for your condition and monitor your progress closely.
        </p>
      </div>
    ),
  },

  /* ────────────────────────  WOMEN'S HEALTH PHYSIOTHERAPY  ───────────────────── */
  {
    id: "svc-womens-health",
    name: "Women's Health Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/pelvic-floor-exercises_23-2149212422.jpg",
    description:
      "Specialised care for pelvic floor, prenatal and postnatal conditions.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Women's Health Physiotherapy?
        </h2>
        <p>
          Addresses pelvic-floor dysfunction, incontinence, diastasis recti,
          pregnancy-related pain and postnatal recovery using tailored exercise
          and manual therapy. Care is sensitive and confidential.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Women experiencing pelvic pain, incontinence, pregnancy or postpartum issues, or recovering from gynaecological surgery.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Restores pelvic floor strength & control</li>
          <li>Reduces back and pelvic pain</li>
          <li>Supports safe return to exercise after childbirth</li>
          <li>Improves quality of life and confidence</li>
          <li>Provides education on self-care and prevention</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a private assessment, a supportive environment, and a plan tailored to your unique needs and goals.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────  MUSCULOSKELETAL PHYSIOTHERAPY  ─────────────────── */
  {
    id: "svc-msk-physio",
    name: "Musculoskeletal Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/therapist-manual-therapy_23-2149212413.jpg",
    description:
      "Assessment and treatment of muscles, joints, ligaments and tendons.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Musculoskeletal Physiotherapy?
        </h2>
        <p>
          Combines detailed assessment, manual therapy, exercise prescription
          and patient education to resolve pain and restore optimal movement
          across the entire musculoskeletal system. Suitable for acute and chronic conditions.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Anyone with joint pain, muscle strains, ligament injuries, or chronic musculoskeletal issues.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Relieves acute & chronic pain</li>
          <li>Improves joint mobility and muscle strength</li>
          <li>Prevents future injuries</li>
          <li>Restores function and quality of life</li>
          <li>Educates on self-management strategies</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          You will receive a thorough assessment, hands-on treatment, and a home exercise plan to support your recovery.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────  VESTIBULAR REHABILITATION  ────────────────────── */
  {
    id: "svc-vestibular-rehab",
    name: "Vestibular Rehabilitation",
    image: "https://img.free-photo/vestibular-therapy_23-2149212403.jpg",
    description:
      "Specialised therapy to reduce dizziness and improve balance in vestibular disorders.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Vestibular Rehabilitation?
        </h2>
        <p>
          Tailored eye-head coordination, balance and gait exercises that
          promote central compensation for conditions like BPPV, labyrinthitis
          and post-concussion dizziness. Therapy is evidence-based and progressive.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Individuals with vertigo, dizziness, balance disorders, or recovering from vestibular injuries.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces vertigo and imbalance</li>
          <li>Improves visual stability</li>
          <li>Enhances confidence in daily activities</li>
          <li>Reduces risk of falls</li>
          <li>Promotes faster recovery from vestibular events</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a detailed assessment, a customised exercise plan, and regular progress checks to ensure optimal results.
        </p>
      </div>
    ),
  },

  /* ──────────────────────────  CRANIOSACRAL THERAPY  ─────────────────────────── */
  {
    id: "svc-craniosacral",
    name: "Craniosacral Therapy",
    image: "https://img.freepik.com/free-photo/craniosacral-head-hold_23-2149212391.jpg",
    description:
      "Gentle hands-on technique aimed at relieving tension in the craniosacral system.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Craniosacral Therapy?</h2>
        <p>
          Light touch is applied to evaluate and enhance the craniosacral
          rhythm, releasing deep fascial restrictions around the brain and
          spinal cord to encourage self-healing. The technique is gentle and relaxing.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Individuals with chronic pain, headaches, stress, or nervous system imbalances.
        </p>
        <h3 className="text-lg font-semibold">Reported Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Lessens chronic pain and headaches</li>
          <li>Promotes relaxation and stress reduction</li>
          <li>Supports nervous-system balance</li>
          <li>Improves sleep quality</li>
          <li>Enhances overall well-being</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Sessions are calming and non-invasive, with most clients experiencing deep relaxation and relief from tension.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────────  POSTURAL CORRECTION  ───────────────────────── */
  {
    id: "svc-posture",
    name: "Postural Correction",
    image:
      "https://img.freepik.com/free-photo/posture-correction-therapy_23-2149212380.jpg",
    description:
      "Assessment and exercises to correct poor posture and related pain.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Postural Correction Therapy?
        </h2>
        <p>
          Identifies dysfunctional movement patterns and muscular imbalances,
          then prescribes targeted stretching, strengthening and ergonomic
          advice to realign posture. Education on healthy habits is also provided.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Anyone experiencing neck, back, or shoulder pain, or those wanting to improve posture and prevent future issues.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces neck & back pain</li>
          <li>Enhances breathing and core stability</li>
          <li>Improves overall appearance and confidence</li>
          <li>Prevents postural-related injuries</li>
          <li>Boosts energy and focus</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          You will receive a posture assessment, corrective exercises, and ergonomic advice for home and work environments.
        </p>
      </div>
    ),
  },

  /* ────────────────────────────────  GAIT TRAINING  ─────────────────────────── */
  {
    id: "svc-gait-training",
    name: "Gait Training",
    image: "https://img.freepik.com/free-photo/gait-training-treadmill_23-2149212371.jpg",
    description:
      "Exercises and technologies to improve walking pattern, speed and safety.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Gait Training?</h2>
        <p>
          Utilises treadmill-based, over-ground and balance exercises—often with
          harness or robotic support—to correct abnormal walking mechanics after
          injury, surgery or neurological events. Training is progressive and goal-oriented.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          Individuals with walking difficulties due to injury, surgery, stroke, or neurological conditions.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Normalises step pattern and symmetry</li>
          <li>Builds strength and endurance</li>
          <li>Increases walking confidence & independence</li>
          <li>Reduces risk of falls</li>
          <li>Improves quality of life</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          Expect a detailed gait analysis, a tailored exercise plan, and regular progress reviews to help you walk better and safer.
        </p>
      </div>
    ),
  },

  /* ──────────────────────────  DIABETIC FOOT / ULCER REHAB  ─────────────────── */
  {
    id: "svc-diabetic-foot",
    name: "Diabetic Foot / Ulcer Rehabilitation",
    image: "https://img.freepik.com/free-photo/diabetic-foot-care_23-2149212360.jpg",
    description:
      "Comprehensive care to heal ulcers, improve circulation and prevent re-ulceration in diabetic feet.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Diabetic Foot / Ulcer Rehabilitation?
        </h2>
        <p>
          Combines wound-care principles, off-loading, circulation-boosting
          exercises, gait modification and patient education to promote ulcer
          healing and protect at-risk tissue. Prevention and early intervention are key.
        </p>
        <h3 className="text-lg font-semibold">Who is it for?</h3>
        <p>
          People with diabetes at risk of foot ulcers, or those recovering from foot wounds or amputations.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Accelerates wound closure</li>
          <li>Improves blood flow & tissue health</li>
          <li>Prevents future ulcers and amputations</li>
          <li>Enhances mobility and independence</li>
          <li>Provides education on foot care and prevention</li>
        </ul>
        <h3 className="text-lg font-semibold">What to Expect?</h3>
        <p>
          You will receive a comprehensive assessment, a personalised care plan, and ongoing support to manage your foot health.
        </p>
      </div>
    ),
  },
];
