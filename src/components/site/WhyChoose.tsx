import { Zap, Calendar, DollarSign, ShieldCheck } from "lucide-react";
import marineImg from "@/assets/marine-yacht.jpg";

const features = [
  {
    icon: Zap,
    t: "Fast turnaround",
    d: "Dispatched in minutes for rapid delivery on your schedule.",
  },
  {
    icon: Calendar,
    t: "Reliable scheduling",
    d: "Automated reminders and proactive scheduling for your operations.",
  },
  {
    icon: DollarSign,
    t: "Competitive pricing",
    d: "Clear, no-extra-fees model that beats market averages.",
  },
  {
    icon: ShieldCheck,
    t: "Safety compliant",
    d: "Strict adherence to USCG and environmental protection protocols.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-background py-24">

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1564px] px-6 flex flex-col gap-[50px]">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-[50px]">

          <span className="inline-flex items-center justify-center gap-[10px] rounded-[13px] border border-[#DD0302] px-5 py-2 text-[20px] font-medium text-[#DD0302] font-poppins">
            Why Choose Us
          </span>

          <h2 className="font-jakarta text-[50px] font-semibold leading-tight text-[#DD0302]">
            Reliable Fueling Solutions
          </h2>

          <p className="max-w-[786px] text-center font-poppins text-[25px] font-medium leading-relaxed text-gray-500">
            Engineered fueling operations designed for reliability, safety, and efficient marine logistics.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="w-full max-w-[788px] aspect-[788/591] overflow-hidden rounded-[17px] shadow-[var(--shadow-card)]">
            <img
              src={marineImg}
              alt="Marine yacht"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full max-w-[708.83px] flex-col gap-[16px]">

            <span className="inline-flex w-fit items-center justify-center gap-[11.81px] rounded-[47.24px] border border-[#DD0302] px-[23.62px] py-[8.86px] font-poppins text-[23px] font-medium leading-[1] text-[#DD0302]">
              The Competitive Edge
            </span>

            <h3 className="max-w-[708.83px] font-jakarta text-[50px] font-semibold leading-[1] tracking-tight text-gray-900">
              Marine Precision Engineering<br />Every Gallon
            </h3>

            <ul className="flex flex-col gap-[16px]">

              {features.map((f) => (
                <li key={f.t} className="flex items-start gap-[16px]">

                  {/* ICON */}
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-[12px] bg-[#FEE2E2] text-[#DD0302]">
                    <f.icon className="h-6 w-6 stroke-[2.5px]" />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col gap-[4px]">

                    {/* TITLE */}
                    <div className="w-[250px] font-poppins text-[23px] font-medium leading-[28px] text-gray-900">
                      {f.t}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="w-[610px] font-poppins text-[18px] font-medium leading-[24px] text-gray-600">
                      {f.d}
                    </p>

                  </div>

                </li>
              ))}

            </ul>
          </div>


        </div>
      </div>
    </section>
  );
}
