import type React from "react";

export interface IServiceData {
  id: string;
  name: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const servicesData: IServiceData[] = [
  {
    id: "8eb96cfb-72dd-4c5f-b0ed-953bdce90623",
    name: "Pre‑ and Post‑Surgical Rehabilitation",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Uses low-frequency electrical signals to reduce pain and inflammation.",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
  },
  {
    id: "4a6159ef-f2cd-4948-8ce3-e081f4f72059",
    name: "Vestibular Rehabilitation (VR)",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
    description:
      "Focuses on spinal alignment to restore proper function and relieve pain.",
  },
  {
    id: "501e7183-f72a-4ae2-8075-1e940d5b526f",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    name: "Home‑Care Physiotherapy ",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
    description:
      "Employs sound waves to promote tissue healing and reduce inflammation.",
  },
  {
    id: "955a34f0-424f-4a4d-8f2f-cc5a9bda6803",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
    name: "Clinical Physiotherapy",
    description:
      "Involves warm wax to relax muscles and improve joint mobility.",
  },
  {
    id: "2fadb5d1-1f3f-4dfb-b3b3-87452c5e093d",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
    name: "Strength Training",
    description:
      "Gently stretches the spine to relieve pressure on discs and nerves.",
  },
  {
    id: "589012ea-82b9-43ff-a7ce-25b0be6ffb1b",
    data: () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            What is Interferential Service (IFT)?
          </h2>
          <p>
            Interferential Service is a type of electroService that delivers
            low-frequency electrical stimulation to tissues using two
            medium-frequency currents. It is primarily used for pain relief,
            muscle stimulation, and reducing inflammation.
          </p>

          <h3 className="text-lg font-semibold">How it Works</h3>
          <p>
            Two medium-frequency currents are applied to the affected area, and
            where they intersect, they produce a low-frequency stimulation deep
            within the tissues. This interferential current penetrates deeper
            and causes less discomfort compared to traditional TENS Service.
          </p>

          <h3 className="text-lg font-semibold">Benefits</h3>
          <ul className="list-disc list-inside">
            <li>Reduces swelling and inflammation</li>
            <li>Provides pain relief without medication</li>
            <li>Improves blood circulation</li>
            <li>Stimulates muscle activity</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Conditions Treated</h3>
          <ul className="list-disc list-inside">
            <li>Arthritis</li>
            <li>Sports injuries</li>
            <li>Back and neck pain</li>
            <li>Post-surgical pain and swelling</li>
          </ul>

          <p className="mt-4">
            Interferential Service is a safe and non-invasive procedure widely
            used by physiotherapists to support recovery and pain management.
          </p>
        </div>
      );
    },
    name: "Advanced Physiotherapy (Sports / Post-Surgery) ",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Uses light energy to accelerate tissue repair and reduce pain.",
  },
];
