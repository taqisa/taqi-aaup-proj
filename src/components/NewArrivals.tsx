import React from 'react';

// Keep existing imports
import arrival1 from '@/assets/arrival_1.jpg';
import arrival2 from '@/assets/arrival_2.jpg';
import arrival3 from '@/assets/arrival_3.jpg';
import arrival4 from '@/assets/arrival_4.jpg';
import arrival5 from '@/assets/arrival_5.jpg';
import arrival6 from '@/assets/arrival_6.jpg';
import arrival7 from '@/assets/arrival_7.jpg';
import arrival8 from '@/assets/arrival_8.webp';

const newArrivals = [
  {
    image: arrival1,
    title: 'The Giver',
    author: 'Lois Lowry',
    price: 12.99,
    rating: 4.5,
  },
  {
    image: arrival2,
    title: 'The Wright Brothers',
    author: 'David McCullough',
    price: 15.50,
    rating: 4,
  },
  {
    image: arrival3,
    title: 'Radical Gardening',
    author: 'George McKay',
    price: 24.99,
    rating: 3.5,
  },
  {
    image: arrival4,
    title: 'Red Queen',
    author: 'Victoria Aveyard',
    price: 14.99,
    rating: 4.5,
  },
  {
    image: arrival5,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 9.99,
    rating: 5,
  },
  {
    image: arrival6,
    title: "Harry Potter",
    author: 'J.K. Rowling',
    price: 16.99,
    rating: 5,
  },
  {
    image: arrival7,
    title: 'Heroes of Olympus',
    author: 'Rick Riordan',
    price: 13.99,
    rating: 4.5,
  },
  {
    image: arrival8,
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney',
    price: 11.99,
    rating: 4,
  },
];

// Helper component for Stars
const StarRating = () => (
  <div className="flex gap-1 mb-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className="w-4 h-4 text-[#00D2D3] fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export function NewArrivals() {
  return (
    <section id="arrivals" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">New Arrivals</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((book, index) => (
            <div
              key={`${book.title}-${index}`}
              className="animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* 
                  CUSTOM CARD DESIGN 
                  Changes made to make the color show more:
                  1. hover:border-2 (Makes border thicker on hover)
                  2. hover:shadow-[...] (Adds a bright teal glow behind the card)
              */}
              <div className="
                border border-border p-4 
                flex flex-col items-center bg-card h-full 
                transition-all duration-300 
                hover:border-primary hover:border-2
                hover:shadow-[0_0_20px_rgba(0,210,211,0.4)]
                group
              ">

                {/* Image Area */}
                <div className="w-full h-64 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Area */}
                <div className="flex flex-col items-center w-full">
                  <h3 className="text-xl font-medium text-card-foreground mb-2 font-serif">
                    New Arrivals
                  </h3>

                  {/* Stars Component */}
                  <StarRating />

                  {/* Button */}
                  <button className="border border-primary text-primary px-6 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-full sm:w-auto">
                    Learn More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
