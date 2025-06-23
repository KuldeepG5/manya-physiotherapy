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
  ServicesOffered,
  SymptomsWeTreat,
  TherapiesOffered,
  PrivacyPolicy,
  TermsAndConditions,
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
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/conditions-we-treat" element={<ConditionsWeTreat />} />
        <Route path="/home-exercise" element={<HomeExercise />} />
        <Route path="/service-offered" element={<ServicesOffered />} />
        <Route path="/symptoms-we-treat" element={<SymptomsWeTreat />} />
        <Route path="/therapies-offered" element={<TherapiesOffered />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
