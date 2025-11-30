import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faTags, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faTruck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping to your doorstep',
  },
  {
    icon: faHeadset,
    title: '24/7 Services',
    description: 'Round-the-clock customer support available',
  },
  {
    icon: faTags,
    title: 'Best Deal',
    description: 'Competitive prices and exclusive discounts',
  },
  {
    icon: faShieldAlt,
    title: 'Secure Payment',
    description: 'Safe and encrypted payment processing',
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-badge animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className="text-xl md:text-2xl text-primary" 
                />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
