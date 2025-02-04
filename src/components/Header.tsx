import { MoveLeft, MoveRight } from 'lucide-react';
import { useState } from 'react'

export default function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    return (
        <>
            <header className="header flex justify-between items-center py-4 px-8">
                <nav className="flex space-x-8">
                    <a href="#" className="text-gray-800 hover:text-gray-600">HOME</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">PORTFOLIO</a>
                </nav>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800">CANH DONG BAT TAN</h1>
                    <p className="text-sm text-gray-600">STUDIO</p>
                </div>
                <nav className="flex space-x-8">
                    <a href="#" className="text-gray-800 hover:text-gray-600">ABOUT</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">INFO</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">CONTACT</a>
                </nav>
            </header>
            <main className="relative overflow-hidden h-[800px]">
                <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-1 flex items-center justify-around text-white">
                    <div>
                        <p className="text-sm mb-2">VIETNAMESE WEDDING PHOTOGRAPHERS</p>
                        <h2 className="text-4xl font-bold mb-4">{images[currentIndex].text}</h2>
                    </div>
                    <div className="flex space-x-8">
                        <button onClick={prevSlide}><MoveLeft size={64} /></button>
                        <button onClick={nextSlide}><MoveRight size={64} /></button>
                    </div>
                </div>
            </main>
            <section className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                    {imageServices.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Service Image ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

const imageServices = [
    { src: "/Service/1IG-SC-f7597ca8-1500.jpg" },
    { src: "/Service/1IG-SC2-05eefe5b-1500.jpg" },
    { src: "/Service/1IG-SC17-974c3f7d-1500.jpg" },
    { src: "/Service/CerTA-212-0c0b3089-1500.jpg" },
    { src: "/Service/IG-LT20-83f8c781-1500.jpg" },
    { src: "/Service/IG10-5d9c984f-1500.jpg" },
    { src: "/Service/PostFB2-30-02262b09-1500.jpg" },
    { src: "/Service/PostFB2-44-2dbcfdc5-1500.jpg" },
    { src: "/Service/PostGala-4-f337bc90-1500.jpg" },
    { src: "/Service/SL-36-523d2077-1500.jpg" },
    { src: "/Service/TV-250-bde2eb84-1500.jpg" },
]


const images = [
    { src: "/Slider-Home/1IG-SC3-61a924ad-1500.jpg", text: "Embrace the Souls through Photography" },
    { src: "/Slider-Home/CerJA-86-2-b64109c0-2500.jpg", text: "Capturing Moments, Creating Memories" },
    { src: "/Slider-Home/CerSA-229-e9dbd308-1500.jpg", text: "Love in Every Frame" },
    { src: "/Slider-Home/CerTA-217-be280f3f-1500.jpg", text: "Timeless Wedding Photography" },
    { src: "/Slider-Home/IG-AT-872d6cea-1500.jpg", text: "Your Story, Beautifully Told" },
    { src: "/Slider-Home/IG9-c565f8cc-2500.jpg", text: "Cherish Every Moment" },
    { src: "/Slider-Home/SL-57-f93a8879-1500.jpg", text: "Artistic Wedding Photography" },
    { src: "/Slider-Home/SneakPeekJM-56-2e381163-1500.jpg", text: "Capturing Love and Joy" },
    { src: "/Slider-Home/Syd2023-1-2b9fd8ed-1500.jpg", text: "Moments to Last a Lifetime" },
];