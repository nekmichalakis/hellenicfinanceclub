import { useState, useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const backgroundWhite = location.pathname === "/members";
  const textBlack = location.pathname === "/events";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn("fixed w-full top-0 z-50 transition-colors duration-100", {
        "bg-white": scrolled || backgroundWhite || menuOpen,
        "bg-transparent": !scrolled && !backgroundWhite && !menuOpen,
        "shadow-md": scrolled,
      })}
    >
      <div
        className={cn(
          "max-w-[90%] mx-auto flex justify-between items-center p-4 transition-colors duration-100",
          {
            "text-white":
              !scrolled && !backgroundWhite && !textBlack && !menuOpen,
            "text-black": scrolled || backgroundWhite || textBlack || menuOpen,
          },
        )}
      >
        <Link to="/">
          <div className="text-xl font-bold">HFN</div>
        </Link>
        {/* Hamburger for mobile */}
        <Button
          className="md:hidden"
          variant="ghost"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon className={"size-6"} />
        </Button>
        {/* Navigation links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/members">Members</Link>
          <Link to="/events">Events</Link>
        </div>
        <Link to={"/apply"} className="hidden md:block">
          <Button
            variant={"primary"}
            className={"rounded-full px-10 py-6 hover:bg-chart-2"}
          >
            Apply
          </Button>
        </Link>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-full flex flex-col items-center py-4 gap-8">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/members" onClick={() => setMenuOpen(false)}>
            Members
          </Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
          <Link to="/apply" onClick={() => setMenuOpen(false)}>
            <Button
              variant={"primary"}
              className={"rounded-full px-8 hover:bg-chart-2"}
            >
              Apply
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
