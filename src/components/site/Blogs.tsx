import { ArrowRight } from "lucide-react";

const posts = [
  {
    dot: "bg-blue-400",
    t: "The Future of Fueling: Why On-Demand Fuel Delivery Is Transforming",
    d: "Traditional fueling methods are no longer efficient for modern fleet-driven businesses...",
  },
  {
    dot: "bg-orange-400",
    t: "How Fuel Delivery Services Help Reduce Operational Costs for Businesses",
    d: "Fuel expenses are one of the biggest operational costs for fleet-based businesses...",
  },
  {
    dot: "bg-purple-500",
    t: "Safety and Compliance in Fuel Delivery: What Businesses Need to Know",
    d: "Fuel handling requires strict safety protocols and regulatory compliance. Professional...",
  },
];

export function Blogs() {
  return (
    <section className="bg-white py-24">

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1564px] px-6 flex flex-col gap-[50px]">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-[16px]">

          {/* BADGE */}
          <span className="inline-flex items-center justify-center gap-[10.09px] rounded-[13.45px] border-[1.26px] border-[#DD0302] px-[20.18px] py-[7.57px] font-poppins text-[20.18px] font-medium leading-[100%] text-[#DD0302]">
            Blogs
          </span>

          {/* TITLE */}
          <h2 className="w-full max-w-[955px] font-display text-[50.45px] font-semibold leading-[100%] text-[#DD0302]">
            Fueling Insights
          </h2>

          {/* DESCRIPTION */}
          <p className="w-full max-w-[786px] font-poppins text-[25.23px] font-medium leading-[100%] text-gray-500">
            Explore insights, trends, and strategies shaping the future of fuel delivery and fleet efficiency.
          </p>

        </div>

        {/* CARDS */}
        <div className="flex w-full justify-center gap-[68.43px]">

          {posts.map((p) => (
            <article
              key={p.t}
              className="flex h-[387.59px] w-[501.78px] flex-col justify-between rounded-[24.44px] border border-gray-200 bg-[#D9D9D9] p-[39.1px] transition-all hover:-translate-y-1 hover:shadow-lg"
            >

              {/* TOP */}
              <div>
                <div className="flex items-center justify-between">
                  <span className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                  <span className="font-display text-[17.11px] font-medium leading-[160%] text-gray-400">
                    5 min read
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-[24px] h-[120px] w-[423.58px] font-jakarta text-[31.77px] font-semibold leading-[150%] tracking-[-0.03em] text-gray-900">
                  {p.t}
                </h3>
              </div>

              {/* BOTTOM */}
              <div className="flex items-end justify-between gap-4">

                {/* DESCRIPTION */}
                <p className="max-w-[268.81px]  h-[74px]font-poppins text-[16px] leading-relaxed text-gray-500">
                  {p.d.length > 80 ? p.d.substring(0, 80) + "..." : p.d}
                </p>

                {/* BUTTON */}
                <button className="flex items-center justify-center rounded-[85.53px] border border-[#DD0302] px-[39.1px] py-[19.55px] text-[#DD0302] transition-all hover:bg-[#DD0302] hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
