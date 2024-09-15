// Preload gallery images
function preloadImages() {
    const images = [
        "fullsize1.jpg",
        "fullsize2.jpg",
        "fullsize3.jpg",
        "thumbnail1.jpg",
        "thumbnail2.jpg",
        "thumbnail3.jpg"
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

    image1.onmouseover = () => image1.src = "fullsize1.jpg";
    image1.onmouseout = () => image1.src = "fullsize1.jpg";

    image2.onmouseover = () => image2.src = "fullsize2.jpg";
    image2.onmouseout = () => image2.src = "images/fullsize2.jpg";

    image3.onmouseover = () => image3.src = "fullsize3.jpg";
    image3.onmouseout = () => image3.src = "fullsize3.jpg";
}

// Run preload and rollover setup on page load
function onPageLoad() {
    preloadImages();
    setupRollovers();
}
