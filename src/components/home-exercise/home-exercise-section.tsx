import { exerciseData } from "./exercise-data";

const HomeExerciseSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-main mb-6 text-3xl font-bold">
          Home Exercises We Offer
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore guided home exercises to improve mobility, strength, and
          overall health from Manya Physiotherapy Clinic.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exerciseData.map((exercise, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{exercise.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeExerciseSection;
