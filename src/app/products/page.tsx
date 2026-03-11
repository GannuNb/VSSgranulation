import type { Metadata } from "next";
import HomeProducts from "../../components/HomeProducts";

export const metadata: Metadata = {
  title: "Products | Crumb Rubber, EPDM Granules & Tyre Wire | VSS Granulation",
  description:
    "Explore VSS Granulation products including crumb rubber, EPDM granules, and tyre wire. High-quality recycled rubber materials for sports flooring, playgrounds, and industrial applications.",

  keywords: [
    "crumb rubber",
    "EPDM granules",
    "tyre wire",
    "rubber granules manufacturer",
    "recycled rubber products India",
  ],

  openGraph: {
    title: "VSS Granulation Products",
    description:
      "Discover crumb rubber, EPDM granules and tyre wire manufactured from recycled tyres.",
    url: "https://vssgranulation.com/products",
    siteName: "VSS Granulation",

    images: [
      {
        url: "https://vssgranulation.com/images/crumb_rubber_a2.png",
        width: 1200,
        height: 630,
        alt: "VSS Granulation Products",
      },
    ],

    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <HomeProducts />
    </main>
  );
}