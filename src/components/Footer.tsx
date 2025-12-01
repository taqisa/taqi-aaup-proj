import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Importing the logo
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    // Background set to light gray as per the image
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">

        {/* Main Grid: 5 Columns to match the layout in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Column 1: Logo & Lorem Ipsum */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="BookStore" className="h-12 w-auto object-contain" />
              {/* If text is part of logo png, you don't need this, but added for safety */}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
              ipsa aspernatur ad sequi, dolore eveniet vitae quasi. Excepturi ipsa
              odio impedit sequi at hic velit, minus vero sint. Voluptas?
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Quick Link</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Featured', 'Arrivals', 'Reviews', 'Blog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-sm" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">+94 12 345 6789</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-sm" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">+94 32 444 699</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-sm" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">bookstore123@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="You email id here"
                className="bg-input border-none rounded-md px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground py-2 px-6 rounded-md text-sm font-medium hover:opacity-90 transition-colors w-fit"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Created By <span className="text-primary">Taqi Al-Din</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
