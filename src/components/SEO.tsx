import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/image-5.webp",
  ogType = "website",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://alorahomestay.in";
  const fullTitle = title.includes("Alora") ? title : `${title} | Alora Homestay Guwahati`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Alora Homestay Guwahati" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO */}
      <meta name="author" content="Alora Homestay" />
      <meta name="geo.region" content="IN-AS" />
      <meta name="geo.placename" content="Guwahati" />
      <meta name="geo.position" content="26.132181;91.825834" />
      <meta name="ICBM" content="26.132181, 91.825834" />
    </Helmet>
  );
};

export default SEO;

