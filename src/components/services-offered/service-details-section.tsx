import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { servicesData, type IServiceData } from "./services-data";

const ServiceDetailSection = () => {
  const { serviceId } = useParams();
  const [currentService, setCurrentService] = useState<IServiceData | undefined>();

  useEffect(() => {
    const selectedService = servicesData.find((item) => item.id === serviceId);
    if (selectedService) {
      setCurrentService(selectedService);
    }
  }, [serviceId]);


  return (
    <section className="section-container ">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="h-full w-full sm:col-span-3">
          <img
            className="h-full w-full rounded-xl object-contain"
            src={currentService?.image}
          />
        </div>

        <div className="lg:col-span-2">
          {currentService?.data()}
          <div className="mt-12 text-sm text-gray-500 border-t pt-4">
            © 2025 Manya PhysioTherapy. All rights reserved.
          </div>
        </div>

        <div className="w-full lg:col-span-1">
          <h2 className="mb-2">Popular Therapies</h2>
          <p className="border border-main lg:w-2/4"></p>
          <div className="p-2 divide-y divide-neutral-300 grid gap-4">
            {servicesData.slice(0, 5).map((item) => (
              <div className="grid grid-cols-4 py-4">
                <div className="col-span-1">
                  <img
                    className="h-20 w-20 rounded-full object-cover"
                    src={item.image}
                  />
                </div>

                <div className="col-span-3 grid gap-2">
                  <Link
                    to={`/blog/${item.id}`}
                    className="no-underline hover:underline hover:text-main"
                  >
                    <p className="font-semibold">{item.name}</p>
                  </Link>
                  <p
                    className="text-neutral-400 text-xs overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
