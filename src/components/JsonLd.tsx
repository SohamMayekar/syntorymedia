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
        description: 'Premium web design agency building authority-generating digital homes that turn traffic into high-ticket clients.',
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
        description: 'Premium Web Design Agency in Mumbai - Building authority-generating digital homes',
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
        priceRange: '₹₹₹',
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
            name: 'Web Design Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'The Signal - Single Page Website',
                        description: 'High-converting one-page design with lead capture architecture',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'The Authority - Multi-Page Website',
                        description: '5-7 page storytelling structure with deep SEO optimization',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'The Empire - Full Scale E-commerce',
                        description: '10+ custom engineered pages with full e-commerce integration',
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
