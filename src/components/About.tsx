import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '@/assets/about.png';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-md lg:max-w-lg">
              <img
                src={aboutImage}
                alt="Stack of books with a candle - cozy reading atmosphere"
                className="w-full h-auto animate-fade-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="section-title text-left mb-6">About Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to our bookstore, where the love of reading meets exceptional service. 
                We've been serving book enthusiasts for over a decade, curating the finest 
                collection of literature from around the world.
              </p>
              <p>
                Our mission is simple: to connect readers with stories that inspire, educate, 
                and entertain. Whether you're seeking the latest bestseller, a timeless classic, 
                or a hidden gem, our knowledgeable staff is here to guide you.
              </p>
              <p>
                From fiction to non-fiction, children's books to academic texts, we take pride 
                in offering a diverse selection that caters to every reader's taste and interest.
              </p>
            </div>
            <Button variant="hero" size="lg" className="mt-8">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
