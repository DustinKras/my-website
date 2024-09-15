// Array of full-size images (no separate thumbnails needed)
const galleryImages = [
    { fullsize: "fullsize1.png" },
    { fullsize: "fullsize2.png" },
    { fullsize: "fullsize3.png" },
    // Add more images here as needed
];

// Function to preload images
function preloadImages() {
    galleryImages.forEach((image) => {
        const img = new Image();
        img.src = image.fullsize;
    });
}

// Function to dynamically create and display gallery images
function createGallery() {
    const galleryContainer = document.querySelector(".gallery-container");
    galleryImages.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.classList.add("thumbnail"); // Assigns the thumbnail class for CSS styling
        imgElement.src = image.fullsize;       // Use full-size image for both thumbnail and full-size display
        imgElement.alt = "Gallery Image";

        // Rollover effect (optional for highlighting or zooming)
        imgElement.onmouseover = () => imgElement.classList.add("hovered");
        imgElement.onmouseout = () => imgElement.classList.remove("hovered");

        // Append to gallery container
        galleryContainer.appendChild(imgElement);
    });
}

// On page load, preload images and create gallery
function onPageLoad() {
    preloadImages();
    createGallery();
}

// Execute the function on page load
window.onload = onPageLoad;
