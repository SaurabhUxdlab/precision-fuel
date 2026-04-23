import pfLogo from "../../assets/pf-logo.jpg";
import { cn } from "@/lib/utils";

const links = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact Us", href: "#" },
];

export function Navbar() {
  return (
    <header className="top-[39px] z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1920px] items-center justify-between px-6 font-manrope">

        {/* LOGO AREA */}
        <div className="flex items-center ml-[176px]">
          <a href="/" className="flex items-center gap-2">
            <img
              src={pfLogo}
              alt="Precision Fuels Logo"
              className="h-11 w-11 rounded-md object-cover"
            />
          </a>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-foreground/70 transition-all hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4 mr-[176px]">
          <button className={cn(
            "hidden rounded-[10px] border-[1.5px] border-primary/20 bg-background px-6 py-2.5 text-[14px] font-bold text-primary",
            " shadow-[0_10px_20px_-10px_rgba(221,3,2,0.3)] transition-all hover:bg-accent hover:border-primary/40 sm:inline-block"
          )}>
            Client Portal
          </button>
          <button className={cn(
            "rounded-[10px] bg-[#DD0302] px-7 py-2.5 text-[14px] font-bold text-primary-foreground",
            "shadow-[0_10px_20px_-10px_rgba(221,3,2,0.3)] transition-transform hover:scale-105 active:scale-95"
          )}>
            Order Fuel
          </button>
        </div>

      </div>
    </header>
  );
}
