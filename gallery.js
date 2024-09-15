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

// Rollover function for gallery images
function setupRollovers() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullSizeImage = document.getElementById('fullSizeImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Set the source of the full-size image to the data-fullsize attribute of the clicked thumbnail
            fullSizeImage.src = thumbnail.dataset.fullsize;
            fullSizeImage.classList.add('loaded'); // Apply the loaded class for fade-in effect
        });
    });
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
    setupRollovers();
}
