import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://vssgranulation.com/",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1.0,
},
{
url: "https://vssgranulation.com/products/",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},
{
url: "https://vssgranulation.com/products/crumb-rubber/",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},
{
url: "https://vssgranulation.com/products/epdm-granules/",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},
{
url: "https://vssgranulation.com/products/tyre-wire/",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},
{
url: "https://vssgranulation.com/about/",
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.7,
},
{
url: "https://vssgranulation.com/contact/",
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.6,
},
];
}
