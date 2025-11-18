import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  const videos = [
    {
      src: "/video-1.webm",
      poster: "/image-1.webp",
      title: "Interiors",
      description: "Explore our beautifully designed living spaces",
    },
    {
      src: "/video-2.webm",
      poster: "/image-2.webp",
      title: "Rooms",
      description: "Comfortable and cozy accommodations",
    },
    {
      src: "/video-3.webm",
      poster: "/image-3.webp",
      title: "View & Surroundings",
      description: "Peaceful neighborhood and scenic views",
    },
    {
      src: "/video-4.webm",
      poster: "/image-4.webp",
      title: "Common Areas",
      description: "Spacious and welcoming shared spaces",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Experience Alora
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our homely spaces and beautiful surroundings
          </p>
        </div>

        <div className="flex w-full items-center justify-center">
          <VideoExpandGallery videos={videos} />
        </div>
      </div>
    </section>
  );
};

const VideoExpandGallery = ({
  videos,
  className,
}: {
  videos: { src: string; poster: string; title: string; description: string }[];
  className?: string;
}) => {
  // First video (index 0) is always open
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(0); // First video auto-plays
  const [windowWidth, setWindowWidth] = useState(1024);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play first video on mount
  useEffect(() => {
    // Small delay to ensure video element is rendered
    const timer = setTimeout(() => {
      setPlayingVideo(0);
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        firstVideo.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle video play/pause
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (playingVideo === index && activeVideo === index) {
        video.play().catch((err) => {
          console.log(`Error playing video ${index}:`, err);
        });
      } else {
        video.pause();
      }
    });
  }, [playingVideo, activeVideo]);

  const handleVideoClick = (index: number) => {
    // Always set active video when clicked
    setActiveVideo(index);
    
    // Toggle play/pause for the clicked video
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  const handleVideoActivate = (index: number) => {
    // When video becomes active (hover/expand), start playing it
    setActiveVideo(index);
    setPlayingVideo(index);
  };

  // Responsive heights for reel format (vertical videos)
  const getActiveHeight = () => {
    const width = typeof window !== 'undefined' ? windowWidth : 1024;
    if (width < 640) return "400px"; // Mobile: taller for reel format
    if (width < 1024) return "500px"; // Tablet
    return "600px"; // Desktop
  };

  const getInactiveHeight = () => {
    const width = typeof window !== 'undefined' ? windowWidth : 1024;
    if (width < 640) return "3rem";
    if (width < 1024) return "3.5rem";
    return "4rem";
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-md mx-auto", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-sm w-full"
              initial={{ 
                height: index === 0 
                  ? (windowWidth < 640 ? "400px" : windowWidth < 1024 ? "500px" : "600px")
                  : (windowWidth < 640 ? "3rem" : windowWidth < 1024 ? "3.5rem" : "4rem")
              }}
              animate={{
                height: activeVideo === index ? getActiveHeight() : getInactiveHeight(),
              }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              onClick={() => handleVideoClick(index)}
              onHoverStart={() => {
                if (!isTouchDevice) {
                  handleVideoActivate(index);
                }
              }}
              onHoverEnd={() => {
                // Optional: Keep video active on hover end, or remove this if you want it to stay
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                handleVideoActivate(index);
              }}
              whileHover={{
                scale: activeVideo === index ? 1 : 1.02,
              }}
            >
              <div className="relative h-full w-full overflow-hidden">
                {activeVideo === index ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      key={`video-${index}`}
                      src={video.src}
                      poster={video.poster}
                      className="h-full w-full object-cover"
                      controls={playingVideo === index}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onError={(e) => {
                        console.error(`Error loading video ${index}:`, e);
                      }}
                      onLoadedData={() => {
                        if (playingVideo === index && videoRefs.current[index]) {
                          videoRefs.current[index]?.play().catch((err) => {
                            console.log(`Autoplay prevented for video ${index}:`, err);
                          });
                        }
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                ) : (
                  <motion.img
                    src={video.poster}
                    className="h-full w-full object-cover"
                    alt={video.title}
                    loading="lazy"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      console.error(`Error loading poster ${index}:`, e);
                    }}
                  />
                )}

                <AnimatePresence>
                  {activeVideo === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeVideo === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                      className="absolute flex h-full w-full flex-col items-start justify-end p-4 md:p-6 z-20"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 w-full">
                        <AnimatePresence>
                          {playingVideo !== index && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/30 transition-colors"
                            >
                              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5 sm:ml-1" fill="white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                            {video.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-white/90">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {activeVideo !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center px-4">
                      <h3 className="text-sm md:text-base font-medium text-white">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoShowcase;

