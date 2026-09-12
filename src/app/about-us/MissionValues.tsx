import Image from "next/image";

export default function MissionValues() {
  return (
    <section className="py-10 bg-[#ffffff]">
      <div className="px-[16px] md:px-[48px] max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[64px]">
          <h2
            className="
              text-[28px] leading-[36px] font-[600]
              md:text-[32px] md:leading-[40px]
              font-['Manrope',sans-serif]
              text-[#191c1e]
              mb-4
            "
          >
            Rooted in Wellness, Driven by Innovation
          </h2>

          <p
            className="
              text-[16px] leading-[24px] font-[400]
              font-['Inter',sans-serif]
              text-[#404850]
              max-w-[42rem]
              mx-auto
            "
          >
            We combine traditional therapeutic wisdom with cutting-edge
            technology to create a comprehensive sanctuary for your mind.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
          {/* Value 1 */}
          <div
            className="
              md:col-span-8
              group relative
              overflow-hidden
              rounded-[24px]
              bg-[#005d90]
              p-[32px]
              md:p-[48px]
              text-[#ffffff]
              shadow-[0_10px_25px_rgba(0,0,0,0.10)]
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              transition-all duration-300
            "
          >
            {/* Background Circle */}
            <div
              className="
                absolute top-0 right-0
                w-[256px] h-[256px]
                bg-white/10
                rounded-full
                -mr-[80px]
                -mt-[80px]
                blur-3xl
                transition-all duration-500
                group-hover:scale-110
              "
            />

            <div className="relative z-10">
  {/* Heading */}
  <h3
    className="
      text-[28px] leading-[36px] font-[600]
      md:text-[32px] md:leading-[40px]
      font-['Manrope',sans-serif]
      mb-[16px]
    "
  >
    Designed for Your Peace of Mind
  </h3>

{/* Description */}

  <p
    className="
      text-[18px] leading-[28px] font-[400]
      font-['Inter',sans-serif]
      opacity-90
      max-w-[32rem]
    "
  >
    Managing anxiety can feel overwhelming. Our experience is designed
    to feel calm, simple, and supportive — helping you slow down,
    understand your emotions, and take one small step at a time toward
    feeling better.
  </p>
</div>

{/* Tags */}

<div className="mt-[32px] flex flex-wrap gap-[12px] relative z-10">
  <div
    className="
      px-[16px] py-[8px]
      bg-white/20
      rounded-full
      text-[12px]
      leading-[16px]
      tracking-[0.05em]
      font-[600]
      font-['Inter',sans-serif]
      backdrop-blur-md
    "
  >
    Anxiety Friendly
  </div>

  <div
    className="
      px-[16px] py-[8px]
      bg-white/20
      rounded-full
      text-[12px]
      leading-[16px]
      tracking-[0.05em]
      font-[600]
      font-['Inter',sans-serif]
      backdrop-blur-md
    "
  >
    Calm & Supportive
  </div>
</div>

          </div>

          {/* Value 2 */}
         <div
  className="
    md:col-span-4
    rounded-[24px]
    bg-[#9cecfb]
    p-[32px]
    border
    border-[#bfc7d1]/20
    hover:-translate-y-1
    transition-transform duration-300
  "
>
  <span
    className="
      material-symbols-outlined
      text-[#016d7a]
      text-[36px]
      mb-[24px]
      block
    "
  >
    science
  </span>

  <h3
    className="
      text-[24px]
      leading-[32px]
      font-[600]
      font-['Manrope',sans-serif]
      text-[#016d7a]
      mb-[12px]
    "
  >
    Evidence-Based Support
  </h3>

  <p
    className="
      text-[#016d7a]/80
      text-[16px]
      leading-[24px]
      font-[400]
      font-['Inter',sans-serif]
    "
  >
    Our wellness tools are thoughtfully designed around psychological
    principles to help you understand anxiety, manage difficult emotions,
    and build healthier coping habits.
  </p>
</div>


          {/* Value 3 */}
          <div
  className="
    md:col-span-4
    rounded-[24px]
    bg-[#e6e8ea]
    p-[32px]
    border
    border-[#bfc7d1]/20
    hover:-translate-y-1
    transition-transform duration-300
  "
>
  <span
    className="
      material-symbols-outlined
      text-[#005d90]
      text-[36px]
      mb-[24px]
      block
    "
  >
    security
  </span>

  <h3
    className="
      text-[24px]
      leading-[32px]
      font-[600]
      font-['Manrope',sans-serif]
      text-[#191c1e]
      mb-[12px]
    "
  >
    Your Privacy Matters
  </h3>

  <p
    className="
      text-[#404850]
      text-[16px]
      leading-[24px]
      font-[400]
      font-['Inter',sans-serif]
    "
  >
    Your thoughts, feelings, and personal journey deserve to stay private.
    We take your privacy seriously and use strong security measures to
    protect your personal wellness data.
  </p>
</div>


          {/* Value 4 */}
         <div
  className="
    md:col-span-8
    rounded-[24px]
    bg-[#f2f4f6]
    border
    border-[#bfc7d1]/10
    p-[24px]
    md:p-[32px]
    flex
    flex-col
    md:flex-row
    gap-[32px]
    items-center
    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
  "
>
  {/* Image */}
  <div
    className="
      w-full
      md:w-1/3
      aspect-square
      rounded-[16px]
      overflow-hidden
      relative
      shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]
    "
  >
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2WthIok3b3qtaN8Lb_TqPx9ZqEKrPmtaX3yZifgJt69BeFuUi-hOt3zFqnV-LtNAycxAPFX-KuQJjpg8_kLhbTt9tNPaV4_x3ooQ8B5Z39nHdoywLoh6Uq8mvuJ_NgtqrrxzygBoKNOJijFzLc49_lWFxsVKDBiF0NQG5HMui4FHHzhLArLZmLmp10frDtpFSmOG-YoQyR6VDQ9adIdESwIvLxihX6LkFH4ONcw66iaRQbMUhZ5I7XVhdS3tNNWQj7_U3rVG8Rjk"
      alt="Peaceful nature representing mental wellness"
      sizes="(max-width: 768px) 100vw, 33vw"
      className="w-full h-full object-cover"
    />
  </div>

{/* Content */}

  <div className="flex-1">
    <h3
      className="
        text-[24px]
        leading-[32px]
        font-[600]
        font-['Manrope',sans-serif]
        text-[#191c1e]
        mb-[12px]
      "
    >
      Your Wellness Journey
    </h3>

<p
  className="
    text-[#404850]
    text-[16px]
    leading-[24px]
    font-[400]
    font-['Inter',sans-serif]
    mb-[16px]
  "
>
  From calming breathing exercises and mindfulness practices to
  personalized support, Puthal gives you simple tools to understand
  anxiety, manage everyday stress, and take care of your mental
  well-being at your own pace.
</p>

<a
  className="
    inline-flex
    items-center
    gap-[8px]
    text-[#005d90]
    font-bold
    hover:underline
  "
  href="#"
>
  Explore Your Wellness Tools
</a>


  </div>
</div>

        </div>
      </div>
    </section>
  );
}