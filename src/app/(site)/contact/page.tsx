import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import SEO from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Contact | Syntory Media"
        description="Get in touch with Syntory Media for inquiries, collaborations, or support. We're here to help creators and small businesses grow."
        url="https://www.syntorymedia.com/contact"
        keywords="contact Syntory Media, creator support, small business inquiries"
      />
      <main>
        <ContactForm />
        <Faq />
      </main>
    </>
  );
}
