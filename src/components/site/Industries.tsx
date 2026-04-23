import marine from "@/assets/ind-marine.jpg"
import construction from "@/assets/ind-construction.jpg"
import transport from "@/assets/ind-transport.jpg"
import agriculture from "@/assets/ind-agriculture.jpg"
import emergency from "@/assets/ind-emergency.jpg"
import industrial from "@/assets/ind-industrial.jpg"

const items = [
  { t: "Marine & Marinas", img: marine },
  { t: "Agriculture Operations", img: agriculture },
  { t: "Construction & Heavy Equipment", img: construction },
  { t: "Emergency & Backup Power", img: emergency },
  { t: "Transportation & Logistics Fleets", img: transport },
  { t: "Industrial & Manufacturing", img: industrial },
]

export function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1564px] px-6 flex flex-col gap-[50px]">

        {/* HEADER */}
        <div className="w-full max-w-[1034px] flex flex-col gap-[16px]">

          <span className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-primary px-6 py-2 text-lg font-medium text-primary">
            Industries We Serve
          </span>

          <h2 className="max-w-[904px] font-display text-4xl sm:text-5xl font-semibold leading-tight text-primary">
            Fuel Solutions Built for Every Industry
          </h2>

          <p className="max-w-[604px] font-sans text-lg sm:text-xl font-medium leading-relaxed text-muted-foreground">
            We support a wide range of industries with reliable, scalable fuel delivery services.
          </p>

        </div>

        {/* CONTENT */}
        <div className="relative overflow-hidden">

          {/* LEFT CARD */}
          <div className="w-full max-w-[1257px] rounded-[40px] bg-[#F3F4F6] p-16 pr-[200px] relative">


            <h3 className="mb-10 font-['Poppins'] text-[28px] font-normal text-gray-900">
              We Proudly Serve :
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-20 gap-y-2">
              {items.map((it) => (
                <div key={it.t} className="flex w-[476px] flex-col">
                  {/* Bullet + Title inline */}
                  <div className="flex items-baseline gap-3 font-['Poppins'] text-[26px] font-normal leading-[89px] tracking-[0px] text-gray-900">
                    <span className="text-gray-400 text-[22px] leading-none">•</span>
                    <span>{it.t}</span>
                  </div>
                  {/* Image below the title */}
                  <img
                    src={it.img}
                    alt={it.t}
                    className="h-[105px] w-[136px] rounded-[16px] object-cover shadow-sm ml-[20px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RADAR (RIGHT SIDE) - partially clipped matching screenshot */}
          <div className="absolute right-[-200px] top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 lg:block">
            <div className="relative h-full w-full">
              {/* Concentric Circles */}
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-gray-300"
                  style={{ inset: `${i * 7}%`, borderWidth: '1px' }}
                />
              ))}
              {/* Axis Lines */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300/50" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-gray-300/50" />
              {/* Center PF Icon */}
              <div className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#001B44] text-white text-sm font-bold">PF</div>
              {/* Radar Images matching screenshot positions */}
              <div className="absolute left-[18%] top-[16%] z-10">
                <img src={marine} className="h-14 w-20 rounded-lg object-cover shadow-md outline outline-2 outline-white" />
              </div>
              <div className="absolute right-[4%] top-[38%] z-10">
                <img src={agriculture} className="h-14 w-20 rounded-lg object-cover shadow-md outline outline-2 outline-white" />
              </div>
              <div className="absolute bottom-[16%] left-[58%] z-10">
                <img src={transport} className="h-14 w-20 rounded-lg object-cover shadow-md outline outline-2 outline-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
