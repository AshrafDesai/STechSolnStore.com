import React, { useState, useEffect } from "react";

function HeroSection() {
  const images = [
    "https://p.globalsources.com/IMAGES/PDT/B5864387582/Powder-Coating-Oven.png",
    "https://5.imimg.com/data5/SELLER/Default/2023/12/366785311/RR/LF/JK/26613943/wagner-powder-coating-gun.jpg",
    "https://www.axalta.com/content/axalta_powder_us/en_US/_jcr_content/stageSlider/slides/item5/image.axFitIn.stageSlider_desktop_x1.jpg/1681991511414/Header_GMF_1600x402.jpg",
    "https://www.axalta.com/content/axalta_industrialcoatings_global/en_US/markets-industrial/construction/_jcr_content/parMainContent/layoutcontainerwitho/parMainContentLayout/col3/parMainContent/mediateaser_copy.axFitIn.mediaTeaser_desktop_x1.jpg/1701934655813/Teaser_Technology_1200x675.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        paddingTop: "20px",
      }}
    >
      {/* Image Slider */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          height: "400px",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "justify-center", // Makes the image completely visible within the div
            transition: "transform 0.5s ease-in-out",
            backgroundColor: "#f5f5f5", // Optional background for better contrast
          }}
        />
      </div>
      {/* Indicators */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              margin: "0 5px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: currentIndex === index ? "#007BFF" : "#CCCCCC",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
