import aboutImg from "@/assets/about-fuel.jpg"

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[45.14px] w-[170.36px] items-center justify-center gap-[10.09px] rounded-[13.45px] border-[1.26px] border-black bg-transparent px-[20.18px] py-[7.57px] font-['Poppins'] text-[20.18px] font-medium leading-none text-black">
      {children}
    </span>
  )
}

export function About() {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="relative mx-auto max-w-[1728px] overflow-hidden rounded-[64px] bg-[#f0f0f0] shadow-sm">

        {/* Top-right cutout */}
        <div className="absolute right-0 top-0 hidden lg:block">
          <div className="h-44 w-80 rounded-bl-[72px] bg-white" />
        </div>

        {/* Red dot */}
        <div className="absolute right-[-20px] top-[96px] hidden h-3 w-3 rounded-full bg-red-500 lg:block" />

        {/* ================= ABOUT ================= */}
        <div className="mx-auto max-w-[1564px] px-8 py-16 sm:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* TEXT */}
            <div>
              <Pill>About Us</Pill>

              <h2 className="mt-6 font-jakarta text-[50.45px] font-semibold leading-[100%] text-gray-900">
                Welcome To Precision Fuels.
                <br />
                Fuel On Your Time.
              </h2>

              <p className="mt-6 font-poppins text-[23.2px] font-medium leading-[38px] text-gray-500">
                Precision Fuels is a trusted fuel delivery company for boating
                community, offering exceptional services in Miami Dade Broward
                counties, Florida. Our journey began over a year ago with a vision
                to simplify fueling experiences for boat owners and operators.
                What sets us apart is our commitment to punctuality, reliability,
                and personalized service.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={aboutImg}
                alt="Fuel pump nozzle"
                className="w-full rounded-3xl object-cover shadow-sm"
              />
            </div>

          </div>
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="mx-auto  max-w-[1564px] px-8 py-20 sm:px-14 text-center">

          <div className="flex items-center justify-center gap-4">
            <span className="inline-flex h-auto px-6 py-3 rounded-md border border-2px border-black bg-transparent font-poppins text-[20.18px] font-medium leading-[100%] text-gray-900 tracking-0">
              How It Works
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-center font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Get Started in 3 Simple Steps
          </h2>

          {/* SUBTEXT */}
          <p className="mx-auto mt-6 max-w-[900px] font-poppins text-[25.23px] font-medium leading-[100%] text-gray-500">
            Get started in minutes, not hours. Our streamlined onboarding process
            gets you up and running quickly.
          </p>

          {/* STEPS */}
          <div className="relative mt-20 flex w-full h-[465.63px] gap-[25.23px] justify-center">

            {/* dashed line */}
            <div className="absolute left-0 right-0 top-[110px] hidden border-t border-dashed border-gray-300 sm:block" />

            {[
              {
                n: "01",
                icon: "⛽",
                t: "Request Fuel",
                d: "Simple online booking through our app or website.",
              },
              {
                n: "02",
                icon: "🚛",
                t: "Fuel Dispatch",
                d: "Certified Technician is routed to your exact location.",
              },
              {
                n: "03",
                icon: "🚀",
                t: "Fuel Delivered",
                d: "Clean, safe dockside delivery with receipts.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative z-10 flex flex-col items-center w-[504.52px] h-[465.63px] rounded-[12.61px] border-[1.05px] border-gray-300 bg-white p-8 sm:p-12 text-center shadow-md transition hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="mb-8 text-7xl">{s.icon}</div>

                {/* NUMBER */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white">
                  {s.n}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col w-[462.47px] h-[108.2px] gap-[4.2px]">
                  {/* TITLE */}
                  <h4 className="font-urbanist text-[33.63px] font-semibold h-[40px] leading-[100%] tracking-0 text-gray-900">
                    {s.t}
                  </h4>

                  {/* DESC */}
                  <p className="font-poppins text-[21.02px] font-medium h-[64px] leading-[100%] tracking-0 text-gray-600">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
