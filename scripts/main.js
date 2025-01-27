const fetchFoxImage = () => {
    const foxImg = document.getElementById('fox');
    fetch('https://randomfox.ca/floof/')
      .then(response => response.json())
      .then(data => {
        foxImg.src = data.image;
      });
  };


// Define an asynchronous function to fetch and display the dog image
const fetchDogImage = async () => {
    // Request data from the Random Dog API
    const response = await fetch("https://random.dog/woof.json");
    
    // Parse the JSON response
    const dogJSONConvertedToObject = await response.json();
  
    // Select the HTML image element
    const dogImgElement = document.querySelector("#dog");
  
    // Check if the URL is a valid image
    if (dogJSONConvertedToObject.url.endsWith(".jpg") || 
        dogJSONConvertedToObject.url.endsWith(".png") || 
        dogJSONConvertedToObject.url.endsWith(".gif")) {
      // Update the src attribute of the image element
      dogImgElement.src = dogJSONConvertedToObject.url;
    } else {
      console.log("Received a non-image file, fetching again...");
      fetchDogImage(); // Retry fetching if the file is not an image
    }
  };


  // Call the function to load the dog image on page load
export const initializeImages = async () => {
    await fetchDogImage();
    await fetchFoxImage();
  };
  
  initializeImages();
  

