import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  NotFound,
  About,
  Blog,
  ConditionsWeTreat,
  Contact,
  FAQs,
  HomeExercise,
  ServiceOffered,
  SymptomsWeTreat,
  TherapiesOffered,
  PrivacyPolicy,
  TherapyDetails,
  TermsAndConditions,
  BlogDetails,
  ServiceDetails,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/conditions-we-treat" element={<ConditionsWeTreat />} />
        <Route path="/home-exercise" element={<HomeExercise />} />
        <Route path="/service-offered" element={<ServiceOffered />} />
        <Route
          path="/service-offered/:serviceId"
          element={<ServiceDetails />}
        />
        <Route path="/symptoms-we-treat" element={<SymptomsWeTreat />} />
        <Route path="/therapies-offered" element={<TherapiesOffered />} />
        <Route
          path="/therapies-offered/:therapyId"
          element={<TherapyDetails />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
