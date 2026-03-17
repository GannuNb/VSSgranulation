import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vssgranulation.com"),

  title: {
    default: "VSS Granulation",
    template: "%s | VSS Granulation",
  },

  description:
    "VSS Granulation is a leading manufacturer of crumb rubber, EPDM granules and tyre wire from recycled tyres.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/logo_wt.png",
  },

  openGraph: {
    title: "VSS Granulation",
    description:
      "Manufacturer of crumb rubber, EPDM granules and tyre wire from recycled tyres.",
    url: "https://vssgranulation.com",
    siteName: "VSS Granulation",
    images: [
      {
        url: "/images/logo_wt.png",
        width: 1200,
        height: 630,
        alt: "VSS Granulation Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VSS Granulation Private Limited",
    url: "https://vssgranulation.com",
    logo: "https://vssgranulation.com/images/logo_wt.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 4049471616",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "406, 4th Floor, Patel Towers, Adarsh Nagar Colony, Nagole",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500068",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}