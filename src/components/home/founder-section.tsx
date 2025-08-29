export default function FounderSection() {
  return (
    <section className="bg-light py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/founder.jpg"
            alt="Dr. Kuldeep Gupta"
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-main text-center mb-6 text-3xl sm:text-4xl font-bold">
            Dr. Kuldeep Gupta
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Chief Consultant Physiotherapist
          </h3>

          <ul className=" list-inside text-gray-700 space-y-2 text-lg">
            <li>MPT (Bangalore), MIAP, CMT, FNMT, K-CAT, D-CAT, NDT, MFIMT</li>
            <li>FELLOWSHIP in Advance Neuromyoskeltal Techniques (Mumbai)</li>
            <li>Certified Manual Therapist</li>
            <li>Certified Dry Needling and Cupping Practitioner</li>
            <li>Certified Therapeutic Taping Practitioner</li>
            <li>Certified Foot Rehab Specialist</li>
            <li>
              Ex-Physio: Jehangir Apollo Hospital (Pune), Manipal Hospital
              (Bangalore)
            </li>
            <li>Member of Indian Association of Physiotherapists</li>
            <li>Member of Federation of Indian Manual Therapists</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

