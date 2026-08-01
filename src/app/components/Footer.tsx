export default function Footer() {
  return (
    <footer className="bg-[#eceef0] dark:bg-[#2d3133] mt-12 border-t border-[#bfc7d1]/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] px-[16px] md:px-[48px] py-12 max-w-[1200px] mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[24px] leading-[32px] font-[Manrope] font-bold text-[#023E8A] tracking-tight">
              Puthal
            </span>
          </div>

          <p className="text-[#404850] text-[16px] leading-[24px] font-[Inter] font-normal mb-6 leading-relaxed">
            Empowering the next generation of digital wellness through
            innovative technology and human-centric design.
          </p>

          <div className="flex gap-4">
            <span className="material-symbols-outlined p-2 rounded-full bg-[#e6e8ea] text-[#005d90] cursor-pointer hover:bg-[#0077b6] hover:text-white transition-all">
              public
            </span>

            <span className="material-symbols-outlined p-2 rounded-full bg-[#e6e8ea] text-[#005d90] cursor-pointer hover:bg-[#0077b6] hover:text-white transition-all">
              language
            </span>

            <span className="material-symbols-outlined p-2 rounded-full bg-[#e6e8ea] text-[#005d90] cursor-pointer hover:bg-[#0077b6] hover:text-white transition-all">
              hub
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] font-bold text-[#005d90] uppercase mb-6">
            Company
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Our Services
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] font-bold text-[#005d90] uppercase mb-6">
            Support
          </h4>

          <ul className="space-y-4">
            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Help Center
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                className="text-[#404850] hover:text-[#005d90] transition-colors text-[16px] leading-[24px] font-[Inter]"
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] font-bold text-[#005d90] uppercase mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-[#404850] text-[16px] leading-[24px] font-[Inter]">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#006875]">
                mail
              </span>
              hello@puthal.com
            </li>

            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#006875]">
                call
              </span>
              +91 7724816439
            </li>

            <li className="mt-8">
              <div className="p-4 bg-[#f2f4f6] rounded-xl border border-[#bfc7d1]/30">
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] font-bold text-[#005d90] mb-2">
                  Global HQ
                </p>

                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter]">
                  Coastal Wellness Tower, Sector 45, Mumbai, India
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[16px] md:px-[48px] py-8 border-t border-[#bfc7d1]/20 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] text-[#404850]">
          © 2024 Puthal. Coastal Wellness for All.
        </p>

        <div className="flex gap-8">
          <a
            className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] text-[#404850] hover:text-[#005d90]"
            href="#"
          >
            Privacy
          </a>

          <a
            className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] text-[#404850] hover:text-[#005d90]"
            href="#"
          >
            Terms
          </a>

          <a
            className="text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] text-[#404850] hover:text-[#005d90]"
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}