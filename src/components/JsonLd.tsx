import React from 'react';

interface SchemaProps {
    children?: React.ReactNode;
}

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Syntory Media',
        url: 'https://syntorymedia.com',
        logo: 'https://syntorymedia.com/logo.svg',
        description: 'Website design agency for founder-led brands, building conversion-focused sites that improve trust, lead quality, and search visibility.',
        foundingDate: '2024',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-9511687723',
            email: 'hello@syntorymedia.com',
            contactType: 'sales',
            availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
            'https://instagram.com/syntorymedia',
            'https://x.com/syntorymedia',
            'https://www.linkedin.com/company/syntorymedia',
            'https://youtube.com/@syntorymedia',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Syntory Media',
        url: 'https://syntorymedia.com',
        description: 'Website design agency for founder-led brands in Mumbai and beyond.',
        publisher: {
            '@type': 'Organization',
            name: 'Syntory Media',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Syntory Media',
        image: 'https://syntorymedia.com/logo.svg',
        '@id': 'https://syntorymedia.com',
        url: 'https://syntorymedia.com',
        telephone: '+91-9511687723',
        email: 'hello@syntorymedia.com',
        priceRange: 'Custom quote',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hiranandani',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400076',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.1176,
            longitude: 72.9090,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
        areaServed: [
            { '@type': 'City', name: 'Mumbai' },
            { '@type': 'Country', name: 'India' },
            { '@type': 'Place', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Website Strategy and Development Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Conversion-Focused Website Strategy',
                        description: 'Positioning, page structure, and conversion planning for founder-led brands.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Custom Website Design and Development',
                        description: 'Design and build in Next.js with responsive UX, speed, and clear content hierarchy.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SEO and AEO Content Structure',
                        description: 'Search-friendly and answer-friendly page structure, metadata, and schema for visibility.',
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
