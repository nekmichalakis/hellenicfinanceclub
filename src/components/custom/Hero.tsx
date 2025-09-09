import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import skyscrapersImage from "@/assets/skyscrapers.webp";
import whiteboardImage from "@/assets/whiteboard.webp";
import chessImage from "@/assets/chess.webp";

const slides = [
  {
    image: skyscrapersImage,
    title: "Created by Students",
    title2: "Built for Breakthroughs",
    subtitle:
      "A student-led network of Greece’s top talent, united by a shared drive to explore elite global finance opportunities.",
  },
  {
    image: chessImage,
    title: "Strategic mentorship for students targeting high finance roles.",
    subtitle:
      "Beyond ambition, our workshops transform potential into practical expertise — giving members the technical edge demanded by global finance firms.",
  },
  {
    image: whiteboardImage,
    title: "Exclusive events that connect ambition with opportunity.",
    subtitle:
      "Our curated events bring members face-to-face with professionals, firms, and challenges from the world of high finance—bridging the gap between classroom and career.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
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
      <div className="absolute inset-0 flex flex-col justify-center items-start mx-auto max-w-6xl px-8 md:px-16 text-white">
        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-semibold mb-4"
        >
          {slides[index].title}
          <br />
          {slides[index].title2}
        </motion.h1>
        <motion.p
          key={slides[index].subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl max-w-3xl font-light"
        >
          {slides[index].subtitle}
        </motion.p>
      </div>

      {/* ARROWS */}
      <div className="absolute inset-0 items-center justify-between px-4 z-20 hidden md:flex">
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
