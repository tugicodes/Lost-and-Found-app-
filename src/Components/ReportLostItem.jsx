import React, { useState } from "react";

const ReportLostItem = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    location: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/lostitems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Lost item reported successfully");
        setFormData({
          itemName: "",
          description: "",
          location: "",
          contact: "",
        });
      } else {
        setMessage(data.message || "Failed to report lost item");
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <h2>Report Lost Item</h2>

      <form className="report-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location lost"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact information"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Report</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ReportLostItem;
