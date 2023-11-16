"use client";

import styles from "./new-bike.module.css";
import { useEffect, useState } from "react";
import bikeAttributesData from "../../../utils/BikeAttributes.json";
import { stringify } from "postcss";

const Page = () => {
  const [bikeAttributes, setBikeAttributes] = useState(bikeAttributesData);
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState({});

  const handleImageFile = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        console.log(event.target.result);
        const byteArray = new Uint8Array(event.target.result);
        console.log(byteArray);
        setImageData({
          image: {
            Data: byteArray,
          },
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = () => {
    // Check if any form field is empty
    var isEmptyField = bikeAttributes.some((attribute) => {
      const value = formData[attribute.id] || "";
      return value.trim() === ""; // You can add additional validation if needed
    });

    isEmptyField = false;
    if (isEmptyField) {
      alert("Please fill in all the fields before submitting.");
    } else {
      console.log("FormData:", formData);
      // Form data is complete, so let's send it to the server
      fetch("http://localhost:9090/new-bike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            // The request was successful, you can handle success here
            console.log("Form data submitted successfully!");
          } else {
            // Handle the case where the server returned an error
            console.log("Error submitting form data.");
          }
        })
        .catch((error) => {
          // Handle network errors or other issues here
          console.error("An error occurred while submitting form data:", error);
        });
    }
  };
  const handleFile = () => {};
  useEffect(() => {}, [formData, imageData]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {bikeAttributes.map((attribute) => (
          <div className="flex flex-col" key={attribute.id}>
            <label htmlFor={attribute.id} className="mb-2 text-white-600">
              {attribute.label}
            </label>
            <input
              type="text"
              id={attribute.id}
              className="border rounded p-2"
              value={formData[attribute.id] || ""}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
      <div>
        <input
          className={`${styles.file}`}
          id="image"
          name="image"
          type="file"
          onChange={handleImageFile}
        />
        <button type="submit">Upload Image</button>
      </div>
      <div className={`${styles.button}`}>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Page;
