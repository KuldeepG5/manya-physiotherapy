import type React from "react";

export interface ITherapyData {
  id: string;
  name: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const symptomsData: ITherapyData[] = [
  {
    id: "8eb96cfb-72dd-4c5f-b0ed-953bdce90623",
    name: "Body Weakness",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Improves overall strength, endurance, and muscle coordination to combat general body weakness.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Body Weakness Therapy?</h2>
          <p>
            Body Weakness Therapy is a personalized physiotherapy program
            designed to address muscular weakness, fatigue, and lack of
            endurance caused by inactivity, illness, aging, or neurological
            conditions. It aims to restore strength, mobility, and overall
            physical function.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            The therapy involves a combination of resistance training,
            functional exercises, balance work, and manual techniques.
            Therapists assess the patient’s muscle strength and endurance levels
            and customize a program that gradually increases physical
            capability.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Enhances muscle strength and tone</li>
            <li>Improves posture and physical coordination</li>
            <li>Boosts stamina and endurance</li>
            <li>Reduces the risk of falls and injuries</li>
          </ul>

          <h3 className="text-lg font-semibold">
            Common Causes of Body Weakness
          </h3>
          <ul className="list-disc list-inside">
            <li>Prolonged bed rest or inactivity</li>
            <li>Post-surgical recovery</li>
            <li>Neuromuscular conditions (e.g., stroke, MS)</li>
            <li>Aging and sarcopenia (muscle loss)</li>
          </ul>

          <p className="mt-4">
            Body Weakness Therapy is a holistic and gradual approach tailored to
            individual needs. It plays a key role in restoring independence and
            enhancing quality of life through improved physical performance.
          </p>
        </div>
      );
    },
  },
  {
    id: "c182e16b-4114-4a2d-aeb7-f4c3d403f202",
    name: "Unable to Walk",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-helping-old-man-walk-with-walker_23-2149212412.jpg?t=st=1719332855~exp=1719336455~hmac=bf012e985f7e9285d9602b77ec68ea4c4a5c979f3b88dcbcf4ce81c579349ae5&w=826",
    description:
      "Focused rehabilitation program to restore walking ability through strength, balance, and coordination training.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is 'Unable to Walk' Rehabilitation?
          </h2>
          <p>
            This therapy focuses on individuals who have lost their ability to
            walk due to injury, surgery, neurological disorders, or prolonged
            immobility. The goal is to restore functional ambulation through
            targeted physical therapy techniques.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            The rehabilitation involves strength training, balance and gait
            correction exercises, assistive device training (e.g., walkers,
            canes), and neuromuscular re-education. A physiotherapist evaluates
            the patient’s condition and tailors a progressive plan to regain
            independent walking ability.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Restores muscle strength and coordination</li>
            <li>Improves balance and posture</li>
            <li>Builds confidence in mobility</li>
            <li>Reduces the risk of secondary complications</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Causes Treated</h3>
          <ul className="list-disc list-inside">
            <li>Post-stroke or spinal cord injury</li>
            <li>Fractures or joint replacement recovery</li>
            <li>Neurological conditions (e.g., Parkinson’s, MS)</li>
            <li>Age-related weakness and falls</li>
          </ul>

          <p className="mt-4">
            Recovery from loss of mobility requires consistency and expert
            guidance. This therapy is designed to help patients walk again with
            independence and dignity.
          </p>
        </div>
      );
    },
  },
  {
    id: "cb-01-knee-pain",
    name: "Knee Pain",
    image:
      "https://img.freepik.com/free-photo/woman-holding-her-knee-pain_23-2149225467.jpg",
    description:
      "Assessment and treatment for knee pain caused by injury, arthritis, or overuse.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Knee Pain Therapy?</h2>
        <p>
          Personalized physiotherapy care aimed at reducing knee pain, improving
          stability, and restoring mobility, suitable for injuries,
          osteoarthritis, and post-operative recovery.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          A combination of targeted exercises, manual therapy, taping, and
          education is used to strengthen supporting muscles, align
          biomechanics, and reduce stress on the knee joint.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces pain and inflammation</li>
          <li>Improves joint stability and strength</li>
          <li>Enhances range of motion</li>
          <li>Reduces risk of re-injury</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Causes</h3>
        <ul className="list-disc list-inside">
          <li>Ligament sprains/tears</li>
          <li>Meniscus injury</li>
          <li>Arthritis</li>
          <li>Tendonitis</li>
        </ul>

        <p className="mt-4">
          Knee pain therapy helps patients regain functional mobility and return
          to daily activities without discomfort.
        </p>
      </div>
    ),
  },
  {
    id: "cb-02-muscle-spasm",
    name: "Muscle Spasm",
    image:
      "https://img.freepik.com/free-photo/close-up-muscle-cramp_23-2149023456.jpg",
    description:
      "Relieves involuntary muscle contractions causing pain and stiffness.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Muscle Spasm Treatment?</h2>
        <p>
          This treatment addresses sudden involuntary muscle contractions
          (spasms) by using modalities such as cryotherapy, TENS, stretching,
          manual therapy, and education.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          A trained therapist combines cold therapy, gentle stretches,
          electrical stimulation, and massage to alleviate contraction and
          restore normal muscle length and function.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces pain and inflammation</li>
          <li>Relaxes the muscle</li>
          <li>Improves mobility</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Triggers</h3>
        <ul className="list-disc list-inside">
          <li>Overuse or fatigue</li>
          <li>Electrolyte imbalance or dehydration</li>
          <li>Stress or prolonged posture</li>
        </ul>

        <p className="mt-4">
          Therapy focuses on breaking the cycle of spasm and restoring muscle
          comfort and function.
        </p>
      </div>
    ),
  },
  {
    id: "cb-03-concussion",
    name: "Concussion",
    image:
      "https://img.freepik.com/free-photo/headache-concept_23-2148623456.jpg",
    description:
      "Post-head injury rehabilitation to recover balance, cognition, and neck function.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Concussion Rehabilitation?
        </h2>
        <p>
          A structured rehab program for mild traumatic brain injury to restore
          balance, neck mobility, vision, and cognitive function following head
          or whiplash injury.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists assess vestibular, cervical, visual, and cognitive
          deficits, then apply manual therapy, balance training, visual-motor
          exercises, and graded physical activity.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces headaches and dizziness</li>
          <li>Improves balance and coordination</li>
          <li>Restores neck mobility</li>
          <li>Enhances cognitive clarity</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Symptoms</h3>
        <ul className="list-disc list-inside">
          <li>Headache, nausea</li>
          <li>Dizziness or blurred vision</li>
          <li>Balance issues</li>
        </ul>

        <p className="mt-4">
          Concussion rehab supports safe return to daily life, school, or sport
          with a progressive recovery plan.
        </p>
      </div>
    ),
  },
  {
    id: "cb-04-shortness-of-breath",
    name: "Shortness of Breath",
    image:
      "https://img.freepik.com/free-photo/woman-experiencing-breathing-difficulty_23-2149234567.jpg",
    description:
      "Physiotherapy for breathing difficulties using breathing exercises and airway techniques.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is 'Shortness of Breath' Therapy?
        </h2>
        <p>
          A respiratory-focused physiotherapy program to improve breathing
          efficiency, lung clearance, and oxygen intake in conditions like COPD,
          asthma, or post-COVID weak lungs.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Techniques include diaphragmatic breathing, pacing, positioning,
          airway clearance, and, where needed, inspiratory muscle training.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves breathing control</li>
          <li>Reduces breathlessness</li>
          <li>Enhances oxygenation</li>
          <li>Boosts exercise tolerance</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Causes</h3>
        <ul className="list-disc list-inside">
          <li>Chronic respiratory conditions</li>
          <li>Post-COVID breathing difficulties</li>
          <li>Pulmonary infections</li>
        </ul>

        <p className="mt-4">
          This therapy empowers patients to breathe more effectively and helps
          them resume daily activities with confidence.
        </p>
      </div>
    ),
  },
  {
    id: "cb-muscle-stiffness",
    name: "Muscle Stiffness",
    image:
      "https://img.freepik.com/free-photo/close-up-muscle-cramp_23-2149023456.jpg",
    description:
      "Relieves tight, hard-to-move muscles using stretching, massage, and modalities.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Muscle Stiffness Treatment?
        </h2>
        <p>
          Muscle stiffness is when muscles feel tight and difficult to move,
          often after rest or exertion. Treatment combines stretching, manual
          therapy, heat/cold packs, and movement exercises to restore
          flexibility.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists assess muscle tightness and apply targeted stretches, soft
          tissue mobilization, and thermal modalities (hot/cold) to loosen tight
          bands and improve tissue pliability.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves flexibility and mobility</li>
          <li>Reduces pain and stiffness</li>
          <li>Prevents injury recurrence</li>
        </ul>
        <p className="mt-4">
          Ideal for post-activity soreness, chronic tightness, or after
          prolonged immobility.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────────  HEADACHE  ─────────────────────────────── */
  {
    id: "cb-headache",
    name: "Headache",
    image:
      "https://img.freepik.com/free-photo/headache-concept_23-2148623456.jpg",
    description:
      "Physiotherapy techniques to relieve tension, cervicogenic and migraine-type headaches.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Headache Management?</h2>
        <p>
          Physiotherapy helps reduce headache frequency and intensity through
          posture correction, neck mobilization, relaxation training, and
          targeted exercises.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists assess neck and upper-back mechanics, apply gentle manual
          techniques, teach stretching & strengthening drills, and may use
          modalities such as TENS or heat–cold therapy.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Relieves head, neck and shoulder tension</li>
          <li>Decreases headache frequency/intensity</li>
          <li>Improves posture and stress control</li>
        </ul>

        <p className="mt-4">
          Suitable for tension, cervicogenic and certain migraine-related
          headaches.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────────  NECK PAIN  ────────────────────────────── */
  {
    id: "cb-neck-pain",
    name: "Neck Pain",
    image: "https://img.free-photo/person-holding-neck-pain_23-2149234562.jpg",
    description:
      "Restores neck mobility and reduces pain through manual therapy, exercise and ergonomic advice.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Neck Pain Therapy?</h2>
        <p>
          A program combining joint mobilization, muscle release, traction,
          posture education and strengthening to ease acute or chronic neck
          pain.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          After assessing movement restrictions, the therapist applies hands-on
          techniques, prescribes targeted exercises and advises on optimal desk
          or sleeping ergonomics.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves range of motion</li>
          <li>Decreases muscle tension and headaches</li>
          <li>Prevents recurrence via posture training</li>
        </ul>

        <p className="mt-4">
          Effective for wry neck, spondylosis, whiplash and “tech-neck” strain.
        </p>
      </div>
    ),
  },

  /* ──────────────────────────────  SHOULDER PAIN  ─────────────────────────── */
  {
    id: "cb-shoulder-pain",
    name: "Shoulder Pain",
    image:
      "https://img.free-photo/shirtless-male-shoulder-pain_23-2149234578.jpg",
    description:
      "Comprehensive care using exercise, manual therapy and taping for common shoulder conditions.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Shoulder Pain Therapy?</h2>
        <p>
          Targets rotator-cuff injuries, impingement, frozen shoulder, arthritis
          and instability through progressive strengthening and mobility drills.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapy blends joint mobilization, soft-tissue release, postural
          retraining and home exercises to restore smooth, pain-free movement.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Increases shoulder strength & range</li>
          <li>Reduces pain and inflammation</li>
          <li>Improves joint stability and posture</li>
        </ul>

        <p className="mt-4">
          Suitable for athletes, desk workers and post-operative recovery alike.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────────  JOINT PAIN  ───────────────────────────── */
  {
    id: "cb-joint-pain",
    name: "Joint Pain",
    image: "https://img.free-photo/close-up-knee-joint-pain_23-2149234570.jpg",
    description:
      "Targeted rehabilitation for painful or arthritic joints using exercise and manual techniques.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Joint Pain Therapy?</h2>
        <p>
          Combines strengthening, mobility work, manual joint mobilization and
          pain-relieving modalities to restore function and reduce discomfort in
          knees, hips, ankles, wrists or other joints.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Relieves pain and swelling</li>
          <li>Improves strength and mobility</li>
          <li>Supports long-term joint health</li>
        </ul>

        <p className="mt-4">
          Appropriate for arthritis, overuse injuries and post-traumatic
          conditions.
        </p>
      </div>
    ),
  },

  /* ────────────────────────────────  BACK PAIN  ───────────────────────────── */
  {
    id: "cb-back-pain",
    name: "Back Pain",
    image: "https://img.free-photo/back-pain_23-2149234560.jpg",
    description:
      "Combines exercise, manual therapy and education to relieve acute and chronic back pain.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Back Pain Therapy?</h2>
        <p>
          Addresses muscle spasm, disc problems and postural strain through
          mobility drills, core strengthening, ergonomic correction and
          pain-relief modalities.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces pain intensity</li>
          <li>Improves posture and core stability</li>
          <li>Prevents future flare-ups</li>
        </ul>

        <p className="mt-4">
          Effective for sciatica, lumbar strain, spondylosis and sedentary
          backache.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────────  LOSS OF BALANCE  ────────────────────────── */
  {
    id: "cb-loss-of-balance",
    name: "Loss Of Balance",
    image:
      "https://img.free-photo/elderly-person-balance-exercise_23-2149234550.jpg",
    description:
      "Specialized training to improve stability, coordination and prevent falls.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Balance Rehabilitation?</h2>
        <p>
          Helps individuals with dizziness, vestibular disorders, neuropathy or
          age-related weakness regain confident, steady movement.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Enhances coordination and proprioception</li>
          <li>Reduces fall risk</li>
          <li>Builds lower-limb strength and posture control</li>
        </ul>

        <p className="mt-4">
          Program includes gait drills, balance board work and home exercise
          routines.
        </p>
      </div>
    ),
  },

  /* ────────────────────────────  SPRAINS & STRAINS  ───────────────────────── */
  {
    id: "cb-sprains-strains",
    name: "Sprains And Strains",
    image: "https://img.free-photo/sprain_23-2149234540.jpg",
    description:
      "Rehabilitation for ligament sprains and muscle/tendon strains to restore full function.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What are Sprains & Strains?</h2>
        <p>
          Uses protection, controlled loading, manual therapy and progressive
          strengthening to heal injured ligaments (sprains) or muscles/tendons
          (strains).
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces pain and swelling</li>
          <li>Restores strength and flexibility</li>
          <li>Prevents re-injury</li>
        </ul>

        <p className="mt-4">
          Tailored protocols for ankle, knee, wrist and hamstring injuries.
        </p>
      </div>
    ),
  },

  /* ───────────────────────────────  FOOT PAIN  ────────────────────────────── */
  {
    id: "cb-foot-pain",
    name: "Foot Pain",
    image: "https://img.free-photo/person-massaging-foot_23-2149234582.jpg",
    description:
      "Assessment and treatment for plantar fasciitis, heel pain and forefoot conditions.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Foot Pain Therapy?</h2>
        <p>
          Addresses plantar fasciitis, metatarsalgia, heel spurs and tendonitis
          with stretching, orthotic advice, taping and strengthening drills.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces heel and arch pain</li>
          <li>Improves foot biomechanics</li>
          <li>Restores walking and running comfort</li>
        </ul>

        <p className="mt-4">
          Includes footwear guidance and home exercise programs.
        </p>
      </div>
    ),
  },

  /* ────────────────────────  NUMBNESS & TINGLING  ─────────────────────────── */
  {
    id: "cb-numbness-tingling",
    name: "Numbness And Tingling",
    image: "https://img.free-photo/hand-numbness-tingling_23-2149234590.jpg",
    description:
      "Neuromuscular therapy to address sensory changes from nerve entrapment or circulation issues.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Sensory Rehabilitation?</h2>
        <p>
          Combines nerve-gliding exercises, posture correction, manual release
          and circulation-boosting drills to relieve pins-and-needles
          sensations.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces numbness and tingling</li>
          <li>Improves nerve mobility and blood flow</li>
          <li>Restores normal sensation and function</li>
        </ul>

        <p className="mt-4">
          Helpful for carpal tunnel, cervical radiculopathy and diabetic
          neuropathy.
        </p>
      </div>
    ),
  },

  /* ────────────────────────────────  TREMORS  ─────────────────────────────── */
  {
    id: "cb-tremors",
    name: "Tremors",
    image: "https://img.free-photo/hand-tremor_23-2149234601.jpg",
    description:
      "Exercise and coordination training to manage involuntary shaking associated with neurological conditions.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Tremor Management?</h2>
        <p>
          Focuses on improving stability, strength and fine-motor control for
          patients with essential tremor, Parkinson’s disease or post-stroke
          tremors.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces tremor amplitude</li>
          <li>Enhances hand-eye coordination</li>
          <li>Improves daily task performance</li>
        </ul>

        <p className="mt-4">
          Uses weighted tools, task-specific drills and relaxation techniques.
        </p>
      </div>
    ),
  },

  /* ─────────────────────────────  INFLAMMATION  ───────────────────────────── */
  {
    id: "cb-inflammation",
    name: "Inflammation",
    image: "https://img.free-photo/inflamed-wrist-pain_23-2149234612.jpg",
    description:
      "Modalities and exercise to control acute or chronic inflammation and promote healing.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Inflammation Management?</h2>
        <p>
          Utilizes cold/heat therapy, compression, gentle mobilization and
          anti-inflammatory exercises to reduce swelling and pain.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Decreases pain and swelling</li>
          <li>Promotes tissue repair</li>
          <li>Restores joint and muscle function</li>
        </ul>

        <p className="mt-4">
          Ideal for tendonitis, bursitis and early-stage injuries.
        </p>
      </div>
    ),
  },

  /* ────────────────────  CREPITUS – CRACKING JOINTS  ──────────────────────── */
  {
    id: "cb-crepitus",
    name: "Crepitus - Cracking Joints",
    image: "https://img.free-photo/knee-crepitus-clicking_23-2149234620.jpg",
    description:
      "Assessment and care for joints that crack or grind, improving alignment and lubrication.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Crepitus Management?</h2>
        <p>
          Addresses clicking or grinding joints by enhancing cartilage health,
          strengthening surrounding muscles and correcting movement patterns.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces painful cracking sensations</li>
          <li>Improves joint tracking and stability</li>
          <li>Supports long-term joint health</li>
        </ul>

        <p className="mt-4">
          Common for knees, shoulders and ankles; includes strengthening,
          stretching and manual therapy.
        </p>
      </div>
    ),
  },
];
