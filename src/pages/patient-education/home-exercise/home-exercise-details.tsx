import { Footer, Header } from "@/components/common";
import ExerciseDetailSection from "@/components/home-exercise/exercise-details-section";

const HomeExerciseDetails = () => {
  return (
    <main className="page-container">
      <Header />
      <ExerciseDetailSection />
      <Footer />
    </main>
  );
};

export default HomeExerciseDetails;
