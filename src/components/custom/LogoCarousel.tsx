import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils.ts";
import bocconi from "@/assets/logos/bocconi.webp";
import hec from "@/assets/logos/hec.webp";
import opa from "@/assets/logos/opa.png";
import papei from "@/assets/logos/papei.png";
import lbs from "@/assets/logos/lbs.webp";

const LogoCarousel = () => {
  const logos = [
    { src: bocconi, alt: "Bocconi Logo" },
    { src: hec, alt: "HEC Logo" },
    { src: opa, alt: "OPA Logo", className: "w-52 max-w-60 mr-12" },
    { src: papei, alt: "PAPEI Logo" },
    { src: lbs, alt: "LBS Logo" },
  ];

  const firstSetRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const updateScrollDistance = () => {
      if (firstSetRef.current) {
        // Measure the width of the first set of logos
        const width = firstSetRef.current.offsetWidth;
        setScrollDistance(width);
      }
    };

    // Initial measurement
    updateScrollDistance();

    // Update on resize
    window.addEventListener("resize", updateScrollDistance);

    // Also update after images load
    const images = firstSetRef.current?.querySelectorAll("img");
    if (images) {
      let loadedCount = 0;
      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          // Small delay to ensure layout is complete
          setTimeout(updateScrollDistance, 100);
        }
      };
      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded);
        }
      });
    }

    return () => {
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-primary py-16 md:py-24">
      {/* Title - above on mobile, left side on desktop */}
      <div className="text-center md:text-left mb-8 md:mb-0 px-4 md:px-8 md:w-1/3 md:flex md:items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">
          Global Alumni Network
        </h1>
      </div>
      <div className="relative overflow-hidden w-full md:w-2/3">
        {/* Fade edges for smooth visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex gap-8 md:gap-16 items-center whitespace-nowrap animate-scroll-seamless"
          style={{
            animation: scrollDistance
              ? `scroll-seamless ${scrollDistance < 1000 ? 18 : 18}s linear infinite`
              : undefined,
            ["--scroll-distance" as string]: scrollDistance
              ? `${-scrollDistance}px`
              : undefined,
          }}
        >
          {/* Render exactly 2 sets for seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={`set-${setIndex}`}
              ref={setIndex === 0 ? firstSetRef : undefined}
              className="flex gap-8 md:gap-16 items-center flex-shrink-0"
            >
              {logos.map((logo, index) => (
                <div
                  className={cn(
                    "flex-shrink-0 flex items-center justify-center",
                    logo.className || "w-28 h-14 md:w-40 md:h-20",
                  )}
                  key={`set-${setIndex}-logo-${index}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-auto object-contain max-h-14 md:max-h-20"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
