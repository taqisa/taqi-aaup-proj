import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// Importing the images as requested
import review1 from '@/assets/review_1.png';
import review2 from '@/assets/review_2.png';
import review3 from '@/assets/review_3.png';
import review4 from '@/assets/review_4.png';

const reviews = [
  {
    image: review1,
    name: 'John Deo',
    rating: 4.5, // 4.5 stars to show the half star like the image
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore, tenetur itaque nostrum voluptas excepturi aut.',
  },
  {
    image: review2,
    name: 'John Deo',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore, tenetur itaque nostrum voluptas excepturi aut.',
  },
  {
    image: review3,
    name: 'John Deo',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore, tenetur itaque nostrum voluptas excepturi aut.',
  },
  {
    image: review4,
    name: 'John Deo',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore, tenetur itaque nostrum voluptas excepturi aut.',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Reviews</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              // Card Container with Hover Effects matching your previous request
              className="
                border border-primary/30 
                bg-card p-6 
                flex flex-col gap-4 
                transition-all duration-300
                hover:border-primary hover:border-2
                hover:shadow-[0_0_20px_rgba(0,210,211,0.2)]
              "
            >
              {/* Header: Avatar and Quote Icon */}
              <div className="flex justify-between items-start">
                {/* Circular Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Big Quote Icon */}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-6xl text-muted opacity-60"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-card-foreground font-serif">
                {review.name}
              </h3>

              {/* Lorem Ipsum Text */}
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                {review.text}
              </p>

              {/* Stars - Using Bright Teal (#00D2D3) */}
              <div className="flex gap-1 mt-auto">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`text-sm ${
                      // Logic for full stars vs half stars if needed, or just all teal
                      i < Math.floor(review.rating)
                        ? 'text-primary'
                        : (i === Math.floor(review.rating) && review.rating % 1 !== 0)
                          ? 'text-primary' // Simplification: Treating half star as colored for visual match
                          : 'text-primary' // Image shows all stars colored (some half), setting all to teal
                      }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
