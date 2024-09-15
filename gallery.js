// Array of image data (can easily be extended without hard-coding new values)
const galleryImages = [
    { thumbnail: "images/fullsize1.png", fullsize: "images/fullsize1.png", alt: "Thumbnail 1" },
    { thumbnail: "images/fullsize2.png", fullsize: "images/fullsize2.png", alt: "Thumbnail 2" },
    { thumbnail: "images/fullsize3.png", fullsize: "images/fullsize3.png", alt: "Thumbnail 3" }
];

// Preload gallery images
function preloadImages() {
    galleryImages.forEach(image => {
        const img = new Image();
        img.src = image.fullsize;
    });
}

// Insert gallery images dynamically
function insertGalleryImages() {
    const galleryContainer = document.querySelector('.gallery-container');
    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.className = 'thumbnail';
        imgElement.src = image.thumbnail;
        imgElement.alt = image.alt;
        imgElement.dataset.fullsize = image.fullsize;
        imgElement.onclick = () => showFullImage(imgElement); // Assign click event handler
        galleryContainer.appendChild(imgElement);
    });
}

// Show full-size image
function showFullImage(thumbnail) {
    const fullSizeImage = document.getElementById('fullSizeImage');
    fullSizeImage.src = thumbnail.dataset.fullsize;
    fullSizeImage.alt = thumbnail.alt; // Set the alt text
}

// Run preload and setup on page load
function onPageLoad() {
    preloadImages();
    insertGalleryImages();
}
