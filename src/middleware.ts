import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

const routeMap: { en: Record<string, string> } = {
  en: {
    '/development': '/desarrollo',
    '/agents': '/agentes',
    '/branding': '/identidad',
    '/ecosystem': '/ecosistema',
    '/manifesto': '/manifiesto',
    '/legal-notice': '/aviso-legal',
    '/privacy-policy': '/politica-de-privacidad',
    '/cookie-policy': '/politica-de-cookies'
  }
};

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const requestedLocales = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q = 'q=1'] = lang.split(';');
      return { code: code.trim().split('-')[0], q: parseFloat(q.split('=')[1]) || 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const locale of requestedLocales) {
    if (locales.includes(locale.code)) {
      return locale.code;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const lang = pathname.split('/')[1];
    const restPath = pathname.replace(`/${lang}`, '');

    if (lang === 'en') {
      // 1. If user goes to /en/desarrollo, REDIRECT to /en/development (SEO canonical)
      const englishUrl = Object.keys(routeMap.en).find(key => routeMap.en[key] === restPath);
      if (englishUrl) {
        return NextResponse.redirect(new URL(`/en${englishUrl}`, request.url));
      }

      // 2. If user goes to /en/development, REWRITE to /en/desarrollo (Where the folder actually is)
      if (routeMap.en[restPath]) {
        return NextResponse.rewrite(new URL(`/en${routeMap.en[restPath]}`, request.url));
      }
    }

    return;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
