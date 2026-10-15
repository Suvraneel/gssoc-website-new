![GSSoC Logo Light](https://user-images.githubusercontent.com/63473496/213306239-9e8fc317-ce2f-4127-8bfe-17f5df06ee99.png#gh-light-mode-only)
![GSSoC Logo Dark](https://user-images.githubusercontent.com/63473496/213306279-338f7ce9-9a9f-4427-8c2a-3e344874498f.png#gh-dark-mode-only)

# Official website repository for the GirlScript Summer of Code 2022 (GSSoC'22)

GirlScript Summer Of Code is a three-month-long Open-Source Program conducted every summer by the Girlscript Foundation.  
With constant efforts, participants contribute to numerous projects under the extreme guidance of skilled mentors over these months. With such exposure, students begin to contribute to real-world projects from the comfort of their homes. GirlScript Summer Of Code has witnessed active participation over the years, and this website is a snapshot of the 2022 edition.
  
---
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
- Subsequently this was designed from scratch purely using [TailwindCSS](https://tailwindcss.com/) framework and does not use any predefined UI library or design system.
- The brand palette and prototype was designed in [Figma](https://figma.com) and can be found **[HERE](https://www.figma.com/file/aXL6autoWxlLLqLyYTTLVB/GirlScript-Summer-of-Code?t=IGeoI4nib4u0ejJf-0)**

## Preview

[gssoc-website.webm](https://user-images.githubusercontent.com/63473496/213291499-67c96070-0a8a-4fd7-986d-e72b226a6be6.webm)

## Setting Up the Development Environment
First, install the node modules & dependencies:  

```bash
npm i
# or
yarn
```
## Getting Started


Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

## Project Structure  

```
.
├── .github
│   └── workflows
│       ├── nextjs.yml
│       └── contributors.yml
├── public/*
├── components/*
├── lib/*
├── pages/*
├── styles/*
├── package.json
├── next.config.js
├── eslint.config.mjs
├── postcss.config.js
├── README.md
└── contributors.md
```
- [x] You can start editing the homepage by modifying `pages/index.js`. The page auto-updates as you edit the file.
- [x] All the other pages under the pages directory are a part of the sitemap and represent the different webpages in the website.
- [x] The `pages/api` directory holds the site's static data (projects, events, FAQ, schedule, code of conduct, blogs, campus ambassadors and the final leaderboard). The site has no server-side API routes; every page reads this bundled data.
- [x] The various components used in the pages have been defined under `components` directory   
- [x] `public` directory contains all the assets used in the project (including images, certificates, graphics and logos). Reference them from components through `asset("/path")` from `lib/asset.js` so the deploy base path is applied.
The `styles/globals.css` file consists of all the custom css used apart from inline Tailwind styles.  

## Theming and Dual Modes

The website was designed to support both light and dark themes. It opens in light mode, and the toggle in the navbar switches the theme for the whole website.

### Light Mode  

<details> <summary>Toggle me to Preview!</summary>
  
![image](https://user-images.githubusercontent.com/83456083/236680082-9182439e-633a-4269-a5bb-9720c87a57b2.png) 
  
</details>

### Dark Mode  

<details> <summary>Toggle me to Preview!</summary>
  
![image](https://user-images.githubusercontent.com/83456083/236680214-b1f29e4a-bf08-496e-bbb3-8776c9f1c8cf.png)
  
</details>

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on GitHub pages  
The site is a static export (`output: "export"` in `next.config.js`). `.github/workflows/nextjs.yml` lints and builds every pull request, and on pushes to `main` uploads `./out` and deploys it with GitHub Pages (Settings → Pages → Source: GitHub Actions).

When the site is served from a sub-path (a project site such as `https://<user>.github.io/<repo>/`), the workflow passes the Pages base path as `NEXT_BASE_PATH`; `next.config.js` applies it and `lib/asset.js` adds it to files in `public/`. With a custom domain the base path is empty.

Tailwind CSS 4 is configured in `styles/globals.css` (`@theme`), not in a `tailwind.config.js`.

## Participating Projects List
![Project List](https://user-images.githubusercontent.com/63473496/213307997-43920dbd-3042-468b-97df-93d22f17e61b.png)

The list of participating projects for GirlScript Summer of Code 2022 is bundled with the site at `pages/api/projects2022.json`, and the 2021 list at `pages/api/projectsData.js`. The 2022 list was exported from the selected-projects Google Sheet; the site no longer fetches it at runtime.

## Leaderboard

![Leaderboard](https://user-images.githubusercontent.com/63473496/213297009-6faeff7e-5e4b-442a-b67d-7a3de9c17dcd.png)

The leaderboard's backend is hosted in [Heroku](https://www.heroku.com/) and is developed in a separate repository which can be found **[HERE](https://github.com/girlscript/gssoc22-leaderboard-backend)**.  
This uses the [GitHub OctoKit SDK](https://github.com/octokit/octokit.js) documented **[HERE](https://github.com/octokit/octokit.js)** to fetch merged PR data for each contributor in the program and calculates their global rank as per labels assigned by the project owners/maintainers as per the following scoring system:  

![Discord Scoring System](https://user-images.githubusercontent.com/63473496/213296737-9da733f4-9a0c-4f26-b880-119227a092c4.png)

##### Note - The dynamic leaderboard was disconnected at the last date of the program at midnight (ie, 6/2/2022, 23:59:52 PM) and replaced using the static `json` of contributors' final ranking data. It can found at `pages\api\leaderboard.json`

## Certificate Verification  
![Certificate Verifier](https://user-images.githubusercontent.com/63473496/213298847-2c58c58b-e528-4807-b477-bcc7a6775cf1.png)

The website lets eligible participants of each role download their certificate:
namely Contributors, Top 100 Contributors, Mentors, Project Admins, Campus Ambassadors, Open Source Advocates and the organising team. Certificates are verified against the GSSoC 2022 eligibility lists in the `pages\JSON` directory.  

`pages\JSON\Certificates.sol` and `pages\JSON\ABI.json` document the original 2022 on-chain Merkle verifier; the site no longer calls it.  

## Learn More on Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
