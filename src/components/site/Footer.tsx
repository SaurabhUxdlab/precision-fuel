import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/pf-logo.jpg";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-[80px]">
      <div className="w-full px-[100px] flex justify-between items-start">

        {/* LEFT SECTION */}
        <div className="flex w-[712px] h-[303.33px] flex-col gap-[24px]">
          <img
            src={logo}
            alt="Precision Fuels"
            className="h-[96px] w-[177px] object-contain self-start"
          />
          <p className="w-[712px] h-[114px] font-poppins text-[20px] font-medium leading-[37.96px] text-gray-500">
            Precision Fuels is a trusted fuel delivery company for boating
            community, offering exceptional services in Miami Dade Broward
            counties, Florida.
          </p>
          <div className="flex gap-[24px]">
            <a href="#" className="text-[#DD0302] hover:opacity-80 transition-opacity">
              <Facebook className="h-6 w-6 fill-current" />
            </a>
            <a href="#" className="text-[#DD0302] hover:opacity-80 transition-opacity">
              <Twitter className="h-6 w-6 fill-current" />
            </a>
            <a href="#" className="text-[#DD0302] hover:opacity-80 transition-opacity">
              <Linkedin className="h-6 w-6 fill-current" />
            </a>
            <a href="#" className="text-[#DD0302] hover:opacity-80 transition-opacity">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex w-[855.83px] h-[264.83px] gap-[153.33px]">
          
          {/* Navigation */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-jakarta text-[22px] font-bold text-[#DD0302]">Navigation</h4>
            <ul className="flex flex-col gap-[32px] font-['Roboto'] text-[18.67px] font-normal leading-none tracking-[-0.02em] text-gray-400">
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Licence */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-jakarta text-[22px] font-bold text-[#DD0302]">Licence</h4>
            <ul className="flex flex-col gap-[32px] font-['Roboto'] text-[18.67px] font-normal leading-none tracking-[-0.02em] text-gray-400">
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Copyright</a></li>
              <li><a href="#" className="hover:text-[#DD0302] transition-colors">Email Address</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-jakarta text-[22px] font-bold text-[#DD0302]">Contact</h4>
            <ul className="flex flex-col gap-[32px] font-['Roboto'] text-[18.67px] font-normal leading-none tracking-[-0.02em] text-gray-400">
              <li className="flex items-center gap-4">
                <Phone className="h-[19.2px] w-[27.22px] fill-[#DD0302] text-[#DD0302]" />
                <span>123 456 7890</span>
              </li>
              <li className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DD0302" className="h-[19.2px] w-[27.22px]">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span>info@precisionfuel.com</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="h-[19.2px] w-[27.22px] fill-[#DD0302] text-[#DD0302]" />
                <span>Floriids</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}