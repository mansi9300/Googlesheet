import React from 'react';

function FormToSheet() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // const url = "https://script.google.com/macros/s/AKfycbymlKvN3RVd3E6gQc8o7jlaR2pkuFMjFm4VWZSvQifMVfQqFYCCbKheqCg6QHVi_ssaQQ/exec";
    const url = "https://script.google.com/macros/s/AKfycbzsKFef7FE-Tt3_qaCo9TWL8Ksi69LwtKnbSNM-7X86rOo1CoeqcXspS_3AtX2ZtbAG/exec";

    // Properly format the body using template literals
    const body = `Name=${encodeURIComponent(e.target.name.value)}&Email=${encodeURIComponent(e.target.email.value)}`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    })
    .then((res) => res.text())
    .then((data) => {
      alert("Data submitted successfully!");
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    });
  };

  return (
    <div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">React to Sheet</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Add
      </button>
    </form>
  </div>
</div>

    </div>
  );
}

export default FormToSheet;
