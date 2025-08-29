import { Home, Hospital, Laptop2 } from "lucide-react";
import type React from "react";

export interface IHeroData {
  id: number;
  title: string;
  icon: () => React.ReactElement;
  text: string;
}

const HeroBanner = () => {
  const heroData: IHeroData[] = [
    {
      id: 1,
      title: "Advanced Physiotherapy Clinics in Kanpur",
      icon: () => <Hospital className="w-10 h-10 text-main" />,
      text: "Best physiotherapy clinic in Kanpur offering multispecialty physiotherapy treatments by qualified physiotherapist in Kanpur",
    },
    {
      id: 2,
      title: "Home Physio Services in Kanpur",
      icon: () => <Home className="w-10 h-10 text-main" />,
      text: "Trusted home physiotherapy in Kanpur for stroke rehab, paralysis, spine injury, back pain, joint pain and elderly care with qualified physiotherapists at home in Kanpur (all areas)",
    },
    {
      id: 3,
      title: "Tele & Remote Rehabilitation",
      icon: () => <Laptop2 className="w-10 h-10 text-main" />,
      text: "Online physiotherapy consultation and treatment sessions with expert guidance, perfect for neuro rehab, postural correction, muscle and joint conditions, paediatric physiotherapy, spinal cord injuries and strength training",
    },
    {
      id: 4,
      title: "Stay & Physiotherapy",
      icon: () => <Laptop2 className="w-10 h-10 text-main" />,
      text: "Get advanced neuro physiotherapy in Kanpur with room stay facility for Paralysis, Hemiplegic, Paraplegia, Quadriplegia, Brain injury, and Spinal injury rehabilitation.",
    },
  ];

  return (
    <section className="py-10 bg-main page-x-padding grid sm:grid-cols-2 lg:grid-cols-4 divide-y-2 divide-x-0 sm:divide-y-0 sm:divide-x-2 divide-light/40">
      {heroData.map((item: IHeroData) => (
        <SectionCard key={item.id} data={item} />
      ))}
    </section>
  );
};

const SectionCard = ({ data }: { data: IHeroData }) => {
  return (
    <div className="py-6 px-6 text-white text-center flex flex-col items-center">
      <div className="p-5 rounded-full bg-light flex items-center justify-center mb-4">
        {data.icon()}
      </div>
      <h2 className="font-semibold text-lg mb-2">{data.title}</h2>
      <p className="text-sm leading-relaxed">{data.text}</p>
    </div>
  );
};

export default HeroBanner;
