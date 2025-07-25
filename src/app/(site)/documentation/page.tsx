import { Documentation } from '@/app/components/documentation/Documentation'
import SEO from '@/components/SEO'

export default function Page() {
  return (
    <>
      <SEO
        title="Documentation | Syntory Media"
        description="Explore Syntory Media's comprehensive documentation to understand our services and solutions for creators and small businesses."
        url="https://www.syntorymedia.com/documentation"
        keywords="documentation, Syntory Media, creator services, small business solutions"
      />
      <Documentation />
    </>
  )
}
