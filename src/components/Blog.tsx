import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';

// Importing assets
import bg from '@/assets/bg.png';
import blog1 from '@/assets/blog_1.jpg';
import blog2 from '@/assets/blog_2.jpg';
import blog3 from '@/assets/blog_3.jpg';

const blogPosts = [
  {
    image: blog1,
  },
  {
    image: blog2,
  },
  {
    image: blog3,
  },
];

export function Blog() {
  return (
    <section 
      id="blog" 
      className="py-16 md:py-24 bg-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-4">
        {/* Title removed or kept? The image shows a book divider top, 
            but usually a section has a title. I will keep the grid focus. */}
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Blog Post" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Title "Bloger" in Teal */}
                <h3 className="text-2xl font-bold text-[#009688] mb-4">
                  Bloger
                </h3>
                
                {/* Text Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ipsam, quos quis quasi ut impedit reiciendis voluptatem 
                  rem esse ratione omnis, laudantium earum. Aperiam 
                  nesciunt dolor aliquam repellat consequatur amet 
                  ducimus.
                </p>

                {/* Footer Icons (Calendar & Heart) */}
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <FontAwesomeIcon 
                    icon={faCalendar} 
                    className="text-[#009688] text-lg cursor-pointer hover:text-black transition-colors" 
                  />
                  <FontAwesomeIcon 
                    icon={faHeart} 
                    className="text-[#009688] text-lg cursor-pointer hover:text-red-500 transition-colors" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}