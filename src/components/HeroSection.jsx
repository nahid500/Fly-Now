import { useState } from "react";
import h1 from "../images/a1.jpeg";
import h2 from "../images/a2.jpeg";
import h3 from "../images/a3.jpeg";
import h4 from "../images/a4.jpeg";
import h5 from "../images/a5.jpeg";
import h6 from "../images/a6.jpeg";



const HeroSection = () => {

    const slides = [
        { id: 1, img: h1, alt: "Slide 1" },
        { id: 2, img: h2, alt: "Slide 2" },
        { id: 3, img: h3, alt: "Slide 3" },
        { id: 4, img: h4, alt: "Slide 4" },
        { id: 5, img: h5, alt: "Slide 5" },
        { id: 6, img: h6, alt: "Slide 6" },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    
    
    return (

        <div className="relative w-full mx-auto bg-slate-200">
    {/* Slides */}
    <div className="overflow-hidden">
    <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
        {slides.map((slide) => (
        <img
            key={slide.id}
            src={slide.img}
            alt={slide.alt}
            className="w-full object-contain"
        />
        ))}
    </div>
    </div>


    {/* Navigation Buttons */}
    <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={handlePrev}
    >
        ◀
    </button>
    <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        onClick={handleNext}
    >
        ▶
    </button>

    {/* Indicators */}
    <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
        <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
            currentIndex === index
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
        />
        ))}
    </div>
    </div>
    )
}

export default HeroSection


