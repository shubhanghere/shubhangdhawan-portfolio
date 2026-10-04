# Shubhang Dhawan Portfolio

This static Next.js site is configured for Cloudflare Pages. Visitors use the public domain; the deployed site does not depend on your computer, localhost, or home network. The canonical domain is `https://shubhangdhawan.com`.

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository and connect it from **Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git**.
2. Set the project root directory to the folder containing this `package.json` (use `shubhangdhawan_portfolio` if the repository contains the parent folder too).
3. Set the build command to **`npm run build`** and the build output directory to **`out`**. The Next.js config exports static files into `out`.
4. Under **Pages > your project > Custom domains**, add **`shubhangdhawan.com`**. Add **`www.shubhangdhawan.com`** too if you want the www address to work. Cloudflare Pages will guide the required DNS setup for a domain registered in the same account.
5. Keep the project connected to your production branch so pushes publish the site. Use Pages preview deployments to check changes before they reach the production domain.

## Show the maintenance page while editing

The maintenance page has no links or buttons, so visitors cannot navigate away from it. It also sends `noindex` and `nofollow` metadata while active.

To put the live domain into maintenance mode:

1. In **Pages > your project > Settings > Environment variables**, add `MAINTENANCE_MODE` with value **`true`** for the **Production** environment.
2. Trigger a new production deployment. Once it completes, the domain displays the roadblock sign and "Work in Progress."
3. Work on your changes and publish them as usual. The previous production deployment remains live while a new build is running.
4. When the portfolio is ready, change the production value to **`false`** (or remove the variable) and trigger another deployment. The portfolio returns on the domain.

The variable is read during the build, so changing it alone does not change the live page. A successful build is needed for each switch. Keep a deployment active and keep the domain's DNS pointed at Pages: if you delete the deployment or remove the DNS records, the maintenance page cannot be served. No website can display its own maintenance page while its hosting or DNS is unavailable.

## Build locally

Install dependencies with `npm ci`, then run `npm run build`. To preview the exported site locally, serve the generated `out` folder with any static file server. Local preview is only for development; the production site is hosted by Cloudflare Pages.
