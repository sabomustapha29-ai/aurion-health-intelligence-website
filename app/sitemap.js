const baseUrl = 'https://aurion-health-intelligence-website-nu.vercel.app';

const routes = [
  '',
  '/about',
  '/services',
  '/solutions',
  '/health-command-centre',
  '/team',
  '/insights',
  '/partnerships',
  '/brand',
  '/contact',
];

export default function sitemap() {
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
