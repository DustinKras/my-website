// Preload gallery images
function preloadImages() {
    const images = [
        "fullsize1.png",
        "fullsize2.png",
        "fullsize3.png",
        "thumbnail1.png",
        "thumbnail2.png",
        "thumbnail3.png"
    ];
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

// Rollover function for gallery images
function setupRollovers() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");

    image1.onmouseover = () => image1.src = "fullsize1.png";
    image1.onmouseout = () => image1.src = "thumbnail1.png";

    image2.onmouseover = () => image2.src = "fullsize2.png";
    image2.onmouseout = () => image2.src = "thumbnail2.png";

    image3.onmouseover = () => image3.src = "fullsize3.png";
    image3.onmouseout = () => image3.src = "thumbnail3.png";
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
    setupRollovers();
}

// Execute the function on page load
window.onload = onPageLoad;
