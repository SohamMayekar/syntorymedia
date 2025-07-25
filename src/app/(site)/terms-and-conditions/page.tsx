import SEO from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Syntory Media"
        description="Review the terms and conditions for using Syntory Media's website and services."
        url="https://www.syntorymedia.com/terms-and-conditions"
        keywords="terms and conditions, Syntory Media, website policies"
      />
      <section>
        <div
          className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
        >
          <div className="container relative z-10">
            <div className='flex flex-col gap-5'>
              <h1 className='md:text-6xl text-4xl font-medium text-center'>
                Terms & Conditions
              </h1>
              <div className="bg-white dark:bg-dark_black p-8 rounded-2xl">
                <p className="text-sm text-gray-500">Last Updated: July 25, 2025</p>
                <p className="mt-5">
                  Welcome to Syntory Media. By accessing or using our website and services, you agree to the following Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">1. Overview</h4>
                <p className="mt-5">
                  Syntory Media is a digital studio offering website development and content creation services for businesses, brands, and creators. These Terms govern your use of our website, services, and any associated communication.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">2. Services</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>Custom website design and development</li>
                  <li>Content creation for social media (reels, posts, stories)</li>
                  <li>Brand strategy and digital presence consultation</li>
                </ul>
                <p className="mt-5">
                  All service deliverables, timelines, and pricing are discussed and agreed upon before the start of any project.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">3. Payments</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>All payments are to be made in Indian Rupees (₹) unless otherwise specified.</li>
                  <li>For project-based services, a partial or full advance may be required.</li>
                  <li>Weekly/monthly content plans are billed in advance.</li>
                  <li>No refunds will be provided once the work has started unless agreed otherwise.</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">4. Client Responsibilities</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>Providing accurate and complete information</li>
                  <li>Approving content and designs within reasonable timelines</li>
                  <li>Ensuring all media and assets provided are owned or licensed for use</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">5. Intellectual Property</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>All final deliverables remain the property of Syntory Media until full payment is received.</li>
                  <li>After full payment, ownership of custom designs, websites, or content transfers to the client.</li>
                  <li>We reserve the right to showcase work in our portfolio or marketing material.</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">6. Revisions & Feedback</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>We offer a limited number of revisions based on the plan selected.</li>
                  <li>Revisions must be requested within a reasonable time after delivery.</li>
                  <li>Excessive or out-of-scope changes may incur additional charges.</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">7. Termination</h4>
                <p className="mt-5">
                  We reserve the right to decline or terminate any project at our discretion, especially in cases of:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>Non-payment</li>
                  <li>Unethical requests</li>
                  <li>Miscommunication or harassment</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">8. Liability</h4>
                <ul className="mt-5 list-disc list-inside">
                  <li>Syntory Media shall not be liable for any losses due to website downtime or third-party platform issues.</li>
                  <li>Content misuse after handover.</li>
                  <li>Any indirect, incidental, or consequential damages.</li>
                </ul>
                <hr className="my-6" />
                <h4 className="font-semibold">9. Privacy</h4>
                <p className="mt-5">
                  We respect your privacy. Any information shared with us will only be used for project communication, billing, or marketing (if consented).
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">10. Changes to Terms</h4>
                <p className="mt-5">
                  We may update these Terms from time to time. Continued use of our services means you accept the updated terms.
                </p>
                <hr className="my-6" />
                <h4 className="font-semibold">11. Contact Us</h4>
                <p className="mt-5">
                  For questions regarding these Terms, please contact:
                </p>
                <ul className="mt-5 list-disc list-inside">
                  <li>📧 hello@syntorymedia.com</li>
                  <li>📞 +91 95116 87723</li>
                  <li>📍 Hiranandani, Powai, Mumbai, India – 400076</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
