import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://picsum.photos/800",
    title: "Welcome to Our Club",
    subtitle: "Where great minds connect.",
  },
  {
    image: "https://picsum.photos/600",
    title: "Build Your Network",
    subtitle: "Meet like-minded professionals.",
  },
  {
    image: "https://picsum.photos/700",
    title: "Grow Together",
    subtitle: "Events, workshops, and more.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/*IMAGES*/}
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[index].image}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/*TEXT*/}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 md:px-16 text-white">
        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {slides[index].title}
        </motion.h1>
        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-2xl"
        >
          {slides[index].subtitle}
        </motion.p>
      </div>

      {/* ARROWS */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <Button
          variant="ghost"
          onClick={handlePrev}
          className="hover:bg-black/40 size-10 cursor-pointer"
        >
          <ChevronLeft className="size-8 text-white" />
        </Button>
        <Button
          variant="ghost"
          onClick={handleNext}
          className="hover:bg-black/40 size-10 cursor-pointer"
        >
          <ChevronRight className="size-8 text-white" />
        </Button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-16 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
