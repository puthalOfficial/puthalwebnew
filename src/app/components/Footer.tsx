export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/20 py-12">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-4">
          <div className="text-headline-md font-headline-md font-bold text-deep-ocean">
            PuthalWeb
          </div>
          <p className="text-body-md text-on-surface-variant">
            Empowering the next generation of digital wellness through
            innovative technology and human-centric design.
          </p>
          <div className="flex gap-4">
            <a className="text-primary hover:scale-110 transition-transform" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-primary hover:scale-110 transition-transform" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
            Company
          </h5>
          <ul className="space-y-3 text-label-sm">
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Our Services
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
            Support
          </h5>
          <ul className="space-y-3 text-label-sm">
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
            Connect
          </h5>
          <p className="text-label-sm text-on-surface-variant mb-4">
            hello@puthal.com
          </p>
          <p className="text-label-sm text-on-surface-variant">
            +91 7724816439
          </p>
          <div className="mt-6">
            <p className="text-label-sm font-bold text-deep-ocean">
              Newsletter
            </p>
            <div className="mt-2 flex gap-2">
              <input
                className="bg-surface rounded-lg border-none text-label-sm w-full"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-label-sm text-on-surface-variant">
          © 2024 Puthal. Coastal Wellness for All.
        </p>
        <div className="flex gap-6 text-label-sm text-on-surface-variant">
          <a className="hover:underline" href="#">
            Privacy
          </a>
          <a className="hover:underline" href="#">
            Terms
          </a>
          <a className="hover:underline" href="#">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
