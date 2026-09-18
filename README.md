# untiys text thing

Password-protected site for Vercel.  
**The password lives only in Vercel Environment Variables — it is never in the source code.**

## How the password works

- Uses Vercel **Edge Middleware** + HTTP Basic Auth
- Browser shows the native login popup
- Password is read from the env var `SITE_PASSWORD`
- Nothing on the page is reachable until the correct password is entered

## Setup on Vercel

### 1. Deploy the project

```bash
cd untiys-text-thing
npx vercel
```

(or drag the folder onto vercel.com/new, or connect a GitHub repo)

### 2. Add the password (important)

1. Open your project on [vercel.com](https://vercel.com)
2. Go to **Settings → Environment Variables**
3. Add a new variable:

| Name            | Value              | Environments          |
|-----------------|--------------------|-----------------------|
| `SITE_PASSWORD` | your-secret-pass   | Production, Preview, Development |

4. **Redeploy** the project (Environment Variables only apply after a new deployment)

### 3. Done

Visit the site → browser asks for username + password.  
- Username can be anything (or left blank)  
- Password = the value you set in `SITE_PASSWORD`

## Changing the password later

Just edit `SITE_PASSWORD` in the Vercel dashboard and redeploy.  
No code changes needed.
