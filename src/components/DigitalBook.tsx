import banner from '@/assets/banner.jpg';

export function DigitalBook() {
  return (
    <section className="w-full bg-primary relative overflow-hidden">
      {/* Added 'relative' class here so the button can be positioned inside this box */}
      <div className="w-full relative">
        <img 
          src={banner} 
          alt="Digital Book" 
          className="w-full h-auto object-cover block"
        />
        
        {/* The new overlay button */}
        <button className="absolute bottom-[25%] left-[7%] bg-[#139a93] text-white text-sm font-medium px-6 py-2 shadow-sm hover:bg-[#108580] transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}