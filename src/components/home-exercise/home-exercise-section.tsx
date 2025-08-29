import { exerciseData } from "./exercise-data";

const HomeExerciseSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-main mb-6 text-3xl font-bold">
          Home Exercises We Offer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore guided home exercises to improve mobility, strength, and
          overall health from Manya Physiotherapy Clinic.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exerciseData.map((exercise, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl flex flex-col"
          >
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 flex-1 flex items-center justify-center">
              <h2 className="text-xl font-semibold text-center">
                {exercise.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeExerciseSection;
