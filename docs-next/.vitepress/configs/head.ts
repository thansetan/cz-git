import type { HeadConfig } from "vitepress";

/* eslint-disable prettier/prettier */
/* prettier-ignore */
export const head: HeadConfig[] = [
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }],
  ["meta", { name: "keywords", content: "cz-git,commitizen,commitizen adapter,git-cz,commitizen-adapter" }],
  ["meta", { name: "google-site-verification", content: "bmaXCuUg4k9-nZLe3yIz1yQb0WO4_h8wHhkhBOl3Dec" }],
  ["meta", { name: "baidu-site-verification", content: "code-rzEqiivgqt" }],
  ["meta", { name: "twitter:title", content: "cz-git - commitizen adapter" }],
  ["meta", { name: "twitter:description", content: "A more engineered, lightweight, customizable, standard output format commitizen adapter." }],
  ["meta", { name: "twitter:creator", content: "@zhengqbbb" }],
  ["meta", { name: "twitter:site", content: "@zhengqbbb" }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:image", content: "https://cz-git.qbenben.com/images/logo.png" }],
  ["meta", { name: "twitter:image:alt", content: "logo" }],
  ["meta", { name: "og:title", content: "cz-git - commitizen adapter" }],
  ["meta", { name: "og:description", content: "A more engineered, lightweight, customizable, standard output format commitizen adapter." }],
  ["meta", { name: "og:url", content: "https://cz-git.qbenben.com/" }],
  ["meta", { name: "og:type", content: "article" }],
  ["meta", { name: "og:locale", content: "en_US" }],
  ["meta", { name: "og:image", content: "https://cz-git.qbenben.com/images/logo.png" }],
  ["meta", { name: "og:image:alt", content: "cz-git-logo" }],
  ["meta", { name: "application-name", content: "cz-git" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "cz-git" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#dd6954" }],
  ["meta", { name: "msapplication-TileImage", content: `/images/icons/favicon-192.png` }],
  ["meta", { name: "theme-color", content: "#dd6954" }],

  ["link", { rel: "canonical", href:"https://cz-git.qbenben.com/" }],
  ["link", { rel: "alternate", href:"https://cz-git.qbenben.com/", hreflang:"x-default" }],
  ["link", { rel: "alternate", href:"https://cz-git.qbenben.com/", hreflang:"en-us" }],
  ["link", { rel: "alternate", href:"https://cz-git.qbenben.com/zh/", hreflang:"zh-hans" }],
  ["link", { rel: "shortcut icon", href: `/images/favicon.ico` }],
  ["link", { rel: "icon", type: "image/x-icon", size: "16x16 32x32", href: `/images/favicon.ico` }],
  ["link", { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "152x152", href: `/images/icons/favicon-152-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "144x144", href: `/images/icons/favicon-144-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "120x120", href: `/images/icons/favicon-120-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "114x114", href: `/images/icons/favicon-114-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "180x180", href: `/images/icons/favicon-180-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "72x72", href: `/images/icons/favicon-72-precomposed.png` }],
  ["link", { rel: "apple-touch-icon", sizes: "57x57", href: `/images/icons/favicon-57-precomposed.png` }],
  ["link", { rel: "icon", sizes: "32x32", href: `/images/icons/favicon-32.png` }],
  ["link", { rel: "icon", sizes: "192x192", href: `/images/icons/favicon-192.png` }],
  ["link", { rel: "mask-icon", href: "/images/icons/safari-pinned-tab.svg", color: "#dd6954" }],

  ["link", { rel: "manifest", href: "/manifest.webmanifest" }]
]