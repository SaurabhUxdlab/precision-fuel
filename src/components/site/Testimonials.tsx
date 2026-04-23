const items = [
  { name: "Sarah Mitchell", role: "Operations Manager, MarineCo", text: "Fuel delivery used to be a constant bottleneck for our fleet operations. Since switching to Precision, we've eliminated unnecessary downtime." },
  { name: "James Chen", role: "Fleet Director, Coastal Logistics", text: "This service has made it incredibly easy to ensure every truck is fueled without delays." },
  { name: "Maria Rodriguez", role: "Yacht Captain, Independent", text: "The reliability of this fuel delivery solution is unmatched. We no longer waste hours sending vessels to fuel stations." },
];

export function Testimonials() {
  return (
    <section className="bg-[#F9FAFB] py-24">

      <div className="mx-auto w-full max-w-[1564px] px-6 flex flex-col gap-[50px]">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-[16px]">

          <span className="inline-flex items-center justify-center gap-[10.09px] rounded-[13.45px] border-[1.26px] border-[#DD0302] px-[20.18px] py-[7.57px] font-poppins text-[20.18px] font-medium leading-[100%] tracking-normal text-[#DD0302]">
            Testimonials
          </span>


          <h2 className="mx-auto w-full max-w-[955px] font-jakarta text-[50.45px] font-semibold leading-none text-[#DD0302]">
            What Customers Say
          </h2>

          <p className="mx-auto h-[76px] w-full max-w-[786px] font-poppins text-[25.23px] font-medium leading-none text-gray-500">
            What our customer says about our efficient fuel delivery<br />services and our dedicated team in action.
          </p>

        </div>

        {/* CARDS */}
        <div className="flex w-full gap-[25px]">

          {items.map((t) => (
            <div
              key={t.name}
              className="flex h-[335.29px] w-[462.47px] flex-col rounded-[13px] border border-border bg-background pb-6 pl-[21.02px] pr-[21.02px] pt-[29.43px] shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >

              {/* QUOTE */}
              <div className="flex h-[88.29px] w-[77.78px] items-center justify-center">
                <span className="-rotate-180 font-['Port_Lligat_Slab'] text-[168.17px] leading-[100%] tracking-[0px] text-[#DD0302]">
                  “
                </span>
              </div>

              {/* TEXT */}
              <p className="mt-4 w-[420px] font-poppins text-[23.12px] font-medium leading-[1.2] text-foreground/80">
                {t.text}
              </p>

              {/* USER */}
              <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">

                {/* AVATAR */}
                <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#DD0302]/10 text-[#DD0302] font-poppins text-[14px] font-medium leading-none">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>

                {/* NAME + ROLE */}
                <div className="flex flex-col gap-[2px]">
                  <div className="w-[356px] font-poppins text-[24.57px] font-medium leading-none text-foreground">
                    {t.name}
                  </div>
                  <div className="w-[356px] font-poppins text-[17.87px] font-medium leading-none text-muted-foreground">
                    {t.role}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>


      </div>
    </section>
  );
}

