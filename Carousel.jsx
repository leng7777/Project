import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    text: "Discover Amazing Artworks",
    img: "https://picsum.photos/id/1011/1200/400",
  },
  {
    id: 2,
    text: "Support Local Artists",
    img: "https://picsum.photos/id/1015/1200/400",
  },
  {
    id: 3,
    text: "Unique Styles, Just for You",
    img: "https://picsum.photos/id/1016/1200/400",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].img}
            alt="slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4">
              {slides[index].text}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
