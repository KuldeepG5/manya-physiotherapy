import type React from "react";

export interface ITherapyData {
  id: string;
  name: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const therapiesData: ITherapyData[] = [
  {
    id: "8eb96cfb-72dd-4c5f-b0ed-953bdce90623",
    name: "Interferential Therapy (IFT)",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Uses low-frequency electrical signals to reduce pain and inflammation.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Therapy (IFT)?
          </h2>
          <p>
            Interferential Therapy is a type of electrotherapy that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS therapy.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Therapy is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
  },
  {
    id: "501e7183-f72a-4ae2-8075-1e940d5b526f",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    name: "Ultrasound Therapy",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Ultrasound Therapy?</h2>
          <p>
            Ultrasound Therapy is a therapeutic technique that uses
            high-frequency sound waves to treat deep tissue injuries. It helps
            promote tissue healing, reduce inflammation, and alleviate pain in
            muscles and joints.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            A device generates sound waves that are transmitted into the body
            using a conductive gel and a handheld probe. These waves penetrate
            deep into the tissues, increasing blood flow and stimulating cell
            repair. It can also have a mild heating effect that enhances the
            healing process.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Accelerates tissue healing</li>
            <li>Reduces inflammation and pain</li>
            <li>Improves blood circulation</li>
            <li>Relieves muscle spasms and stiffness</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Soft tissue injuries</li>
            <li>Tendonitis</li>
            <li>Ligament sprains</li>
            <li>Muscle strains</li>
            <li>Bursitis</li>
          </ul>

          <p className="mt-4">
            Ultrasound Therapy is a non-invasive and painless treatment commonly
            used by physiotherapists and sports medicine practitioners to aid in
            faster recovery and reduce discomfort.
          </p>
        </div>
      );
    },
    description:
      "Employs sound waves to promote tissue healing and reduce inflammation.",
  },
  {
    id: "589012ea-82b9-43ff-a7ce-25b0be6ffb1b",
    name: "Laser Therapy",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Uses light energy to accelerate tissue repair and reduce pain.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Laser Therapy?</h2>
          <p>
            Laser Therapy is a non-invasive treatment that uses focused light
            energy to stimulate healing in tissues. It is widely used in
            physiotherapy to relieve pain, reduce inflammation, and enhance
            tissue regeneration.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            During the procedure, a therapeutic laser emits light at specific
            wavelengths, which penetrates the skin and is absorbed by the
            targeted cells. This energy boosts cellular repair processes and
            promotes circulation in the affected area.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Accelerates tissue repair and cell growth</li>
            <li>Reduces inflammation and swelling</li>
            <li>Relieves acute and chronic pain</li>
            <li>Improves vascular activity and circulation</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Soft tissue injuries</li>
            <li>Arthritis</li>
            <li>Tendonitis</li>
            <li>Muscle and joint pain</li>
            <li>Post-surgical healing</li>
          </ul>

          <p className="mt-4">
            Laser Therapy is a painless and effective technique often used in
            physical rehabilitation to speed up recovery and manage pain without
            medication or surgery.
          </p>
        </div>
      );
    },
  },
  {
    id: "b7e392ac-3d87-4f5e-9b3e-d2ea289b839f",
    name: "Traction Therapy",
    image:
      "https://img.freepik.com/free-photo/sportsman-suffering-from-backpain-while-training-gym_637285-5866.jpg?w=740&t=st=1716823130~exp=1716823730~hmac=6f5f3e15d15bb58dc0c2655c3e18d543b0932d07b9d8dc2f76e1c5f643bce2e1",
    description:
      "Gently stretches the spine to relieve pressure and reduce pain.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Traction Therapy?</h2>
          <p>
            Traction Therapy is a non-invasive treatment method that involves
            gently stretching the spine to relieve pressure on the spinal discs
            and nerves. It is commonly used to treat back and neck pain,
            herniated discs, and other spinal conditions.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            The therapy uses mechanical or manual techniques to apply a
            controlled pulling force to the spine. This separation helps create
            space between vertebrae, reducing compression on spinal discs and
            nerves, and promoting better alignment and pain relief.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces pressure on spinal discs and nerves</li>
            <li>Alleviates back, neck, and leg pain</li>
            <li>Improves spinal alignment and flexibility</li>
            <li>Promotes healing of injured spinal structures</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Herniated or bulging discs</li>
            <li>Degenerative disc disease</li>
            <li>Sciatica</li>
            <li>Pinched nerves</li>
            <li>Spinal stenosis</li>
          </ul>

          <p className="mt-4">
            Traction Therapy is often part of a broader physiotherapy program
            and is performed under professional supervision to ensure safety and
            effectiveness.
          </p>
        </div>
      );
    },
  },
  {
    id: "c1a29c9b-8a61-4a0b-9c30-9dc7e53f1ab9",
    name: "Wax Therapy",
    image:
      "https://img.freepik.com/free-photo/hot-paraffin-wax-treatment-hand-close-up_186202-7472.jpg?w=740&t=st=1716824500~exp=1716825100~hmac=4e2989f6b9ad9c0345a5f0135d12e6f2a2fda3e1acfa1dd48e36f0d4a4b7f927",
    description:
      "Applies heated wax to relieve joint stiffness and improve mobility.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Wax Therapy?</h2>
          <p>
            Wax Therapy, also known as paraffin wax treatment, involves the
            application of warm melted wax to specific areas of the body. It is
            commonly used in physiotherapy to relieve pain, improve blood flow,
            and relax muscles and joints.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            The affected area—usually hands, feet, or joints—is dipped into or
            coated with warm paraffin wax. The wax retains heat and helps to
            increase circulation, soften tissues, and ease stiffness by deeply
            penetrating warmth into the tissues.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Relieves joint and muscle stiffness</li>
            <li>Improves blood circulation</li>
            <li>Reduces chronic pain and inflammation</li>
            <li>Softens skin and tissues</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis (especially rheumatoid and osteoarthritis)</li>
            <li>Joint stiffness (hands, feet, wrists)</li>
            <li>Old injuries and scar tissue</li>
            <li>Chronic pain in small joints</li>
          </ul>

          <p className="mt-4">
            Wax Therapy is a simple, safe, and soothing treatment that is often
            used as a preliminary step before exercises or other physical
            therapy techniques.
          </p>
        </div>
      );
    },
  },
  {
    id: "e8e1f310-1f90-4d35-bf9b-0dc6d3a6de70",
    name: "Kinesio Taping Therapy",
    image:
      "https://img.freepik.com/free-photo/female-physiotherapist-applying-kinesiology-tape-female-patient-s-shoulder_116547-41333.jpg?w=740&t=st=1716828200~exp=1716828800~hmac=56b3a5b173d0e4f5b0388c594d90cba6a8b59754611c5601b130395f78e0e09d",
    description:
      "Uses elastic therapeutic tape to support muscles and reduce pain without restricting movement.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Kinesio Taping Therapy?</h2>
          <p>
            Kinesio Taping Therapy is a rehabilitative technique that involves
            applying elastic therapeutic tape to the skin to support muscles and
            joints. It is widely used in sports and physiotherapy to facilitate
            healing while allowing full range of motion.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            The special elastic tape is strategically applied to targeted areas,
            lifting the skin slightly to reduce pressure and improve
            circulation. This helps reduce inflammation, support muscles, and
            relieve pain without restricting movement.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces pain and inflammation</li>
            <li>Supports injured muscles and joints</li>
            <li>Enhances muscle function and performance</li>
            <li>Promotes faster recovery from injury</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Muscle strains and sprains</li>
            <li>Joint instability</li>
            <li>Postural issues</li>
            <li>Swelling and lymphatic drainage problems</li>
            <li>Sports injuries</li>
          </ul>

          <p className="mt-4">
            Kinesio Taping is a non-invasive and comfortable method used by
            physiotherapists, athletes, and trainers to assist healing while
            maintaining active lifestyles.
          </p>
        </div>
      );
    },
  },
  {
    id: "2a84d38a-9078-4a42-95d1-3fa29a1ef279",
    name: "Dry Needling Therapy",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-inserting-needle-into-patient-back_107420-94347.jpg?t=st=1716813288~exp=1716816888~hmac=2d92edb1d05aebc38d20a5e540fdf9ef80d4a7ed9b7b7095ce32596f09e3b8e7&w=740",
    description:
      "Involves inserting fine needles to release muscle tension and trigger points.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">What is Dry Needling Therapy?</h2>
          <p>
            Dry Needling is a therapeutic technique where thin, sterile needles
            are inserted into specific trigger points in muscles. It helps
            relieve pain, improve range of motion, and reduce muscular
            tightness. Unlike acupuncture, it is rooted in Western medicine and
            focuses on musculoskeletal issues.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            A trained therapist inserts needles into trigger points—tight bands
            of muscle—to stimulate the underlying tissue. This triggers a local
            twitch response, releasing tension and improving blood flow in the
            affected area, which promotes healing and pain relief.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Releases muscle knots and tension</li>
            <li>Reduces chronic and acute pain</li>
            <li>Enhances mobility and flexibility</li>
            <li>Improves muscle function and posture</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Myofascial pain syndrome</li>
            <li>Neck and back pain</li>
            <li>Shoulder impingement</li>
            <li>Sports injuries and overuse syndromes</li>
          </ul>

          <p className="mt-4">
            Dry Needling is a safe and effective method often used by
            physiotherapists to manage pain and restore muscle function when
            integrated into a full treatment plan.
          </p>
        </div>
      );
    },
  },
  {
    id: "346bbab9-5914-452f-89a7-a1d4b0a69102",
    name: "Thermotherapy (Heat Therapy)",
    image:
      "https://img.freepik.com/free-photo/woman-having-hot-stone-therapy-spa-salon_23-2148683796.jpg?t=st=1716796467~exp=1716800067~hmac=50f74b35244cf7e22ec9976320b860f16f9e5f1f0db1900b5c4b0531f1c2f81f&w=740",
    description:
      "Uses heat to improve blood flow, reduce stiffness, and ease muscle spasms.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Thermotherapy (Heat Therapy)?
          </h2>
          <p>
            Thermotherapy, also known as Heat Therapy, involves the application
            of heat to the body to relieve pain and improve health. It is
            commonly used in physiotherapy to enhance blood flow, reduce muscle
            stiffness, and ease spasms.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Heat is applied to the affected area using hot packs, warm towels,
            or infrared heat devices. The increased temperature improves blood
            circulation, relaxes tight muscles, and softens tissues, promoting
            healing and reducing discomfort.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Relieves muscle stiffness and tension</li>
            <li>Enhances blood circulation</li>
            <li>Reduces joint pain and inflammation</li>
            <li>Speeds up recovery in soft tissue injuries</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Chronic back and neck pain</li>
            <li>Muscle spasms and strains</li>
            <li>Post-injury recovery</li>
          </ul>

          <p className="mt-4">
            Thermotherapy is a simple, non-invasive, and widely used treatment
            option that can be combined with other therapies to enhance
            rehabilitation outcomes.
          </p>
        </div>
      );
    },
  },

  {
    id: "a1c2d3e4-0001-0001-0001-000000000001",
    name: "TENS Therapy",
    image:
      "https://img.freepik.com/free-photo/close-up-electro-stimulation-device_1048-2392.jpg",
    description: "Uses electrical pulses to reduce pain by stimulating nerves.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is TENS Therapy?</h2>
        <p>
          Transcutaneous Electrical Nerve Stimulation (TENS) uses low-voltage
          electrical currents via skin electrodes to reduce pain by blocking
          pain signals and promoting endorphin release.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Electrodes are placed around the painful area, delivering electrical
          pulses that interfere with pain signal transmission and activate
          natural painkillers in the brain.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces acute and chronic pain</li>
          <li>Drug-free pain management</li>
          <li>Improves functionality and mobility</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Back and neck pain</li>
          <li>Arthritis</li>
          <li>Sports injuries</li>
          <li>Post-operative pain</li>
        </ul>

        <p className="mt-4">
          TENS is non-invasive and often part of a larger pain management plan,
          ideal for home use under a therapist’s guidance.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000002",
    name: "Lymphatic Drainage Massage",
    image:
      "https://img.freepik.com/free-photo/manual-lymphatic-drainage-therapy-closeup_23-2149325244.jpg",
    description:
      "Gentle massage that stimulates lymph flow to reduce swelling and detoxify.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Lymphatic Drainage Massage?
        </h2>
        <p>
          A gentle manual therapy designed to stimulate lymphatic circulation,
          helping reduce swelling, detoxify tissues, and boost natural immunity.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists use light, rhythmic strokes to guide lymph fluid toward
          lymph nodes, facilitating fluid clearance and reducing tissue
          congestion.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces swelling and edema</li>
          <li>Improves immune function</li>
          <li>Detoxifies tissues</li>
          <li>Improves post-surgical or post-injury recovery</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Lymphedema</li>
          <li>Post-cancer treatment swelling</li>
          <li>Chronic venous insufficiency</li>
          <li>Detox support</li>
        </ul>

        <p className="mt-4">
          It’s a soothing, restorative therapy often used after surgery,
          radiation, or in cases of chronic swelling.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000003",
    name: "Overhead Harness Gait Training",
    image:
      "https://img.freepik.com/free-photo/rehabilitation-patient-walking-treadmill-physiotherapist-supervising_23-2149939821.jpg",
    description:
      "Assisted walking practice with harness support to improve gait and balance.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          What is Overhead Harness Gait Training?
        </h2>
        <p>
          A rehabilitation method using an overhead harness system to support
          body weight while patients practice walking, improving gait, balance,
          and confidence.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Patients are suspended in a harness above a treadmill or walkway;
          physiotherapists and technology modulate support to facilitate safe,
          repetitive gait training.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Enhances gait pattern and endurance</li>
          <li>Improves balance and coordination</li>
          <li>Promotes neuroplasticity in neurological conditions</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Stroke recovery</li>
          <li>Spinal cord injuries</li>
          <li>Parkinson’s disease</li>
          <li>Post-traumatic gait deficits</li>
        </ul>

        <p className="mt-4">
          Conducted under supervision using progressive load adjustments to
          safely enhance walking abilities.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000004",
    name: "Manual Therapy",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-working-patient-back_23-2146987435.jpg",
    description: "Hands-on techniques to mobilize joints and soft tissues.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Manual Therapy?</h2>
        <p>
          Involves hands-on treatment of muscles, joints, and connective tissue
          via soft tissue mobilization, joint mobilization, and manipulation to
          restore movement and reduce pain.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists use their hands to assess and treat tense muscles, joint
          restrictions, and scar tissues using different manual techniques.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves joint mobility</li>
          <li>Reduces pain and muscle tension</li>
          <li>Enhances circulation</li>
        </ul>
        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Back/neck pain</li>
          <li>Joint restrictions</li>
          <li>Post-injury scar tissue</li>
        </ul>
        <p className="mt-4">
          Often combined with exercises to maintain gains and function.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000005",
    name: "Cupping Therapy",
    image:
      "https://img.freepik.com/free-photo/back-cupping-therapy-outdoor_23-2149328479.jpg",
    description:
      "Uses suction cups to lift soft tissue, improve circulation, and relieve tension.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Cupping Therapy?</h2>
        <p>
          Traditional therapy where suction is created within cups placed on the
          skin to lift tissue, improve blood flow, and reduce pain and tension.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Heated or suction-created cups adhere to the skin; negative pressure
          pulls tissue upward to stimulate circulation and loosen fascia.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces muscle tension and pain</li>
          <li>Improves circulation</li>
          <li>Promotes fascia release</li>
        </ul>
        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Back/shoulder tension</li>
          <li>Sore muscles</li>
          <li>Myofascial pain</li>
        </ul>
        <p className="mt-4">
          Leaves temporary circular marks but is generally safe and relaxing.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000006",
    name: "Myofascial Release",
    image:
      "https://img.freepik.com/free-photo/therapist-performing-myofascial-release_23-2149327950.jpg",
    description:
      "Gentle sustained pressure on fascia to eliminate pain and restore movement.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Myofascial Release?</h2>
        <p>
          Manual technique applying gentle pressure to fascia—the connective
          tissue covering muscles—aiming to release restrictions and improve
          movement.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists hold pressure on tight fascia areas until they release,
          rehydrating tissues and reducing tension.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces fascial tension</li>
          <li>Improves flexibility and mobility</li>
          <li>Relieves chronic pain</li>
        </ul>
        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Chronic back/neck pain</li>
          <li>Plantar fasciitis</li>
          <li>Fibromyalgia</li>
        </ul>
        <p className="mt-4">
          Often combined with exercise and stretches for best results.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000007",
    name: "Soft Tissue Mobilization",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-massaging-leg_23-2149327948.jpg",
    description:
      "Hands-on manipulation of muscles, tendons & ligaments to restore function.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Soft Tissue Mobilization?</h2>
        <p>
          Manual therapy focusing on muscles, tendons, and ligaments using
          techniques like kneading, stretching, or friction to improve tissue
          quality.
        </p>
        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Therapists apply targeted pressure and movements to break adhesions,
          improve circulation, and restore elasticity.
        </p>
        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Breaks up scar tissue/adhesions</li>
          <li>Improves tissue mobility</li>
          <li>Reduces pain and stiffness</li>
        </ul>
        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Muscle strain recovery</li>
          <li>Tendonitis</li>
          <li>Scar tissue adhesions</li>
        </ul>
        <p className="mt-4">
          Usually part of a more comprehensive rehab program.
        </p>
      </div>
    ),
  },
  {
    id: "a1c2d3e4-0001-0001-0001-000000000007",
    name: "Soft Tissue Mobilization",
    image:
      "https://img.freepik.com/free-photo/physiotherapist-massaging-leg_23-2149327948.jpg",
    description:
      "Hands-on manipulation of muscles, tendons & ligaments to restore function.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Soft Tissue Mobilization?</h2>
        <p>
          A specialized manual therapy technique targeting muscles, fascia,
          tendons, and ligaments to reduce pain, break down scar tissue, and
          restore movement.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Techniques like deep tissue massage, friction, and myofascial release
          are applied to stretch and relax soft tissues, improve circulation,
          and break adhesions.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces muscle tension and spasms</li>
          <li>Improves range of motion</li>
          <li>Enhances blood flow and lymph drainage</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Muscle strains</li>
          <li>Sports injuries</li>
          <li>Scar tissue buildup</li>
          <li>Chronic pain</li>
        </ul>

        <p className="mt-4">
          Often used as part of a comprehensive treatment plan to restore
          mobility and function in injured tissues.
        </p>
      </div>
    ),
  },
  {
    id: "9f6e108b-2a97-4bd5-801e-bbb67e7a34f1",
    name: "Cryotherapy",
    image:
      "https://img.freepik.com/free-photo/cold-compress-leg_1150-14793.jpg?w=740",
    description:
      "Uses cold temperatures to reduce pain, swelling, and inflammation.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Cryotherapy?</h2>
        <p>
          Cryotherapy involves the use of cold temperatures to manage pain,
          decrease inflammation, and speed up recovery in injured tissues.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Ice packs, cold compresses, or specialized cold therapy machines are
          applied to the affected area, causing blood vessels to constrict,
          which reduces inflammation and numbs nerve endings to relieve pain.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces swelling and inflammation</li>
          <li>Minimizes muscle spasms</li>
          <li>Relieves acute pain</li>
          <li>Promotes faster healing</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Sports injuries</li>
          <li>Joint sprains</li>
          <li>Post-operative pain</li>
          <li>Arthritis flare-ups</li>
        </ul>

        <p className="mt-4">
          Cryotherapy is a quick, non-invasive method often used in early stages
          of rehabilitation to control pain and swelling.
        </p>
      </div>
    ),
  },
  {
    id: "11cb419b-8934-4642-97c1-dce9ab208fc2",
    name: "Chest Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/nurse-helping-asthmatic-senior-woman-use-inhaler_23-2149113345.jpg?w=740",
    description:
      "Clears lung secretions and improves breathing through manual techniques.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Chest Physiotherapy?</h2>
        <p>
          Chest Physiotherapy is a set of physical techniques used to help clear
          mucus and secretions from the lungs, improving respiratory function.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          It includes techniques like percussion (clapping), vibration, postural
          drainage, and breathing exercises to loosen mucus and make it easier
          to expel from the lungs.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Improves lung function</li>
          <li>Clears airways of mucus</li>
          <li>Prevents respiratory infections</li>
          <li>Supports breathing in chronic conditions</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Cystic fibrosis</li>
          <li>Bronchiectasis</li>
          <li>Chronic bronchitis</li>
          <li>Post-operative lung care</li>
        </ul>

        <p className="mt-4">
          This therapy is especially beneficial for patients with difficulty
          clearing lung secretions due to chronic respiratory conditions or
          immobility.
        </p>
      </div>
    ),
  },
  {
    id: "ee304299-e6ae-4703-b9ff-f5c4f6d6a5d3",
    name: "Craniosacral Therapy",
    image:
      "https://img.freepik.com/free-photo/close-up-masseur-doing-head-massage_23-2149525227.jpg?w=740",
    description:
      "Gentle hands-on technique to relieve tension in the central nervous system.",
    data: () => (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Craniosacral Therapy?</h2>
        <p>
          Craniosacral Therapy is a gentle, hands-on technique aimed at
          enhancing the functioning of the craniosacral system to relieve stress
          and pain.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          The therapist applies light touch to assess and improve the flow of
          cerebrospinal fluid around the brain and spinal cord, releasing
          deep-seated tensions and promoting self-healing.
        </p>

        <h3 className="text-lg font-semibold">Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Reduces chronic pain and tension</li>
          <li>Improves nervous system function</li>
          <li>Alleviates headaches and migraines</li>
          <li>Enhances relaxation and emotional well-being</li>
        </ul>

        <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
        <ul className="list-disc list-inside">
          <li>Headaches and migraines</li>
          <li>Stress and anxiety</li>
          <li>Post-concussion syndrome</li>
          <li>Chronic fatigue</li>
        </ul>

        <p className="mt-4">
          This therapy is widely used for its calming effects and is often
          integrated with other holistic treatment plans to promote balance and
          wellness.
        </p>
      </div>
    ),
  },
];
