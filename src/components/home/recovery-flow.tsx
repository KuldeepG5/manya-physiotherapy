import { Activity, Brain, Sheet, User } from "lucide-react";

export interface IHeroData {
  id: number;
  title: string;
  icon: () => React.ReactElement;
  text: string;
  para: string;
}

const RecoveryFlow = () => {
  const heroData: IHeroData[] = [
    {
      id: 1,
      title: "Fizo 360",
      icon: () => <User className="icon h-12 w-12 text-light" />,
      text: "Root Cause Identification",
      para: "Comprehensive Assessment for better evaluation of Ortho / Neuro conditions with Advanced assessments like Posture Analysis & Muscle Imbalances detection"
    },
    {
      id: 2,
      title: "Fizo IQ",
      icon: () => <Brain className="icon h-12 w-12 text-light" />,
      text: "AI Powered Precision",
      para: "Clinical Decision Support System integrating Ortho-Neuro intelligence for accurate diagnosis, optimized treatment protocols, and effective outcome tracking"
    },
    {
      id: 3,
      title: "Fizo Track",
      icon: () => <Sheet className="icon h-12 w-12 text-light" />,
      text: "SMART Progress Monitoring",
      para: "Progress tracking system utilizing SMART Goals & Milestones to objectively monitor, analyze, and optimize the patient recovery journey"
    },
    {
      id: 4,
      title: "Active PT",
      icon: () => <Activity className="icon h-12 w-12 text-light" />,
      text: "Your Personal Home Physio",
      para: "Smart rehabilitation app designed for post-treatment care, providing personalized exercise programs, adherence tracking, and expert-guided recovery"
    },
  ];

  return (
    <section className="section-container">
      <h1 className="text-main text-center mb-12">Faster and Lasting Recovery</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {heroData.map((item: IHeroData) => (
          <SectionCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

const SectionCard = ({ data }: { data: IHeroData }) => {
  return (
    <div className="py-4 px-8 flex-center gap-4">
      <div className="grid gap-3 text-center">
      <div className="p-5 h-20 w-20 flex-center rounded-full bg-main mx-auto">{data.icon()}</div>
        <h2 className="font-bold text-main">{data.title}</h2>
        <p className="text-wrap font-bold text-main/60">{data.text}</p>
        <p className="text-wrap text-gray-500">{data.para}</p>
      </div>
    </div>
  );
};

export default RecoveryFlow;
