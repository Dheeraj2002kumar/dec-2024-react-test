import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DogPics.css";

const DogPics = () => {
  const [breed, setBreed] = useState("random");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Function to fetch a dog image
  const fetchDogImage = async (selectedBreed) => {
    setLoading(true);
    setError(false);
    try {
      const endpoint =
        selectedBreed === "random"
          ? "https://dog.ceo/api/breeds/image/random"
          : `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
      const response = await axios.get(endpoint);
      setImageUrl(response.data.message); // Extract the image URL
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a random dog image on component mount
  useEffect(() => {
    fetchDogImage("random");
  }, []);

  // Handle breed selection change
  const handleBreedChange = (event) => {
    const selectedBreed = event.target.value;
    setBreed(selectedBreed);
    fetchDogImage(selectedBreed);
  };

  // Handle "Next" button click
  const handleNextClick = () => {
    fetchDogImage(breed);
  };

  return (
    <div className="dog-pics">
      <h1>Dog Pics</h1>

      {/* Dropdown for breed selection */}
      <select value={breed} onChange={handleBreedChange}>
        <option value="random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>

      {/* Display dog image or loading/error */}
      <div className="dog-image-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading dog image. Please try again!</p>
        ) : (
          <img src={imageUrl} alt="Dog" />
        )}
      </div>

      {/* Next button */}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default DogPics;
