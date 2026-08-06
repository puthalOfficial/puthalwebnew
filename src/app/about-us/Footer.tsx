export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-inverse-surface mt-12 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max-width mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-headline-md font-headline-md font-bold text-deep-ocean tracking-tight">
              Puthal
            </span>
          </div>
          <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">
            Empowering the next generation of digital wellness through
            innovative technology and human-centric design.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined p-2 rounded-full bg-surface-container-high text-primary cursor-pointer hover:bg-primary-container hover:text-white transition-all">
              public
            </span>
            <span className="material-symbols-outlined p-2 rounded-full bg-surface-container-high text-primary cursor-pointer hover:bg-primary-container hover:text-white transition-all">
              language
            </span>
            <span className="material-symbols-outlined p-2 rounded-full bg-surface-container-high text-primary cursor-pointer hover:bg-primary-container hover:text-white transition-all">
              hub
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm font-bold text-primary uppercase mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm font-bold text-primary uppercase mb-6">
            Support
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors text-body-md"
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-sm font-label-sm font-bold text-primary uppercase mb-6">
            Contact
          </h4>
          <ul className="space-y-4 text-on-surface-variant text-body-md">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              hello@puthal.com
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                call
              </span>
              +91 7724816439
            </li>
            <li className="mt-8">
              <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <p className="text-label-sm font-label-sm font-bold text-primary mb-2">
                  Global HQ
                </p>
                <p className="text-label-sm font-label-sm">
                  Coastal Wellness Tower, Sector 45, Mumbai, India
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/20 max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-sm font-label-sm text-on-surface-variant">
          © 2024 Puthal. Coastal Wellness for All.
        </p>
        <div className="flex gap-8">
          <a
            className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-label-sm font-label-sm text-on-surface-variant hover:text-primary"
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
