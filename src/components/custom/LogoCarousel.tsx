import { cn } from "@/lib/utils.ts";
import LbsSvg from "@/assets/svgs/lbsSvg.tsx";
import bocconi from "@/assets/logos/bocconi.webp";
import hec from "@/assets/logos/hec.webp";
import opa from "@/assets/logos/opa.png";
import papei from "@/assets/logos/papei.png";

const LogoCarousel = () => {
  const logos = [
    { src: bocconi, alt: "Bocconi Logo", className: "" },
    { src: hec, alt: "HEC Logo", className: "" },
    { src: opa, alt: "OPA Logo", className: "w-52 max-w-60 mr-12" },
    { src: papei, alt: "PAPEI Logo", className: "" },
  ];

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

        <div className="flex animate-scroll gap-8 md:gap-16 items-center whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              className={cn(
                "flex-shrink-0 flex items-center justify-center",
                logo.className || "w-28 h-14 md:w-40 md:h-20",
              )}
              key={`first-${index}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain max-h-14 md:max-h-20"
              />
            </div>
          ))}
          {/* LBS SVG in first set */}
          <div className="flex-shrink-0 flex items-center justify-center w-28 h-14 md:w-40 md:h-20">
            <LbsSvg className="w-full h-full pl-1 md:pl-2" />
          </div>

          {/* Second set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              className={cn(
                "flex-shrink-0 flex items-center justify-center",
                logo.className || "w-28 h-14 md:w-40 md:h-20",
              )}
              key={`second-${index}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain max-h-14 md:max-h-20"
              />
            </div>
          ))}
          {/* LBS SVG in second set */}
          <div className="flex-shrink-0 flex items-center justify-center w-28 h-14 md:w-40 md:h-20">
            <LbsSvg className="w-full h-full pl-1 md:pl-2" />
          </div>

          {/* Third set for extra smoothness on wide screens */}
          {logos.map((logo, index) => (
            <div
              className={cn(
                "flex-shrink-0 flex items-center justify-center",
                logo.className || "w-28 h-14 md:w-40 md:h-20",
              )}
              key={`third-${index}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain max-h-14 md:max-h-20"
              />
            </div>
          ))}
          {/* LBS SVG in third set */}
          <div className="flex-shrink-0 flex items-center justify-center w-28 h-14 md:w-40 md:h-20">
            <LbsSvg className="w-full h-full pl-1 md:pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
