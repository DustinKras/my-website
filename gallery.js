// Preload gallery images
function preloadImages() {
    const images = [
        "images/fullsize1.jpg",
        "images/fullsize2.jpg",
        "images/fullsize3.jpg",
        "images/thumbnail1.jpg",
        "images/thumbnail2.jpg",
        "images/thumbnail3.jpg"
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

    image1.onmouseover = () => image1.src = "images/fullsize1.jpg";
    image1.onmouseout = () => image1.src = "images/fullsize1.jpg";

    image2.onmouseover = () => image2.src = "images/fullsize2.jpg";
    image2.onmouseout = () => image2.src = "images/fullsize2.jpg";

    image3.onmouseover = () => image3.src = "images/fullsize3.jpg";
    image3.onmouseout = () => image3.src = "images/fullsize3.jpg";
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
    setupRollovers();
}
