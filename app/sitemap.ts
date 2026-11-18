import type { MetadataRoute } from 'next'

const BASE = 'https://thewiredconscience.com'
const ROUTES = ['/', '/work', '/work/ai-cs', '/work/ns-integration', '/work/deposit', '/about', '/cv']

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({ url: BASE + path }))
}
