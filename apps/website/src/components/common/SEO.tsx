import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogType?: string
  ogImage?: string
  noIndex?: boolean
}

const defaultSEO = {
  siteName: 'SpiceCraft',
  titleTemplate: '%s | SpiceCraft',
  defaultTitle: 'SpiceCraft - Ancestral Wellness Wisdom',
  description: 'Discover the healing power of herbs and spices with SpiceCraft. Your comprehensive guide to natural wellness through culinary ingredients.',
  siteUrl: 'https://spicecraft.com',
  ogImage: '/images/brand/hero-spices.png',
}

export default function SEO({
  title,
  description = defaultSEO.description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = defaultSEO.ogImage,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle

  const fullCanonical = canonical
    ? `${defaultSEO.siteUrl}${canonical}`
    : defaultSEO.siteUrl

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${defaultSEO.siteUrl}${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
    </Helmet>
  )
}
