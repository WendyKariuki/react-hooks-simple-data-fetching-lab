// import React from 'react'

// export default function App() {
//     useEffect(() => {
//         fetch("https://dog.ceo/api/breeds/image/random,")
//           .then((r) => r.json())
//           .then(setData);
//       }, []);
    
//       if (!image ){
//         return <h2>
//             loading...
//         </h2>
//       }
//   return (
//     <div>App</div>
//   )
// }


import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
