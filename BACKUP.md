# Jaye Watts Website Backup

This private repository is a source-code backup of the published Jaye Watts portfolio website as of **August 27, 2026**. It was created without modifying the live site, its publication state, or its domain and DNS configuration.

The frontend application is built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**. The site source, package manifest, lockfile, TypeScript configuration, Vite configuration, component library, and all production media used by the website are included in this repository.

## Run Locally

Install the locked dependencies and start the Vite development server:

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

## Production Assets

The production images and press kit are mirrored under `client/public/assets/` so this backup can render independently of the original managed storage URLs. The portfolio page references those local asset paths directly.

| Asset | Role |
|---|---|
| `jaye-hero-portrait_b26f5a7c.jpg` | Hero portrait |
| `WebOptimized-2882_5013cc18.jpg` | Coexist Gaming featured-work image |
| `IMG_2549_348f2cb3.JPG` | Wine and hospitality featured-work image |
| `GenshinImpact_NYCFestival_JUL2023_jkratochvil_DSC_8703-2_70e043e0.webp` | Experiential marketing featured-work image |
| `jayetedtalkwide_3b9f0a55.PNG` | Speaking section background |
| `jayeconstructionsite_ab81a5bb.webp` | About section portrait |
| `LettaJGamerArtistsPressKit_67c226b9.pdf` | Downloadable media kit |

The repository does not include runtime secrets or any hosting, publication, domain, or DNS configuration. It is intended as a private, reproducible code-and-assets backup.
