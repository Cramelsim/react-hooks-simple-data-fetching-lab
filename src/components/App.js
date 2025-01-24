// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to store the image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data from API
  useEffect(() => {
    // Fetch random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);  // Set the image URL in state
        setLoading(false);          // Set loading to false after receiving the data
      })
      .catch(error => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Even if there's an error, stop loading
      });
  }, []); 

  return (
    <div>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <img src={dogImage} alt="A Random Dog" /> 
      )}
    </div>
  );
}

export default App;
