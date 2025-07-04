import { useState } from "react";
import { servicesData } from "@/components/services-offered/services-data";
import { Link } from "react-router-dom";
import { CustomButton } from "../common";

const ServicessOfferedSection = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    setVisibleCount(9); // Reset visible count on search
  };

  const filteredServices = servicesData.filter((service) =>
    service.name.toLowerCase().includes(searchTerm)
  );

  const visibleServices = filteredServices.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid sm:grid-cols-2 mb-8">
        <div className="col-span-1">
          <h1 className="text-main mb-6">Services We Offer</h1>
          <p>
            Stay updated with the latest advancements and trending topics in
            physiotherapy, along with news and highlights from Manya
            Physiotherapy Clinic.
          </p>
        </div>

        {/* search bar */}
        <div className="col-span-1 flex-center justify-end">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search services..."
            className="w-full sm:w-2/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Therapies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {service.description}
              </p>
              <Link
                to={`/therapies-offered/${service.id}`}
                className="text-blue-600 hover:underline font-semibold mt-3 inline-flex items-center"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredServices.length && (
        <div className="flex justify-center mt-8">
          <CustomButton onClick={handleShowMore} title="Show More" />
        </div>
      )}
    </div>
  );
};

export default ServicessOfferedSection;
