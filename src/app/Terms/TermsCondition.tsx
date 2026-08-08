import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      description:
        "By using Puthal Wellness, you agree to these Terms & Conditions. If you do not agree, please discontinue using our services.",
    },
    {
      title: "2. Eligibility",
      description:
        "You must be at least 18 years old or have permission from a legal guardian to use our platform.",
    },
    {
      title: "3. User Accounts",
      description:
        "You are responsible for maintaining the security of your account and password. Any activity under your account is your responsibility.",
    },
    {
      title: "4. Services",
      description:
        "Puthal Wellness provides clinic management, appointment booking, patient records, billing, and related healthcare services.",
    },
    {
      title: "5. Privacy",
      description:
        "Your information is protected using industry-standard security practices. Please review our Privacy Policy for more details.",
    },
    {
      title: "6. Payments",
      description:
        "Subscription fees and payments must be made according to your selected plan. Refunds are subject to our refund policy.",
    },
    {
      title: "7. Prohibited Activities",
      description:
        "Users must not misuse the platform, attempt unauthorized access, upload harmful content, or violate any applicable laws.",
    },
    {
      title: "8. Limitation of Liability",
      description:
        "Puthal Wellness is not responsible for indirect losses, service interruptions, or damages arising from misuse of the platform.",
    },
    {
      title: "9. Changes to Terms",
      description:
        "We may update these Terms from time to time. Continued use of the platform means you accept the updated Terms.",
    },
    {
      title: "10. Contact Us",
      description:
        "If you have any questions regarding these Terms, please contact us at support@puthalwellness.com.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
  <div className="mx-auto max-w-4xl px-6 py-16">

    {/* Header */}
    <header className="border-b border-gray-200 pb-10">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900">
        Terms & Conditions
      </h1>

      <p className="mt-4 text-gray-600 leading-8">
        These Terms & Conditions govern your use of the
        Puthal Wellness platform.
      </p>

      <p className="mt-3 text-sm text-gray-500">
        Last Updated — August 7, 2026
      </p>
    </header>

    {/* Content */}
    <div className="mt-12 space-y-14">

      <section>
        <h2 className="text-2xl font-semibold">
          1. Acceptance of Terms
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          ...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          2. User Accounts
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          ...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          3. Privacy
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          ...
        </p>
      </section>

    </div>

  </div>
</div>
<Footer/>
</>
  );
}