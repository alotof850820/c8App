import { useState, useEffect, useRef } from "react";
import "./carousel.scss";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.jpeg";
import p5 from "@/assets/p5.jpeg";

const content = [p1, p2, p3, p4, p5, p1];
const intervalDuration = 1000;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(content.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const c = document.getElementById("carousel");
      if (!c) return;

      if (currentIndex === 6) {
      
        return;
      }

      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgRef.current);
      c.style.transform = `translateX(-${currentIndex * 100}%)`;
      c.style.transition = "transform 0.5s ease-in-out";
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="carousel_container">
      <div className="carousel" id="carousel">
        {content.map((img, index) => (
          <img key={index} src={img} alt="" className="item" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
