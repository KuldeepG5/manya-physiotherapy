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
      para: "Comprehensive Assessment for better evaluation and diagnosis of all conditions with advanced assessments like kinetic chain analysis, Dural chain analysis, Posture Analysis , Muscle Imbalances, gait analysis, Myofascial trigger points detection, referred pain syndromes, functional assessment, balance and coordination."
    },
    {
      id: 2,
      title: "Fizo IQ",
      icon: () => <Brain className="icon h-12 w-12 text-light" />,
      text: "Clinical decision making",
      para: "Clinical Decision making for accurate diagnosis and implementation of optimized treatment step by step for early pain relief, biomechanical correction of movement and posture, detection of root cause for sustainable pain relief and complete cure of disorder."
    },
    {
      id: 3,
      title: "Fizo Track",
      icon: () => <Sheet className="icon h-12 w-12 text-light" />,
      text: "SMART Progress Monitoring",
      para: "Progress tracking system utilizing SMART Goals & Milestones to objectively monitor, analyze, and optimize the patient recovery journey with top physiotherapist of Kanpur"
    },
    {
      id: 4,
      title: "Active PT",
      icon: () => <Activity className="icon h-12 w-12 text-light" />,
      text: "Your Personal Home Physio",
      para: "Trusted  physiotherapy treatment at home in Kanpur for paralysis, arthritis, spine disorders, neurological conditions, elderly care, providing personalized exercise programs, adherence tracking, and expert-guided recovery"
    },
  ];

  return (
    <section className="section-container">
      <h1 className="text-main text-center mb-12">Faster and Lasting Recovery</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {heroData.map((item: IHeroData) => (
          <SectionCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

const SectionCard = ({ data }: { data: IHeroData }) => {
  return (
    <div className="flex h-full">
      <div className="py-6 px-6 flex flex-col justify-start items-center text-center bg-white rounded-2xl shadow-md h-full">
        <div className="p-5 h-20 w-20 flex-center rounded-full bg-main mb-4">
          {data.icon()}
        </div>
        {/* <h2 className="font-bold text-main text-lg mb-2">{data.title}</h2> */}
        <p className="font-semibold text-main/60 mb-2">{data.text}</p>
        <p className="text-gray-500">{data.para}</p>
      </div>
    </div>
  );
};

export default RecoveryFlow;
