import { Banner, Footer, Header } from "@/components/common";
import HomeExerciseSection from "@/components/home-exercise/home-exercise-section";

const HomeExercise = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Home Exercise" />
      <HomeExerciseSection />
      <Footer />
    </main>
  );
};

export default HomeExercise;
