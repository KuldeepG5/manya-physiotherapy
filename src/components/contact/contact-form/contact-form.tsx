import React from "react";
import { useContactForm } from "./hook";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useContactForm();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl  font-semibold mb-4"> Contact Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3 flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              {...register("name")}
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Mobile No</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              {...register("mobile")}
            />
            <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
          </div>
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            {...register("address")}
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border p-2 rounded"
            rows={4}
            {...register("message")}
          />
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-main text-white p-2 rounded  disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
