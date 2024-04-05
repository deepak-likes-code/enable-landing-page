import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "react-toastify/dist/ReactToastify.css";

// Define a type for the form state
type FormState = {
  name: string;
  email: string;
  feedback: string;
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Make a POST request to the Next.js API endpoint
      const response = await fetch("/api/submitFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Handle success response
        toast.success("Submitted succesfully", {
          autoClose: 2000,
        });
        setForm({ name: "", email: "", feedback: "" }); // Optionally reset the form
        setSubmitted(true);
      } else {
        // Handle non-successful responses
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <ToastContainer position="top-left" />
      <form
        className="max-w-4xl my-20  p-5 rounded-sm"
        style={{ fontSize: "0.9em" }}
        onSubmit={submitForm}
      >
        {" "}
        <h3 className="text-xl text-center mb-4 font-normal">Join Waitlist</h3>
        <div className="flex flex-row  justify-end">
          <input
            name="email"
            type="email"
            className="flex-grow appearance-none block w-full bg-gray-200 text-gray-700 border border-r-0 rounded-l py-2 px-4 leading-tight focus:outline-none focus:bg-white"
            placeholder="Email"
            onChange={handleChange}
            disabled={submitted}
          />
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 rounded-r ${
              submitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={submitted}
          >
            {">"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
