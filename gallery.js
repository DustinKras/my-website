// Preload gallery images
function preloadImages() {
    const images = [
        "fullsize1.png",
        "fullsize2.png",
        "fullsize3.png"
    ];
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

// Function to show full-size image when a thumbnail is clicked
function showFullImage(thumbnail) {
    const fullSizeImage = document.getElementById("fullSizeImage");
    const fullSizeSrc = thumbnail.getAttribute("data-fullsize");
    fullSizeImage.src = fullSizeSrc;
}

// Run preload and other setup on page load
function onPageLoad() {
    preloadImages();
}
