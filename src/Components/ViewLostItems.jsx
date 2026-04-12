import React, { useEffect, useState } from "react";

const ViewLostItems = () => {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("Loading items...");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/lostitems");
      const data = await response.json();

      if (response.ok) {
        setItems(data);
        setMessage("");
      } else {
        setMessage("Failed to fetch items");
      }
    } catch (error) {
      setMessage("Server error while fetching items");
    }
  };

  return (
    <div>
      <h2>View Lost Items</h2>

      {message && <p>{message}</p>}

      <div className="card-container">
        {items.map((item) => (
          <div className="lost-card" key={item._id}>
            <h3>{item.itemName}</h3>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLostItems;
