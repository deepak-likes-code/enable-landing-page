import React, { useState, ChangeEvent, FormEvent } from "react";

// Define a type for the form state
type FormState = {
  name: string;
  email: string;
  feedback: string;
};

const ContactForm = () => {
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
        alert("Details submitted successfully.");
        setForm({ name: "", email: "", feedback: "" }); // Optionally reset the form
      } else {
        // Handle non-successful responses
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form
      className="w-full max-w-4xl mt-20 mx-auto p-5  rounded-sm "
      style={{ textAlign: "center", fontSize: "0.9em" }}
      onSubmit={submitForm}
    >
      <p className="font-semibold text-2xl mb-6">Get in Touch</p>
      <div className="flex flex-wrap -mx-3 mb-6 justify-center">
        <div className="flex flex-col md:flex-row w-full md:space-x-4">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="feedback"
            >
              Feedback
            </label>
            <textarea
              name="feedback"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-32 resize-none"
              placeholder="Feedback"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
