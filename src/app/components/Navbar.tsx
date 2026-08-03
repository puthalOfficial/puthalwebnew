export default function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
      <div className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">
        Puthal
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a
          className="text-primary border-b-2 border-primary font-bold pb-1 text-label-md font-label-md"
          href="#"
        >
          Mental Wellness
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
          href="#"
        >
          Specialists
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
          href="#"
        >
          For Clinics
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
          href="#"
        >
          Our Story
        </a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md hover:opacity-90 active:scale-95 duration-150 ease-in-out transition-all">
        Get Started
      </button>
    </nav>
  );
}
