import heroImg from "@/assets/hero-truck.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[869px] w-full overflow-hidden bg-black">

      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black from-0% to-transparent to-40%" />

      <div className="relative mx-auto flex h-full max-w-[1920px] items-center px-6">
        <div className="ml-[96px] flex max-w-[898px] flex-col gap-[24px]">

          <h1 className="font-display text-[72px] font-extrabold leading-[84px] tracking-[-1.44px] text-white">
            Efficient Fueling for<br />Your Adventures
          </h1>

          <p className="max-w-lg text-lg font-medium leading-relaxed text-white/90">
            Engineered fueling operations designed for reliability, safety, and efficient marine logistics.
          </p>

          <div className="flex items-center gap-5">

            <Button className="h-auto rounded-[12px] border border-white bg-[#DD0302] px-9 py-4 text-base font-bold text-white shadow-[inset_0_0_12px_rgba(255,255,255,0.4),0_0_30px_rgba(221,3,2,0.5)] transition-all hover:scale-105 hover:bg-[#C00302]">
              Order Fuel
            </Button>

            <Button
              variant="outline"
              className="h-auto rounded-[12px] border border-white bg-white/10 px-9 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Get a Quote
            </Button>

          </div>

        </div>
      </div>
    </section>

  );
}