import { useState, useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const backgroundWhite = location.pathname === "/candidates";
  const textBlack = location.pathname === "/events";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn("fixed w-full top-0 z-50 transition", {
        "bg-white": scrolled || backgroundWhite,
        "bg-transparent": !scrolled && !backgroundWhite,
        "shadow-md": scrolled,
      })}
    >
      <div
        className={cn(
          "container mx-auto flex justify-between items-center p-4",
          {
            "text-white": !scrolled && !backgroundWhite && !textBlack,
            "text-black": scrolled || backgroundWhite || textBlack,
          },
        )}
      >
        <Link to="/">
          <div className="text-xl font-bold">HFC</div>
        </Link>
        <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/candidates">Candidates</Link>
          <Link to="/events">Events</Link>
        </div>
        <Link to={"/apply"}>
          <Button variant={"primary"} className={"rounded-full px-10 py-6"}>
            Apply
          </Button>
        </Link>
      </div>
    </nav>
  );
}
