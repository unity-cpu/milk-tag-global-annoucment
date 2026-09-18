# untiys text thing

Password-protected static site ready for Vercel.

## Password

Default password is: **`untiy764`**

Change it in `index.html` — look for:

```js
const CORRECT_PASSWORD = "untiy764";
```

## Deploy to Vercel

### Option 1 – Vercel CLI (fastest)

```bash
cd untiys-text-thing
npx vercel
```

Follow the prompts. It will give you a live URL.

### Option 2 – GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Deploy (no build command needed – it's pure static)

### Option 3 – Drag & drop

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire `untiys-text-thing` folder onto the page

## How the lock works

- Full-screen password gate appears first
- Nothing in the main UI is interactive until the correct password is entered
- Once unlocked, the session stays unlocked in that browser tab (uses `sessionStorage`)
- Closing the tab / opening a new one requires the password again
