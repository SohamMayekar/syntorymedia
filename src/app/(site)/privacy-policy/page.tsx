import SEO from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Privacy Policy | Syntory Media"
        description="Learn about Syntory Media's privacy practices and how we protect your data."
        url="https://www.syntorymedia.com/privacy-policy"
        keywords="privacy policy, data protection, Syntory Media"
      />
      <section>
        <div
          className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
        >
          <div className="container relative z-10">
            <div className='flex flex-col gap-5'>
              <h1 className='md:text-6xl text-4xl font-medium text-center'>
                Privacy Policy
              </h1>
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                <p className="text-sm text-gray-500">Effective Date: July 25, 2025</p>
                <p className="mt-5">
                  Syntory Media is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">1. Information We Collect</h4>
                <p className="mt-5">
                  We may collect the following types of information:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li><strong>Personal Information</strong>
                    <ul className="list-disc list-inside ml-5">
                      <li>Name, email address, contact number</li>
                      <li>Business/brand name</li>
                      <li>Project-related details</li>
                    </ul>
                  </li>
                  <li className="mt-5"><strong>Usage Data</strong>
                    <ul className="list-disc list-inside ml-5">
                      <li>IP address, browser type, device information</li>
                      <li>Pages visited, time spent on pages</li>
                      <li>Referral sources</li>
                    </ul>
                  </li>
                  <li className="mt-5"><strong>Communication Data</strong>
                    <ul className="list-disc list-inside ml-5">
                      <li>Emails, messages, or form submissions</li>
                      <li>Social media interactions</li>
                    </ul>
                  </li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">2. How We Use Your Information</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>Communicate with you about your project or inquiry</li>
                  <li>Provide and improve our services</li>
                  <li>Send updates, invoices, or project-related documents</li>
                  <li>Analyze traffic and user behavior on our website</li>
                  <li>Showcase project results (with your consent)</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">3. How We Protect Your Information</h4>
                <p className="mt-5">
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">4. Sharing of Information</h4>
                <p className="mt-5">
                  We do not sell, rent, or trade your information. We may share your information with:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>Trusted partners who help us deliver our services (e.g., hosting, analytics)</li>
                  <li>Authorities if required by law or to protect our legal rights</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">5. Your Rights</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Ask us to update or delete your information</li>
                  <li>Opt-out of marketing communications at any time</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">6. Cookies</h4>
                <p className="mt-5">
                  Our website may use cookies to:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>Improve website performance</li>
                  <li>Track anonymous usage data via tools like Google Analytics</li>
                </ul>
                <p className="mt-5">
                  You can control cookie preferences through your browser settings.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">7. Third-Party Links</h4>
                <p className="mt-5">
                  Our website may contain links to third-party sites (e.g., Instagram, LinkedIn, YouTube). We are not responsible for their content or privacy practices.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">8. Changes to This Policy</h4>
                <p className="mt-5">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">9. Contact Us</h4>
                <p className="mt-5">
                  If you have any questions or concerns about this Privacy Policy, please reach out to us:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>📧 hello@syntorymedia.com</li>
                  <li>📞 +91 95116 87723</li>
                  <li>📍 Hiranandani, Powai, Mumbai – 400076</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
