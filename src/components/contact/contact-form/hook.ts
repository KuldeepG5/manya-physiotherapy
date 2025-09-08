// hooks/useContactForm.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  address: yup.string().required("Address is required"),
  mobile: yup
    .string()
    .required("Mobile No is required")
    .min(10, "Mobile No must be 10 digits"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type FormData = yup.InferType<typeof schema>;

export const useContactForm = () => {
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://your-api-url.com/contact",
        data
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  return { ...form, onSubmit };
};
