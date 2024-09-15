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

// Show full-size image when a thumbnail is clicked
function showFullImage(thumbnail) {
    const fullSizeImage = document.getElementById('fullSizeImage');

    // Set the source of the full-size image to the data-fullsize attribute of the clicked thumbnail
    fullSizeImage.src = thumbnail.dataset.fullsize;
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
}
