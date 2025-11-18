import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({ 
  title, 
  description, 
  backgroundImage = "/hero-1.webp",
  children 
}: PageHeaderProps) => {
  return (
    <section 
      className="relative pt-32 pb-16 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-4 ">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;

