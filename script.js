

// Add event listeners to the buttons that will trigger fetching new cat images
document.getElementById('new-cat-A').addEventListener('click', () => fetchCatImage('cat-image-A'));
document.getElementById('new-cat-B').addEventListener('click', () => fetchCatImage('cat-image-B'));
document.getElementById('skip-button').addEventListener('click', skipBothCatImages);

/**
 * Fetches a random cat image from the Cat API and updates the image source of the specified element.
 * @param {string} imageId - The ID of the image element where the fetched cat image will be displayed.
 */
function fetchCatImage(imageId) {
    // API endpoint to fetch a random cat image
    const API_URL = 'https://api.thecatapi.com/v1/images/search';

    // Configuration for the API request, including headers with an API key
    const options = {
        method: 'GET',
        headers: {
            'x-api-key': 'live_7Wrbb2oI0xyewmbD59Yyxp88FWi4CbRZG6K050elkLOnVvvutLs7fGbEtFTGYEL4' // Replace with your API key
        }
    };

    // Send the GET request to the API to fetch a random cat image
    fetch(API_URL, options)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // If the response data contains at least one image, update the specified image element
            if (data.length > 0) {
                const catImageUrl = data[0].url; // Get the URL of the first image returned
                document.getElementById(imageId).src = catImageUrl; // Set the image element's `src` to the new image URL
            }
        })
        .catch(error => {
            // Log any errors to the console and alert the user of the issue
            console.error('Error fetching cat image: ', error);
            alert('Failed to fetch a new cat image. Please try again!');
        });
}

/**
 * Fetches new random cat images for both cat images A and B.
 * This function will be called when the "Skip" button is clicked.
 */
function skipBothCatImages() {
    fetchCatImage('cat-image-A'); // Fetch and update a new cat image for the "cat-image-A" element
    fetchCatImage('cat-image-B'); // Fetch and update a new cat image for the "cat-image-B" element
}

/**
 * Ensure that both cat images A and B are preloaded when the DOM content is fully loaded.
 * This event listener guarantees that the images are populated when the page first loads.
 */
document.addEventListener('DOMContentLoaded', () => {
    fetchCatImage('cat-image-A'); // Preload a random cat image into the "cat-image-A" element
    fetchCatImage('cat-image-B'); // Preload a random cat image into the "cat-image-B" element
});


