import { useState, useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isServices = location.pathname === "/services";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn("fixed w-full top-0 z-50 transition", {
        "bg-white": scrolled || isServices,
        "bg-transparent": !scrolled && !isServices,
        "shadow-md": scrolled,
      })}
    >
      <div
        className={cn(
          "container mx-auto flex justify-between items-center p-4",
          {
            "text-white": !scrolled && !isServices,
            "text-black": scrolled || isServices,
          },
        )}
      >
        <Link to="/">
          <div className="text-xl font-bold">HFC</div>
        </Link>
        <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>
    </nav>
  );
}
