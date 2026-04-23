import { Phone, Mail, Instagram } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-[#DD0302]">
      {/* 1920px container */}
      <div className="mx-auto flex h-[39px] max-w-[1920px] items-center justify-between px-6 font-manrope">

        {/* LEFT SIDE */}
        <div className="flex items-center ml-[176px]">

          {/* PHONE GROUP */}
          <div className="flex h-[24px] w-[137px] items-center gap-[10px]">
            <Phone className="h-[17px] w-[17px] stroke-[1.6]" />
            <span className="text-[14px] font-semibold leading-[24px] text-white">
              +1 234 567 890
            </span>
          </div>

          {/* DIVIDER */}
          <div className="mx-[16px] h-[23px] w-px bg-white opacity-70" />

          {/* EMAIL GROUP */}
          <div className="flex h-[24px] items-center gap-[10px]">
            <Mail className="h-[17px] w-[17px] stroke-[1.6]" />
            <span className="text-[14px] font-semibold leading-[24px] text-white">
              info@precisionfuels.com
            </span>
          </div>

        </div>

        {/* RIGHT INSTAGRAM BUTTON */}
        <div className="mr-[176px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[32px] w-[32px] hover:bg-white/30 transition-colors"
            aria-label="Follow on Instagram"
          >
            <Instagram className="h-[18px] w-[18px] text-white" />
          </a>
        </div>

      </div>
    </div>
  )
} 
