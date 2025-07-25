import Head from 'next/head';
import React from 'react';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
};

const SEO: React.FC<SEOProps> = ({ title, description, image, url, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Syntory Media" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <link rel="canonical" href={url || 'https://www.syntorymedia.com'} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <html lang="en" />
    </Head>
  );
};

export default SEO;
