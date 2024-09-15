// Array holding the image data (thumbnails and full-size links)
const imageGallery = [
    { fullsize: "fullsize1.png", thumbnail: "fullsize1.png" },
    { fullsize: "fullsize2.png", thumbnail: "fullsize2.png" },
    { fullsize: "fullsize3.png", thumbnail: "fullsize3.png" }
];

// Function to dynamically build the gallery
function buildGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    imageGallery.forEach((image, index) => {
        const img = document.createElement('img');
        img.classList.add('thumbnail');
        img.src = image.thumbnail;  // Use the same image for thumbnail in this case
        img.alt = `Thumbnail ${index + 1}`;
        img.dataset.fullsize = image.fullsize;
        img.onclick = () => showFullImage(img);  // Attach the click event
        galleryContainer.appendChild(img);  // Add image to the gallery container
    });
}

// Function to show the full-size image when clicked
function showFullImage(thumbnail) {
    const fullSizeImage = document.getElementById('fullSizeImage');
    fullSizeImage.src = thumbnail.dataset.fullsize;
    fullSizeImage.style.display = 'block';  // Ensure the full-size image is visible
}

// Preload gallery images
function preloadImages() {
    imageGallery.forEach(image => {
        const img = new Image();
        img.src = image.fullsize;  // Preload the full-size images
    });
}

// Run preload, gallery build, and rollover setup on page load
function onPageLoad() {
    preloadImages();
    buildGallery();
}
