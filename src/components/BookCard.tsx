import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@/components/ui/button';

interface BookCardProps {
  image: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isFeatured?: boolean;
}

export function BookCard({ 
  image, 
  title, 
  author, 
  price, 
  originalPrice, 
  rating,
  isFeatured = false 
}: BookCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-accent text-xs" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-accent text-xs" />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStarEmpty} className="text-accent text-xs" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="book-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-8 h-8 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:text-primary hover:bg-card transition-colors"
            aria-label="Add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} className="text-sm" />
          </button>
        </div>

        {isFeatured && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {author}
        </span>
        <h3 className="font-heading font-semibold text-foreground mt-1 mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button variant="default" size="sm" className="h-8 px-3">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-1.5 text-xs" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
