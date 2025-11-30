import React, { useState, useRef } from 'react';

// Assets - Importing all 10 images with specific extensions
import arrival1 from '@/assets/arrival_1.jpg';
import arrival2 from '@/assets/arrival_2.jpg';
import arrival3 from '@/assets/arrival_3.jpg';
import arrival4 from '@/assets/arrival_4.jpg';
import arrival5 from '@/assets/arrival_5.jpg';
import arrival6 from '@/assets/arrival_6.jpg';
import arrival7 from '@/assets/arrival_7.jpg';
import arrival8 from '@/assets/arrival_8.webp'; // Imported as .webp
import arrival9 from '@/assets/arrival_9.jpg';
import arrival10 from '@/assets/arrival_10.jpg';

// Updated data to include 10 items
const featuredBooks = [
  {
    image: arrival1,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival2,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival3,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival4,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival5,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival6,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival7,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival8,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival9,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
  {
    image: arrival10,
    title: 'Featured Books',
    author: 'John Deo',
    category: 'Thriller, Horror, Romance',
    price: 25.50,
    originalPrice: 28.60,
  },
];

export function FeaturedBooks() {
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="featured" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Slider Container */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {featuredBooks.map((book, index) => (
            <div
              key={index}
              className="min-w-[16rem] snap-start"
            >
              {/* CARD DESIGN */}
              <div className="border border-gray-300 p-4 flex flex-col items-center bg-white h-full">
                
                {/* Image Section */}
                <div className="w-full h-64 mb-4 overflow-hidden flex items-center justify-center">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="h-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center w-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-1">
                    {book.title}
                  </h3>
                  
                  {/* Author */}
                  <p className="text-gray-500 text-sm mb-1">
                    {book.author}
                  </p>
                  
                  {/* Categories (Teal Color) */}
                  <p className="text-[#40E0D0] text-sm mb-3">
                    {book.category}
                  </p>
                  
                  {/* Price Section */}
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="font-bold text-black text-lg">
                      ${book.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 line-through text-sm decoration-gray-400">
                      ${book.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Learn More Button */}
                  <button className="border border-[#008080] text-[#008080] px-8 py-2 text-sm font-medium hover:bg-[#008080] hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="relative w-full h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-teal-600 rounded-full transition-transform duration-100 ease-out"
            style={{ 
              width: '100%', 
              transform: `translateX(-${100 - scrollProgress}%)` 
            }}
          />
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}