import ctaImg from "@/assets/about-fuel.jpg";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative h-[277px] w-[1920px] overflow-hidden bg-black pt-[84px] pb-[69px] pl-[178px] pr-[177px]">

      {/* BACKGROUND IMAGE */}
      <img
        src={ctaImg}
        alt="CTA Background"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative flex h-full items-center justify-between">
        <h2 className="h-[124px] w-[1305px] font-jakarta text-[104px] font-semibold leading-[16px] tracking-normal text-white flex items-center">
          Ready To Get Fueled Up?
        </h2>

        <button className="flex h-[68.43px] w-[256.53px] items-center justify-center gap-[12px] rounded-[85.53px] border-[2px] border-white bg-transparent px-[39.1px] py-[19.55px] text-white transition-all hover:bg-white hover:text-black">
          <span className="font-jakarta text-[24px] font-semibold leading-[160%]">Get Started</span>
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

    </section>
  );
}
