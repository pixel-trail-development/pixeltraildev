import React from 'react';
import { Helmet } from 'react-helmet';

const SEO =({ 
    title, 
    description, 
    keywords, 
    author, 
    imageUrl, 
    pageUrl 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta charset="utf-8" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
      <meta name="author" content="Ethan Luxton"/>
      <meta name="robots" content="index,follow"/>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <link rel="canonical" href={pageUrl}/>
      <link rel="apple-touch-icon" href="path/to/apple-touch-icon.png"/>
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Helmet>
  );
}

export default SEO