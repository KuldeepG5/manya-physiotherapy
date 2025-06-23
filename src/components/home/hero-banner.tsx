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
      title: "Advanced Clinics",
      icon: () => <Hospital className="icon text-main" />,
      text: "Modern Infrastructure, Latest Technology & Top Physiotherapy Experts",
    },
    {
      id: 2,
      title: "Professional Home Care",
      icon: () => <Home className="icon text-main" />,
      text: "Physiotherapy at home with expert oversight & Strong quality checks",
    },
    {
      id: 3,
      title: "Tele / Remote Rehab",
      icon: () => <Laptop2 className="icon text-main" />,
      text: "Personalized Physio exercises at home with Continuous guidance & mentoring",
    },
  ];

  return (
    <section className="py-10 bg-main page-x-padding grid sm:grid-cols-3 divide-y-2 divide-x-0 sm:divide-y-0 sm:divide-x-2 divide-light/40">
      {heroData.map((item: IHeroData) => (
        <SectionCard key={item.id} data={item} />
      ))}
    </section>
  );
};

const SectionCard = ({data} : {data: IHeroData}) => {
  return (
  <div className="py-4 px-8 flex-center gap-4 text-white">
    <div className="p-5 rounded-full bg-light">{data.icon()}</div>
    <div className="grid gap-3">
      <h2 className="font-semibold">{data.title}</h2>
      <p className="text-wrap">{data.text}</p>
    </div>
  </div>);
};

export default HeroBanner;
