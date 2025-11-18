import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ImageGallery = () => {
  const images = [
    {
      src: "/image-1.webp",
      alt: "Living room at Alora Home Stay",
      label: "Living Room",
    },
    {
      src: "/image-2.webp",
      alt: "Dining hall at Alora Home Stay",
      label: "Dining Hall",
    },
    {
      src: "/image-3.webp",
      alt: "Kitchen at Alora Home Stay",
      label: "Kitchen",
    },
    {
      src: "/image-4.webp",
      alt: "Bedroom at Alora Home Stay",
      label: "Rooms",
    },
    {
      src: "/image-5.webp",
      alt: "Exterior view of Alora Home Stay",
      label: "Exterior",
    },
    {
      src: "/image-6.webp",
      alt: "Surroundings of Alora Home Stay",
      label: "Surroundings",
    },
    {
      src: "/image-7.webp",
      alt: "Common area at Alora Home Stay",
      label: "Common Area",
    },
    {
      src: "/image-8.webp",
      alt: "Bathroom at Alora Home Stay",
      label: "Bathroom",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Explore Alora
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our homely spaces and beautiful surroundings
          </p>
        </div>
        
        <div 
          className="flex w-full items-center justify-center overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <HoverExpandGallery images={images} />
        </div>
      </div>
    </section>
  );
};

const HoverExpandGallery = ({
  images,
  className,
}: {
  images: { src: string; alt: string; label: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive sizes based on window width
  const getActiveWidth = () => {
    if (windowWidth < 640) return "18rem";
    if (windowWidth < 1024) return "28rem";
    return "32rem";
  };

  const getInactiveWidth = () => {
    if (windowWidth < 640) return "3.5rem";
    if (windowWidth < 1024) return "5rem";
    return "5.5rem";
  };

  const getActiveHeight = () => {
    if (windowWidth < 640) return "18rem";
    if (windowWidth < 1024) return "28rem";
    return "32rem";
  };

  const getInactiveHeight = () => {
    if (windowWidth < 640) return "20rem";
    if (windowWidth < 1024) return "28rem";
    return "32rem";
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full min-w-fit", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-sm flex-shrink-0"
              initial={{ width: "3rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? getActiveWidth() : getInactiveWidth(),
                height: activeImage === index ? getActiveHeight() : getInactiveHeight(),
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => {
                if (!isTouchDevice) {
                  setActiveImage(index);
                }
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                setActiveImage(index);
              }}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute flex h-full w-full flex-col items-start justify-end p-3 sm:p-4 md:p-6 z-20"
                  >
                    <p className="text-xs sm:text-sm md:text-base font-medium text-white drop-shadow-lg">
                      {image.label}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageGallery;

