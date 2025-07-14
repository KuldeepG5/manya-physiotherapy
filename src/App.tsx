import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhatsAppFloatingIcon from "./components/common/whatsapp";
import {
  Home,
  NotFound,
  About,
  Blog,
  ConditionsWeTreat,
  ConditionDetails,
  Contact,
  FAQs,
  HomeExercise,
  HomeExerciseDetails,
  ServiceOffered,
  ServiceDetails,
  SymptomsWeTreat,
  SymptomsDetails,
  TherapiesOffered,
  TherapyDetails,
  PrivacyPolicy,
  TermsAndConditions,
  BlogDetails,
  StayAndPhysiotherapy,

} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />

        <Route path="/home-exercise" element={<HomeExercise />} />
        <Route path="/home-exercise/:exerciseId" element={<HomeExerciseDetails />} />

        <Route path="/stay-and-physiotherapy" element={<StayAndPhysiotherapy />} />

        {/* Service Routes */}
        <Route path="/service-offered" element={<ServiceOffered />} />
        <Route path="/service-offered/:serviceId" element={<ServiceDetails />} />

        {/* Therapy Routes */}
        <Route path="/therapies-offered" element={<TherapiesOffered />} />
        <Route path="/therapies-offered/:therapyId" element={<TherapyDetails />} />

        {/* Condition Routes */}
        <Route path="/conditions-we-treat" element={<ConditionsWeTreat />} />
        <Route path="/conditions-we-treat/:conditionId" element={<ConditionDetails />} />

        {/* Symptom Routes */}
        <Route path="/symptoms-we-treat" element={<SymptomsWeTreat />} />
       <Route path="/symptoms-we-treat/:symptomId" element={<SymptomsDetails />} />
      </Routes>
      <WhatsAppFloatingIcon/>
    </BrowserRouter>
  );
};


export default App;
