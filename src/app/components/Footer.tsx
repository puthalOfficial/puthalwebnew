export default function Footer() {
  return (
    <footer className="border-t border-[#bfc7d1]/20 bg-[#eceef0] py-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-4 md:grid-cols-4 md:px-12">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="font-[Manrope] text-[24px] font-bold leading-[32px] text-[#023E8A]">
            PuthalWeb
          </h2>

          <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
            Empowering the next generation of digital wellness through
            innovative technology and human-centric design.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#005d90] transition-transform hover:scale-110"
            >
              <span className="material-symbols-outlined">public</span>
            </a>

            <a
              href="#"
              className="text-[#005d90] transition-transform hover:scale-110"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h5 className="mb-6 font-[Inter] text-[14px] font-bold leading-[20px] text-[#023E8A]">
            Company
          </h5>

          <ul className="space-y-3 text-[12px] leading-[16px]">
            <li>
              <a
                href="/about-us"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/patient-services"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Our Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="mb-6 font-[Inter] text-[14px] font-bold leading-[20px] text-[#023E8A]">
            Support
          </h5>

          <ul className="space-y-3 text-[12px] leading-[16px]">
            
            <li>
              <a
                href="/Terms"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/feedBack"
                className="text-[#404850] transition-colors hover:text-[#005d90]"
              >
                Feedback
              </a>
            </li>
          </ul>

        </div>

        {/* Connect */}
        <div>
          <h5 className="mb-6 font-[Inter] text-[14px] font-bold leading-[20px] text-[#023E8A]">
            Connect
          </h5>

          <p className="mb-4 text-[12px] leading-[16px] text-[#404850]">
            hello@puthal.com
          </p>

          <p className="text-[12px] leading-[16px] text-[#404850]">
            +91 7724816439
          </p>

          <div className="mt-6">
            <p className="font-[Inter] text-[12px] font-bold leading-[16px] text-[#023E8A]">
              Newsletter
            </p>

            <div className="mt-2 flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-[#f7f9fb] px-3 py-2 text-[12px] outline-none"
              />

              <button className="rounded-lg bg-[#005d90] px-4 py-2 text-white transition hover:opacity-90">
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-[#bfc7d1]/10 px-4 pt-8 md:flex-row md:px-12">
        <p className="text-[12px] leading-[16px] text-[#404850]">
          © 2024 Puthal. Coastal Wellness for All.
        </p>

        <div className="flex gap-6 text-[12px] leading-[16px] text-[#404850]">
          <a href="#" className="hover:underline">
            Privacy
          </a>

          <a href="#" className="hover:underline">
            Terms
          </a>

          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}