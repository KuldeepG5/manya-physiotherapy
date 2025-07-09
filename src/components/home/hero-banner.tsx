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
      icon: () => <Hospital className="icon text-main" />,
      text: "Best physiotherapy clinic in Kanpur offering orthopedic, neurological, and sports injury treatments by certified physiotherapists.",
    },
    {
      id: 2,
      title: "Home Physio Services in Kanpur",
      icon: () => <Home className="icon text-main" />,
      text: "Trusted home physiotherapy in Kanpur for stroke rehab, back pain, and elderly care — with qualified physiotherapists at your doorstep.",
    },
    {
      id: 3,
      title: "Tele & Remote Rehabilitation",
      icon: () => <Laptop2 className="icon text-main" />,
      text: "Online physiotherapy sessions with expert guidance — perfect for neuro rehab, pediatric physiotherapy, and spinal cord injuries.",
    },
    {
      id: 4,
      title: "Stay & Neuro Rehab Therapy",
      icon: () => <Laptop2 className="icon text-main" />,
      text: "Get advanced neuro physiotherapy in Kanpur including therapy for Parkinson’s, hemiplegia, brain injury, and spinal rehabilitation.",
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
    <div className="py-4 px-8 text-white">
      <div className="flex-center mb-2 gap-3">
        <div className="p-5 rounded-full bg-light">{data.icon()}</div>
        <h2 className="font-semibold">{data.title}</h2>
      </div>
      <p className="text-wrap">{data.text}</p>
    </div>
  );
};

export default HeroBanner;
