// Preload gallery images
function preloadImages() {
    const thumbnails = document.querySelectorAll(".thumbnail"); // Select all thumbnails

    thumbnails.forEach((thumbnail) => {
        const fullSizeSrc = thumbnail.getAttribute("data-fullsize");
        const fullSizeImage = new Image();
        fullSizeImage.src = fullSizeSrc; // Preload the full-size image
    });
}

// Dynamic Rollover Function for Gallery Images
function setupRollovers() {
    const thumbnails = document.querySelectorAll(".thumbnail"); // Select all thumbnails

    thumbnails.forEach((thumbnail) => {
        const fullSizeSrc = thumbnail.getAttribute("data-fullsize");
        const thumbnailSrc = thumbnail.src; // Get the original thumbnail source

        // Handle mouseover and mouseout for rollover effect
        thumbnail.onmouseover = () => thumbnail.src = fullSizeSrc;
        thumbnail.onmouseout = () => thumbnail.src = thumbnailSrc;
    });
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
    setupRollovers();
}

// Execute the function on page load
window.onload = onPageLoad;
