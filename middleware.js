import { next } from '@vercel/edge';

export const config = {
  // Protect every route
  matcher: ['/(.*)'],
};

export default function middleware(request) {
  const password = process.env.SITE_PASSWORD;

  // If no password is set in Vercel env, block everything
  if (!password) {
    return new Response('SITE_PASSWORD is not set in Vercel Environment Variables.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');

    if (scheme === 'Basic' && encoded) {
      // Decode "username:password" (we only care about the password)
      const decoded = atob(encoded);
      const colonIndex = decoded.indexOf(':');
      const providedPassword = colonIndex === -1 ? decoded : decoded.slice(colonIndex + 1);

      if (providedPassword === password) {
        return next();
      }
    }
  }

  // Ask the browser to show the native password prompt
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="untiys text thing"',
      'Content-Type': 'text/plain',
    },
  });
}
