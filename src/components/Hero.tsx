import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bgImage from '@/assets/bg.png';
import tableImage from '@/assets/table.png';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden"
      style={{ 
        background: 'var(--hero-gradient)',
      }}
    >
      {/* Background Image  */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-80 dark:opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="section-container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-20">
        
        {/* Left Side: Content */}
        <div className="animate-fade-in order-2 lg:order-1 flex flex-col justify-center">
          
          {/* 
             UPDATED: Typography to match the reference image layout.
             1. "WELCOME TO" is now Big, Bold, Uppercase, and Dark (text-foreground).
             2. "BOOK STORE" is now Big, Bold, Uppercase, and Colored (text-primary).
          */}
          <h1 className="font-heading font-extrabold leading-none mb-6">
            <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground uppercase mb-2">
              Welcome To
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-primary uppercase">
              Book Store
            </span>
          </h1>

          {/* Kept your exact English text */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl text-justify">
              Discover your next favorite read from our curated collection of bestsellers, 
              classics, and new releases. Every book tells a story waiting to be explored.
          </p>

          {/* Kept your exact buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Books
            </Button>
          </div>
        </div>

        {/* Right Side: Hero Image */}
             <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-up">
          {/* 
             UPDATED: Increased max-width from 'max-w-md' to 'max-w-2xl'.
             This makes the image much larger, similar to the book shelf in the reference image.
          */}
    <div className="relative w-full">
  <img 
    src={tableImage} 
    alt="Featured Books" 
    className="w-full h-auto drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
  />
</div>


        </div>

      </div>
    </section>
  );
}