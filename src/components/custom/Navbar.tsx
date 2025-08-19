import { useState, useEffect } from "react";
import { cn } from "@/lib/utils.ts";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn("fixed w-full top-0 z-50 transition", {
        "bg-white": scrolled,
        "bg-transparent": !scrolled,
        "shadow-md": scrolled,
      })}
    >
      <div
        className={cn(
          "container mx-auto flex justify-between items-center p-4",
          {
            "text-white": !scrolled,
            "text-black": scrolled,
          },
        )}
      >
        <div className="text-xl font-bold">HFC</div>
        <ul className="flex space-x-6">
          {["Home", "About", "Services", "Events"].map((item) => (
            <li key={item} className="hover:text-primary cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
