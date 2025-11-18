import { Home, Sofa, Droplet, Users, Leaf, Wifi, Shield } from 'lucide-react'
import { useRef } from 'react'
import { useScroll, useTransform, motion, useInView } from 'framer-motion'

export default function AmenitiesSection() {
    const imageRef = useRef<HTMLImageElement>(null)
    const amenitiesRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"]
    })
    
    // Scale from 0.5 to 1, then stay at 1
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1])
    // Fade in from 0.7 to 1, then stay at 1
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 1])
    
    // Check if amenities section is in view
    const amenitiesInView = useInView(amenitiesRef, { once: true, margin: "-100px" })
    const headingInView = useInView(headingRef, { once: true, margin: "-50px" })
    
    const amenities = [
        {
            icon: Home,
            title: "Spacious home",
            description: "Comfortable and roomy living spaces for your family"
        },
        {
            icon: Sofa,
            title: "Fully furnished",
            description: "Complete with all essential furniture and amenities"
        },
        {
            icon: Droplet,
            title: "24/7 water",
            description: "Round-the-clock water supply for your convenience"
        },
        {
            icon: Users,
            title: "Family-friendly environment",
            description: "Safe and welcoming atmosphere for families"
        },
        {
            icon: Leaf,
            title: "Peaceful location",
            description: "Tranquil residential neighborhood away from noise"
        },
        {
            icon: Wifi,
            title: "High-speed internet",
            description: "Fast and reliable internet connection throughout"
        },
        {
            icon: Shield,
            title: "Safe residential area",
            description: "Secure neighborhood ensuring your peace of mind"
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={headingRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center mb-2"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="text-3xl md:text-5xl text-foreground mb-4"
                    >
                        Why Choose Alora?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Experience the perfect blend of homely comfort and modern amenities in the heart of Guwahati, Assam.
                    </motion.p>
                </motion.div>

                {/* Animated Image */}
                <motion.img
                    ref={imageRef}
                    className="rounded-sm grayscale hover:grayscale-0 transition-all duration-300 w-full mx-auto"
                    src="/hero-5.webp"
                    alt="Alora home stay interior"
                    loading="lazy"
                    style={{
                        scale,
                        opacity,
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    initial={{ scale: 0.5, opacity: 0.7 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 1
                    }}
                />

                {/* Amenities Grid */}
                <motion.div
                    ref={amenitiesRef}
                    className="relative mx-auto grid grid-cols-2 pt-4 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4"
                    initial="hidden"
                    animate={amenitiesInView ? "visible" : "hidden"}
                >
                    {amenities.map((amenity, index) => {
                        const Icon = amenity.icon
                        return (
                            <motion.div
                                key={index}
                                className="space-y-3"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: [0.4, 0, 0.2, 1]
                                        }
                                    }
                                }}
                            >
                                <motion.div
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={amenitiesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                                >
                                    <Icon className="size-4 text-primary" />
                                    <h3 className="text-sm font-medium text-foreground">
                                        {amenity.title}
                                    </h3>
                                </motion.div>
                                <motion.p
                                    className="text-muted-foreground text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={amenitiesInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                                >
                                    {amenity.description}
                                </motion.p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}