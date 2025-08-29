export default function FounderSection() {
  return (
    <section className=" bg-light py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/founder.jpg"
            alt="Dr. Kuldeep Gupta"
            className="rounded-2xl shadow-lg w-80 h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-main text-center mb-12 text-3xl sm:text-4xl">
            Meet Our Founder
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Dr. Kuldeep Gupta</strong>, Chief consultant Physiotherapist
            MPT(Bangalore), MIAP, CMT, FNMT, K-CAT, D-CAT, NDT, MFIMT FELLOWSHIP
            in Advance Neuromyoskeltal Techniques(Mumbai) Certified Manual
            Therapist Certified Dry Needling and Cupping Practioner Certified
            Therapeutic Taping Practioner Certified Foot Rehab specialist
            <strong>
              {" "}
              Ex physio. Jehangir Apollo Hospital, Pune, Manipal Hospital,
              Bangalore Member of Indian Association of Physiotherapist Member
              of federation of Indian Manual Therapist
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
