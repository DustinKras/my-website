// Array of image data (thumbnail and full-size)
const galleryImages = [
    { thumbnail: "fullsize1.png", fullsize: "fullsize1.png" },
    { thumbnail: "fullsize2.png", fullsize: "fullsize2.png" },
    { thumbnail: "fullsize3.png", fullsize: "fullsize3.png" },
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
        imgElement.classList.add("thumbnail");
        imgElement.src = image.thumbnail;
        imgElement.alt = "Gallery Thumbnail";
        imgElement.setAttribute("data-fullsize", image.fullsize);

        // Rollover effect
        imgElement.onmouseover = () => imgElement.src = image.fullsize;
        imgElement.onmouseout = () => imgElement.src = image.thumbnail;

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
