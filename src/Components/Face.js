// App.js
import React, { useState } from "react";
import axios from "axios";

function Face() {
  const [result, setResult] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.predictions);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Face Recognition App</h1>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      {result && (
        <div>
          <h2>Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Face;
