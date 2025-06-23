import type React from "react";

export interface ITherapyData {
  id: string;
  name: string;
  description: string;
  image: string;
  data: () => React.ReactElement;
}

export const therapiesData: ITherapyData[] = [
{
  id: "8eb96cfb-72dd-4c5f-b0ed-953bdce90623",
  name: "Interferential Therapy (IFT)",
  image:
    "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  description:
    "Uses low-frequency electrical signals to reduce pain and inflammation.",
  data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
}
,
  {
    id: "4a6159ef-f2cd-4948-8ce3-e081f4f72059",
    name: "Chiropractic Therapy",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
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
    name: "Ultrasound Therapy",
  data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
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
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    name: "Wax Therapy",
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
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    name: "Traction Therapy",
    description:
      "Gently stretches the spine to relieve pressure on discs and nerves.",
  },
  {
    id: "589012ea-82b9-43ff-a7ce-25b0be6ffb1b",
     data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    name: "Laser Therapy",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Uses light energy to accelerate tissue repair and reduce pain.",
  },
  {
    id: "b0ce6c3d-e477-4580-b4a9-eaf7d8a6d5b7",
    name: "Kinesio Taping / Taping Therapy",
    data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Applies elastic tape to support muscles and joints without restricting movement.",
  },
  {
    id: "2a84d38a-9078-4a42-95d1-3fa29a1ef279",
    name: "Dry Needling Therapy",
  data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Involves inserting fine needles to release muscle tension and trigger points.",
  },
  {
    id: "346bbab9-5914-452f-89a7-a1d4b0a69102",
    name: "Thermotherapy (Heat Therapy)",
   data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Uses heat to improve blood flow, reduce stiffness, and ease muscle spasms.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "83f80c9d-91cb-467d-a7d2-8a1d48aa7427",
    name: "Transcutaneous Electrical Nerve Stimulation (TENS)",
  data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Delivers electrical impulses to relieve pain and improve circulation.",
  },
  {
    id: "d35874a3-1a23-4f87-a2f2-d6825c1507e9",
    name: "Lymphatic Drainage Massage",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    description:
      "Stimulates lymph flow to reduce swelling and detoxify the body.",
  },
  {
    id: "04f7a026-fdd2-45f7-a120-a17ea2798503",
    name: "Overhead Track Harness Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Supports body weight for gait training and mobility improvement.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "3a2e8e75-0521-4a2f-826c-3104c8ab5643",
    name: "Tecar / Cret Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Promotes healing using capacitive and resistive energy transfer.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "b2014c10-200c-46ba-84a2-d2408525c75e",
    name: "Manual Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description: "Hands-on technique to mobilize joints and soft tissues.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "c96debaa-8b59-4c55-acb1-0e92a34d06ca",
    name: "Spinal Decompression / Traction Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description: "Non-surgical method to relieve spinal pressure and pain.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "48e94c53-b020-40cf-b527-4a08419f3047",
    name: "Spinal Decompression Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Uses mechanical traction to stretch and relieve compressed spinal structures.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "f3b905d8-a8b1-465b-a479-d5666034bfdf",
    name: "Cupping Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Applies suction cups to increase blood flow and relieve muscle tension.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "203f114a-805c-4f3c-a4b3-f80f7bea7288",
    name: "Acupuncture",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Inserts thin needles into specific points to balance energy and relieve pain.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "805ff408-de8b-44f9-9719-ff22ae2ddbd6",
    name: "Myofascial Release (MFR)",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description: "Targets fascia to release tension and improve mobility.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "fc66799b-5588-436f-8a77-c8f4e428e55c",
    name: "Soft Tissue Mobilization",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description: "Breaks down scar tissue and enhances muscle function.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "453fd0c9-f685-4ee6-8011-3b308ea02e9a",
    name: "Pelvic Floor Physical Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Strengthens pelvic floor muscles to treat incontinence and pain.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "ea83fe1c-2891-4c30-b4e7-a380903222cd",
    name: "Cryotherapy (Cold Therapy)",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Applies cold temperatures to reduce pain, swelling, and inflammation.",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    id: "9e1203a0-63e1-443d-b173-ba9bf7a39e07",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    name: "Chest Physiotherapy",
     data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description: "Clears lung secretions to improve respiratory function.",
  },
  {
    id: "0d5e7156-e151-4050-8a13-03cd9c611124",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
    name: "Shockwave Therapy",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Uses acoustic waves to treat musculoskeletal conditions and stimulate healing.",
  },
  {
    id: "e668efe9-ba85-4eaf-b833-6624df2490ed",
    name: "Post-COVID Physiotherapy",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
      data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Rehabilitates patients recovering from COVID-19 with customized therapy.",
  },
  {
    id: "dc3966f3-96f2-40e6-abf0-f85b5ebdb099",
    name: "Shortwave Diathermy (SWD)",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
     data: () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">What is Interferential Therapy (IFT)?</h2>
        <p>
          Interferential Therapy is a type of electrotherapy that delivers low-frequency electrical stimulation to tissues using two medium-frequency currents. It is primarily used for pain relief, muscle stimulation, and reducing inflammation.
        </p>

        <h3 className="text-lg font-semibold">How it Works</h3>
        <p>
          Two medium-frequency currents are applied to the affected area, and where they intersect, they produce a low-frequency stimulation deep within the tissues. This interferential current penetrates deeper and causes less discomfort compared to traditional TENS therapy.
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
          Interferential Therapy is a safe and non-invasive procedure widely used by physiotherapists to support recovery and pain management.
        </p>
      </div>
    );
  },
    description:
      "Uses electromagnetic energy to generate deep tissue heat for healing.",
  },
];
