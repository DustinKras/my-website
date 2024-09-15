// Preload banner images
function preloadBannerImages() {
    const images = ["images/banner1.jpg", "images/banner2.jpg"];
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

// Function to cycle the banner images
function cycleBannerImages() {
    const bannerImages = ["images/banner1.jpg", "images/banner2.jpg"];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        document.getElementById("bannerImage").src = bannerImages[currentImageIndex];
    }, 3000); // Change every 3 seconds
}

// Run the preload and cycle function on page load
window.onload = function() {
    preloadBannerImages();
    cycleBannerImages();
};